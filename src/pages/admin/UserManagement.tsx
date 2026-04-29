// 담당자: 노혜정
// 관리자 회원 목록과 상세 패널을 차분하게 살펴볼 수 있도록 만든 화면이다.
import React, { useEffect, useMemo, useState } from 'react';
import {
  type AdminUserDetail,
  type AdminUserEntry,
  fetchAdminUserDetail,
  fetchAdminUsers,
} from '../../api/admin';

type MemberTab = 'ALL' | 'ACTIVE' | 'INACTIVE';

const PAGE_SIZE = 20;

// 관리자 회원관리 화면은 목록, 필터, 상세 패널이 함께 있는 마스터-디테일 구조다.
// React 상태를 나눠 두면 검색, 탭, 페이지, 상세 패널을 각각 조금씩 편하게 다룰 수 있다.
function getInitial(name: string) {
  return name.trim().charAt(0).toUpperCase() || '?';
}

function getStatusLabel(status: string) {
  switch (status) {
    case 'ACTIVE':
      return '활성';
    case 'SUSPENDED':
      return '정지';
    case 'WITHDRAWN':
      return '탈퇴';
    default:
      return status;
  }
}

function getRoleLabel(role: string) {
  return role === 'ADMIN' ? '관리자' : '일반 사용자';
}

const UserManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MemberTab>('ALL');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [members, setMembers] = useState<AdminUserEntry[]>([]);
  const [selectedMember, setSelectedMember] = useState<AdminUserDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const statusParam = useMemo<'ACTIVE' | 'INACTIVE' | undefined>(() => {
    if (activeTab === 'ACTIVE') return 'ACTIVE';
    if (activeTab === 'INACTIVE') return 'INACTIVE';
    return undefined;
  }, [activeTab]);

  useEffect(() => {
    // 목록은 검색어, 탭, 페이지가 바뀔 때마다 다시 불러온다.
    let isMounted = true;

    const loadMembers = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const response = await fetchAdminUsers({
          page,
          size: PAGE_SIZE,
          keyword: searchKeyword.trim() || undefined,
          status: statusParam,
        });

        if (!isMounted) return;

        setMembers(response.items);
        setTotalCount(response.totalCount);
        setTotalPages(response.totalPages);
      } catch (error) {
        if (!isMounted) return;
        setErrorMessage(error instanceof Error ? error.message : '회원 목록을 불러오지 못했습니다.');
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    void loadMembers();

    return () => {
      isMounted = false;
    };
  }, [page, searchKeyword, statusParam]);

  const activeCount = useMemo(() => members.filter((member) => member.status === 'ACTIVE').length, [members]);
  const inactiveCount = useMemo(() => members.filter((member) => member.status !== 'ACTIVE').length, [members]);

  const tabItems = [
    { id: 'ALL' as const, label: `전체 (${totalCount})` },
    { id: 'ACTIVE' as const, label: `활성 (${activeTab === 'ACTIVE' ? totalCount : activeCount})` },
    { id: 'INACTIVE' as const, label: `비활성 (${activeTab === 'INACTIVE' ? totalCount : inactiveCount})` },
  ];

  const openMemberDetail = async (member: AdminUserEntry) => {
    // 행을 더블클릭하면 우측 패널에 상세 정보를 채운다.
    setIsDetailLoading(true);
    setErrorMessage(null);

    try {
      const detail = await fetchAdminUserDetail(member.id);
      setSelectedMember(detail);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : '회원 상세 정보를 불러오지 못했습니다.');
    } finally {
      setIsDetailLoading(false);
    }
  };

  const handleTabChange = (tab: MemberTab) => {
    setActiveTab(tab);
    setPage(1);
    setSelectedMember(null);
  };

  const handleSearchChange = (value: string) => {
    setSearchKeyword(value);
    setPage(1);
    setSelectedMember(null);
  };

  const canGoPrev = page > 1;
  const canGoNext = page < totalPages;
  const startIndex = totalCount === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const endIndex = totalCount === 0 ? 0 : Math.min(page * PAGE_SIZE, totalCount);

  return (
    <div className="flex h-full flex-1 min-h-0 overflow-hidden bg-[#f9fafb]">
      <div
        className={`h-full min-h-0 flex-1 flex flex-col p-8 ${
          selectedMember ? 'overflow-hidden' : 'overflow-y-auto custom-scrollbar'
        }`}
      >
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-black text-zinc-900">회원관리</h1>
          </div>

          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-lg text-zinc-400">
              search
            </span>
            <input
              type="text"
              value={searchKeyword}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder="회원명, 아이디, 이메일 검색"
              className="w-72 rounded-full border-none bg-zinc-100 py-2.5 pl-11 pr-4 text-xs font-bold outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div
          className={`mb-6 flex items-center border-b border-transparent bg-transparent ${
            selectedMember ? 'max-w-4xl' : 'max-w-none'
          }`}
        >
          <div className="flex rounded-full border border-zinc-200 bg-zinc-100/50 p-1 shadow-sm">
            {tabItems.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`rounded-full px-6 py-2.5 text-[11px] font-black transition-all ${
                  activeTab === tab.id
                    ? 'border border-primary bg-white text-primary shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`flex min-h-0 flex-1 flex-col pb-16 ${selectedMember ? 'max-w-4xl' : 'max-w-none'}`}>
          <div className="grid grid-cols-12 gap-4 rounded-t-2xl border-b border-zinc-200 bg-zinc-50/50 px-6 py-4 text-[11px] font-black tracking-widest text-zinc-400">
            <div className="col-span-1 flex items-center justify-center">
              <div className="h-4 w-4 rounded border-2 border-zinc-200" />
            </div>
            <div className="col-span-5">회원정보</div>
            <div className="col-span-3 flex justify-center">상태</div>
            <div className="col-span-3">권한</div>
          </div>

          <div className="overflow-hidden rounded-b-2xl border border-t-0 border-zinc-100 bg-white shadow-sm">
            {isLoading ? (
              <div className="px-6 py-16 text-center text-sm font-bold text-zinc-400">회원 목록을 불러오는 중입니다.</div>
            ) : members.length === 0 ? (
              <div className="px-6 py-16 text-center text-sm font-bold text-zinc-400">표시할 회원이 없습니다.</div>
            ) : (
              members.map((member) => {
                const isSelected = selectedMember?.id === member.id;
                const statusLabel = getStatusLabel(member.status);
                const roleLabel = getRoleLabel(member.role);

                return (
                  <div
                    key={member.id}
                    onDoubleClick={() => void openMemberDetail(member)}
                    className={`grid cursor-pointer grid-cols-12 items-center gap-4 border-b border-zinc-50 px-6 py-5 transition-all last:border-0 ${
                      isSelected ? 'relative z-10 border-transparent bg-[#fff0f7]' : 'hover:bg-zinc-50/50'
                    }`}
                  >
                    <div className="col-span-1 flex items-center justify-center">
                      <div
                        className={`flex h-4 w-4 items-center justify-center rounded transition-colors ${
                          isSelected ? 'border-primary bg-primary text-white' : 'border-2 border-zinc-200 bg-white'
                        }`}
                      >
                        {isSelected ? <span className="material-symbols-outlined text-[12px] font-black">check</span> : null}
                      </div>
                    </div>

                    <div className="col-span-5 flex items-center gap-4">
                      {member.profileImageUrl ? (
                        <img
                          src={member.profileImageUrl}
                          alt={member.name}
                          className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                        />
                      ) : (
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black ${
                            isSelected ? 'bg-zinc-800 text-white' : 'bg-red-50 text-zinc-400'
                          }`}
                        >
                          {getInitial(member.name)}
                        </div>
                      )}
                      <div>
                        <h3 className={`mb-0.5 text-sm font-black ${isSelected ? 'text-primary' : 'text-zinc-800'}`}>
                          {member.name}
                        </h3>
                        <p className="text-[11px] font-bold text-zinc-400">{member.email}</p>
                      </div>
                    </div>

                    <div className="col-span-3 flex justify-center">
                      <span
                        className={`rounded-md px-3 py-1 text-[10px] font-black tracking-wider ${
                          member.status === 'ACTIVE' ? 'bg-blue-50 text-blue-500' : 'bg-red-50 text-red-500'
                        }`}
                      >
                        {statusLabel}
                      </span>
                    </div>

                    <div className="col-span-3 flex items-center text-xs font-bold text-zinc-600">{roleLabel}</div>
                  </div>
                );
              })
            )}
          </div>

          <div className="flex items-center justify-between px-6 py-6 text-[11px] font-bold tracking-wider text-zinc-400">
            <span>
              총 {totalCount}명 중 {startIndex}-{endIndex} 표시
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  if (canGoPrev) {
                    setPage((prev) => prev - 1);
                    setSelectedMember(null);
                  }
                }}
                disabled={!canGoPrev}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[11px] font-black text-zinc-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                이전
              </button>
              <span>
                {page} / {totalPages}
              </span>
              <button
                type="button"
                onClick={() => {
                  if (canGoNext) {
                    setPage((prev) => prev + 1);
                    setSelectedMember(null);
                  }
                }}
                disabled={!canGoNext}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[11px] font-black text-zinc-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                다음
              </button>
            </div>
          </div>

          {errorMessage ? <p className="px-6 text-sm font-bold text-red-500">{errorMessage}</p> : null}
        </div>
      </div>

      {selectedMember ? (
        <div className="relative z-50 flex h-full min-h-0 w-[500px] self-stretch flex-col overflow-hidden border-l border-zinc-100 bg-white shadow-[-20px_0_40px_rgb(0,0,0,0.03)]">
          <div className="z-10 flex items-center justify-between border-b border-zinc-50 bg-white p-8">
            <div>
              <h2 className="mb-1 text-xl font-black text-zinc-900">회원 상세 정보</h2>
              <p className="text-[11px] font-bold text-zinc-400">회원정보와 최근 활동 내역을 확인합니다.</p>
            </div>
            <button onClick={() => setSelectedMember(null)} className="text-zinc-300 transition-colors hover:text-zinc-800">
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-10 pb-40 custom-scrollbar">
            {isDetailLoading ? (
              <div className="py-16 text-center text-sm font-bold text-zinc-400">회원 상세 정보를 불러오는 중입니다.</div>
            ) : (
              <>
                <div className="mb-10 flex flex-col items-center justify-center border-b border-zinc-50 py-10">
                  <div className="relative mb-5">
                    {selectedMember.profileImageUrl ? (
                      <img
                        src={selectedMember.profileImageUrl}
                        alt={selectedMember.name}
                        className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
                      />
                    ) : (
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-zinc-100 text-2xl font-black text-zinc-400 shadow-lg">
                        {getInitial(selectedMember.name)}
                      </div>
                    )}
                  </div>
                  <h3 className="mb-1 text-2xl font-black text-zinc-900">{selectedMember.name}</h3>
                  <p className="mb-4 text-sm font-bold text-zinc-500">{selectedMember.email}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-black tracking-wider text-blue-500">
                      {getRoleLabel(selectedMember.role)}
                    </span>
                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-black tracking-wider text-green-600">
                      {getStatusLabel(selectedMember.status)}
                    </span>
                  </div>
                </div>

                <div className="mb-10 space-y-6">
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-zinc-400">기본 정보</h4>

                  <div className="space-y-2">
                    <label className="px-1 text-[11px] font-bold text-zinc-500">이름</label>
                    <input
                      type="text"
                      value={selectedMember.name}
                      readOnly
                      className="w-full rounded-2xl border border-zinc-100 bg-zinc-50 px-5 py-4 text-sm font-bold text-zinc-800 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="px-1 text-[11px] font-bold text-zinc-500">아이디</label>
                    <input
                      type="text"
                      value={selectedMember.username}
                      readOnly
                      className="w-full rounded-2xl border border-zinc-100 bg-zinc-50 px-5 py-4 text-sm font-bold text-zinc-800 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="px-1 text-[11px] font-bold text-zinc-500">연락처</label>
                    <input
                      type="text"
                      value={selectedMember.phone ?? '-'}
                      readOnly
                      className="w-full rounded-2xl border border-zinc-100 bg-zinc-50 px-5 py-4 text-sm font-bold text-zinc-800 outline-none"
                    />
                  </div>
                </div>

                <div className="mb-12 space-y-6">
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-zinc-400">계정 정보</h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-5">
                      <p className="mb-2 text-[11px] font-black text-zinc-400">권한</p>
                      <p className="text-sm font-black text-zinc-900">{getRoleLabel(selectedMember.role)}</p>
                    </div>
                    <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-5">
                      <p className="mb-2 text-[11px] font-black text-zinc-400">마지막 로그인</p>
                      <p className="text-sm font-black text-zinc-900">{selectedMember.lastLoginAt ?? '-'}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 border-t border-zinc-50 pt-10">
                  <h4 className="mb-6 text-[11px] font-black uppercase tracking-widest text-zinc-400">최근 활동 로그</h4>
                  {selectedMember.activityLogs.length === 0 ? (
                    <p className="text-sm font-bold text-zinc-400">최근 활동 로그가 없습니다.</p>
                  ) : (
                    <div className="space-y-4">
                      {selectedMember.activityLogs.map((log, index) => (
                        <div key={log.id} className="flex gap-4 rounded-3xl border border-zinc-100 bg-zinc-50 p-5">
                          <div className="mt-1">
                            <div
                              className={`rounded-full ${
                                index === 0 ? 'flex h-4 w-4 items-center justify-center bg-primary/20' : 'h-3 w-3 bg-zinc-300'
                              }`}
                            >
                              {index === 0 ? <div className="h-2 w-2 rounded-full bg-primary" /> : null}
                            </div>
                          </div>
                          <div className="min-w-0">
                            <p className={`mb-1 text-[13px] font-black ${index === 0 ? 'text-zinc-900' : 'text-zinc-700'}`}>
                              {log.activityTitle}
                            </p>
                            <p className="mb-1 text-[11px] font-bold text-zinc-500">{log.activityDetail ?? '-'}</p>
                            <p className="text-[10px] font-bold tracking-wider text-zinc-400">{log.createdAt}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="absolute bottom-0 left-0 z-20 flex w-full gap-4 border-t border-zinc-100 bg-zinc-50/80 p-8 backdrop-blur-md">
            <button
              onClick={() => setSelectedMember(null)}
              className="flex-1 rounded-2xl border-2 border-zinc-100 bg-white py-4 text-sm font-black text-zinc-700 transition-all hover:border-zinc-200 hover:bg-zinc-50 active:scale-95"
            >
              닫기
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserManagement;
