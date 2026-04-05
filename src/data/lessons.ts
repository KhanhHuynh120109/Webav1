import type { Lesson, SituationPack } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'lesson-morning-routine',
    topic: 'daily-life',
    title: 'Buổi sáng hiệu quả',
    description: 'Xây cụm từ xoay quanh lịch sinh hoạt và năng lượng đầu ngày.',
    vocabularyIds: ['v-breakfast', 'v-budget', 'v-commute', 'v-support'],
    situation: 'Making plans',
    miniPracticePrompt: 'Bạn chuẩn bị ngày mới: chọn 2 cụm phù hợp để nói kế hoạch buổi sáng.',
  },
  {
    id: 'lesson-school-focus',
    topic: 'school-education',
    title: 'Học tập chủ động',
    description: 'Cụm từ hữu ích để làm bài tập và quản lý áp lực học tập.',
    vocabularyIds: ['v-assignment', 'v-anxious', 'v-reliable', 'v-support'],
    situation: 'At school',
    miniPracticePrompt: 'Bạn sắp đến hạn nộp bài, hãy chọn cụm thể hiện hành động đúng.',
  },
  {
    id: 'lesson-career-growth',
    topic: 'work-career',
    title: 'Đi làm chuyên nghiệp',
    description: 'Chunk thường dùng khi trao đổi công việc và deadline.',
    vocabularyIds: ['v-deadline', 'v-responsible', 'v-negotiate', 'v-update'],
    situation: 'At work',
    miniPracticePrompt: 'Bạn đang họp dự án: ghép từ và collocation hợp lý.',
  },
  {
    id: 'lesson-smart-travel',
    topic: 'travel-transport',
    title: 'Di chuyển thông minh',
    description: 'Mẫu câu đặt vé, đi lại và xử lý tình huống tại sân bay.',
    vocabularyIds: ['v-book', 'v-commute', 'v-budget', 'v-update'],
    situation: 'At the airport',
    miniPracticePrompt: 'Bạn sắp bay: chọn cụm đúng để xử lý check-in.',
  },
  {
    id: 'lesson-food-talk',
    topic: 'food-drink',
    title: 'Nói chuyện đồ ăn tự nhiên',
    description: 'Tập trung cụm từ nói thói quen ăn uống và năng lượng học tập.',
    vocabularyIds: ['v-breakfast', 'v-budget', 'v-anxious', 'v-support'],
    situation: 'At a coffee shop',
    miniPracticePrompt: 'Bạn gọi đồ ở quán: điền collocation phù hợp vào hội thoại.',
  },
];

export const situationPacks: SituationPack[] = [
  {
    id: 'sit-coffee-shop',
    title: 'At a coffee shop',
    description: 'Gọi món, nói thói quen ăn sáng, đặt lịch gặp.',
    vocabularyIds: ['v-breakfast', 'v-book', 'v-budget', 'v-support'],
  },
  {
    id: 'sit-school',
    title: 'At school',
    description: 'Nộp bài, xin hỗ trợ, xử lý lo lắng trước kỳ thi.',
    vocabularyIds: ['v-assignment', 'v-anxious', 'v-support', 'v-reliable'],
  },
  {
    id: 'sit-work',
    title: 'At work',
    description: 'Deadline, trách nhiệm, cập nhật tiến độ, đàm phán.',
    vocabularyIds: ['v-deadline', 'v-responsible', 'v-update', 'v-negotiate'],
  },
  {
    id: 'sit-airport',
    title: 'At the airport',
    description: 'Đặt vé, xác nhận booking, quản lý ngân sách chuyến đi.',
    vocabularyIds: ['v-book', 'v-budget', 'v-update', 'v-commute'],
  },
  {
    id: 'sit-family',
    title: 'Talking about family',
    description: 'Mô tả sự hỗ trợ và mối quan hệ đáng tin cậy.',
    vocabularyIds: ['v-support', 'v-reliable', 'v-responsible', 'v-anxious'],
  },
  {
    id: 'sit-tech',
    title: 'Using technology',
    description: 'Cập nhật phần mềm, báo trạng thái và nguồn tin.',
    vocabularyIds: ['v-update', 'v-reliable', 'v-assignment', 'v-deadline'],
  },
];
