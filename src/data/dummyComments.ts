import type { Comment } from '../types/post';

export const dummyCommentsData: Record<number, Comment[]> = {
    // === Post 1 ===
    1: [
        {
            id: 'c1-1', author: 'helper_1', content: '청심환 도움 됩니다! 약국에서 쉽게 구할 수 있어요.',
            createdAt: '1시간 전', likeCount: 5, replyCount: 1, replies: [], isLiked: false
        },
        {
            id: 'c1-2', author: 'user-1', content: '오 그렇군요, 당장 사러 가봐야겠네요. 감사합니다!',
            createdAt: '30분 전', likeCount: 1, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c1-3', author: 'pass_master', content: '저도 처음에 그랬는데 모의면접 많이 하니까 나아지더라고요.',
            createdAt: '10분 전', likeCount: 3, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 2 ===
    2: [
        {
            id: 'c2-1', author: 'love_doctor', content: '눈에서 멀어지면 마음에서도 멀어진다는 말이 정답입니다.',
            createdAt: '2시간 전', likeCount: 10, replyCount: 0, replies: [], isLiked: true
        },
        {
            id: 'c2-2', author: 'friend_guy', content: '친구로 남는 것도 쉽지 않죠. 거리를 두는 게 좋을 것 같아요.',
            createdAt: '1시간 전', likeCount: 4, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c2-3', author: 'experienced', content: '취미 생활에 몰두해보세요. 시간이 약입니다.',
            createdAt: '30분 전', likeCount: 7, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 3 ===
    3: [
        {
            id: 'c3-1', author: 'routine_breaker', content: '퇴근하고 바로 집에 가지 말고 서점이나 카페라도 들러보세요.',
            createdAt: '3시간 전', likeCount: 8, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c3-2', author: 'user-1', content: '그것도 좋은 방법이네요. 오늘 실천해봐야겠어요.',
            createdAt: '1시간 전', likeCount: 2, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 4 ===
    4: [
        {
            id: 'c4-1', author: 'hr_manager', content: '사소한 업무라도 수치화해서 성과로 표현하는 게 중요해요.',
            createdAt: '4시간 전', likeCount: 15, replyCount: 0, replies: [], isLiked: true
        },
        {
            id: 'c4-2', author: 'same_worries', content: '저도 경력기술서 쓸 때마다 멘붕 와요 ㅠㅠ',
            createdAt: '2시간 전', likeCount: 3, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 5 ===
    5: [
        {
            id: 'c5-1', author: 'active_life', content: '저는 등산 동호회 다니는데 활력도 생기고 좋더라고요.',
            createdAt: '5시간 전', likeCount: 6, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c5-2', author: 'home_body', content: '집에서 넷플릭스 보는 게 최고 아닌가요? ㅎㅎ',
            createdAt: '3시간 전', likeCount: 12, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c5-3', author: 'user-1', content: '등산 좋죠... 근데 체력이 안 따라줄까 봐 걱정이네요.',
            createdAt: '1시간 전', likeCount: 0, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 6 ===
    6: [
        {
            id: 'c6-1', author: 'some_master', content: '바빠서 그럴 수도 있지만 4~5시간은 좀 기네요...',
            createdAt: '1일 전', likeCount: 2, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c6-2', author: 'fox_girl', content: '관심 있으면 화장실 갈 때라도 보낼 텐데 ㅠㅠ',
            createdAt: '12시간 전', likeCount: 5, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 7 ===
    7: [
        {
            id: 'c7-1', author: 'late_starter', content: '저도 32살에 시작해서 지금 3년차 개발자입니다. 충분히 가능해요!',
            createdAt: '6시간 전', likeCount: 20, replyCount: 1, replies: [], isLiked: true
        },
        {
            id: 'c7-2', author: 'user-1', content: '와 정말요? 큰 힘이 되네요. 혹시 어떤 언어로 시작하셨나요?',
            createdAt: '5시간 전', likeCount: 3, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c7-3', author: 'realist', content: '요즘 시장이 안 좋아서 신중하셔야 합니다.',
            createdAt: '4시간 전', likeCount: 8, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c7-4', author: 'bootcamp_grad', content: '부트캠프 알아보시는 것도 추천드려요.',
            createdAt: '2시간 전', likeCount: 4, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 8 ===
    8: [
        {
            id: 'c8-1', author: 'sleep_fairy', content: '마그네슘 섭취해보세요. 저는 효과 봤어요.',
            createdAt: '7시간 전', likeCount: 6, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c8-2', author: 'counting_sheep', content: '유튜브에 수면 명상 검색해서 들어보세요.',
            createdAt: '5시간 전', likeCount: 9, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 9 ===
    9: [
        {
            id: 'c9-1', author: 'ex_lover', content: '시간이 지나면 미화돼서 더 생각나는 거래요.',
            createdAt: '8시간 전', likeCount: 11, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c9-2', author: 'move_on', content: '새로운 사람 만나면 싹 잊혀집니다.',
            createdAt: '6시간 전', likeCount: 15, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c9-3', author: 'user-1', content: '소개팅이라도 받아봐야 할까요... 휴',
            createdAt: '1시간 전', likeCount: 2, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 10 ===
    10: [
        {
            id: 'c10-1', author: 'office_worker', content: '그냥 무시하세요. 일만 잘하면 됩니다.',
            createdAt: '9시간 전', likeCount: 18, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c10-2', author: 'leader_kim', content: '한번 진지하게 면담 요청해보시는 건 어떨까요?',
            createdAt: '4시간 전', likeCount: 5, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 11: Tasty Cat's post ===
    11: [
        {
            id: 'c11-1', author: 'spicy_lover', content: '엽기떡볶이 착한맛 추천합니다!',
            createdAt: '10분 전', likeCount: 3, replyCount: 0, replies: [], isLiked: true
        },
        {
            id: 'c11-2', author: 'user-1', content: '마라탕 어떠세요? 요즘 날씨엔 마라탕이죠.',
            createdAt: '5분 전', likeCount: 8, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c11-3', author: 'chicken_god', content: '매운 치킨도 괜찮을 것 같아요.',
            createdAt: '1분 전', likeCount: 1, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 12: Newbie Dev's post ===
    12: [
        {
            id: 'c12-1', author: 'fashionista', content: '첫날은 깔끔한 셔츠에 슬랙스가 국룰입니다.',
            createdAt: '30분 전', likeCount: 10, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c12-2', author: 'user-1', content: '스타트업이면 후드티 입고 가도 될 걸요? 그래도 첫날은 단정하게!',
            createdAt: '10분 전', likeCount: 5, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 13: Solo Escape's post ===
    13: [
        {
            id: 'c13-1', author: 'talk_master', content: '상대방의 관심사를 먼저 물어보세요.',
            createdAt: '1시간 전', likeCount: 6, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c13-2', author: 'user-1', content: '너무 잘 보이려 애쓰지 말고 편안하게 대화하세요 화이팅!',
            createdAt: '40분 전', likeCount: 3, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c13-3', author: 'introvert', content: '어색한 침묵만 없으면 반은 성공입니다.',
            createdAt: '20분 전', likeCount: 2, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 14: Lazy Day's post ===
    14: [
        {
            id: 'c14-1', author: 'doctor_p', content: '무기력증이 지속되면 상담을 받아보세요.',
            createdAt: '2시간 전', likeCount: 12, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c14-2', author: 'user-1', content: '저도 가끔 그래요. 하루 정도는 푹 쉬는 게 충전이 되더라고요.',
            createdAt: '1시간 전', likeCount: 4, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 15: Salary King's post ===
    15: [
        {
            id: 'c15-1', author: 'negotiator', content: '업계 평균 연봉 자료를 준비해가세요.',
            createdAt: '3시간 전', likeCount: 7, replyCount: 0, replies: [], isLiked: true
        },
        {
            id: 'c15-2', author: 'senior_dev', content: '성과를 수치로 증명하는 게 가장 확실합니다.',
            createdAt: '2시간 전', likeCount: 11, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c15-3', author: 'user-1', content: '떨지 말고 당당하게 요구하세요! 응원합니다.',
            createdAt: '1시간 전', likeCount: 2, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 16: Muscle Man's post ===
    16: [
        {
            id: 'c16-1', author: 'trainer_k', content: '근육통은 운동으로 풀어야 합니다. 가벼운 유산소 추천해요.',
            createdAt: '4시간 전', likeCount: 5, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c16-2', author: 'user-1', content: '너무 무리하지 마시고 폼롤러 스트레칭 꼭 해주세요.',
            createdAt: '3시간 전', likeCount: 3, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 17: Long Distance's post ===
    17: [
        {
            id: 'c17-1', author: 'kt_vip', content: '교통비가 만만치 않을 텐데요...',
            createdAt: '5시간 전', likeCount: 4, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c17-2', author: 'user-1', content: '서로 신뢰만 있다면 거리는 문제되지 않는다고 생각해요.',
            createdAt: '2시간 전', likeCount: 8, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 18: Dev Master's post ===
    18: [
        {
            id: 'c18-1', author: 'react_beginner', content: '저 참여하고 싶습니다! 연락처 남겨주세요.',
            createdAt: '6시간 전', likeCount: 2, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c18-2', author: 'designer_lee', content: '디자이너도 구하시나요?',
            createdAt: '4시간 전', likeCount: 1, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c18-3', author: 'user-1', content: '백엔드는 구하셨나요? 관심 있습니다.',
            createdAt: '1시간 전', likeCount: 2, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 19: Green Thumb's post ===
    19: [
        {
            id: 'c19-1', author: 'plant_lover', content: '스킨답서스 추천합니다. 물만 줘도 잘 자라요.',
            createdAt: '7시간 전', likeCount: 9, replyCount: 0, replies: [], isLiked: true
        },
        {
            id: 'c19-2', author: 'user-1', content: '몬스테라도 키우기 쉽고 인테리어 효과 좋아요!',
            createdAt: '5시간 전', likeCount: 6, replyCount: 0, replies: [], isLiked: false
        }
    ],
    // === Post 20: Sad Boy's post ===
    20: [
        {
            id: 'c20-1', author: 'friend_zone', content: '시간이 지나면 다시 편해질 수 있어요. 힘내세요.',
            createdAt: '8시간 전', likeCount: 15, replyCount: 0, replies: [], isLiked: false
        },
        {
            id: 'c20-2', author: 'user-1', content: '용기 내신 모습이 멋집니다. 후회는 없으실 거예요.',
            createdAt: '3시간 전', likeCount: 7, replyCount: 0, replies: [], isLiked: true
        }
    ]
};
