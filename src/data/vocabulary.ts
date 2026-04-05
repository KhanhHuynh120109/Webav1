import type { VocabularyEntry } from '../types';

export const vocabularyData: VocabularyEntry[] = [
  {
    id: 'v-breakfast', word: 'breakfast', pos: 'noun', meaning_vi: 'bữa sáng', ipa: '/ˈbrekfəst/', level: 'A1', topic: 'food-drink',
    contexts: ['morning routine', 'at home', 'at a coffee shop'],
    collocations: [
      { chunk: 'have breakfast', meaning_vi: 'ăn sáng', examples: ['I usually have breakfast at 7.', 'We had breakfast together before class.'] },
      { chunk: 'skip breakfast', meaning_vi: 'bỏ bữa sáng', examples: ['Don’t skip breakfast before an exam.'] },
      { chunk: 'healthy breakfast', meaning_vi: 'bữa sáng lành mạnh', examples: ['A healthy breakfast helps you focus.'] },
    ],
    examples: [
      { en: 'I had a quick breakfast before work.', vi: 'Tôi ăn sáng nhanh trước khi đi làm.', context: 'Daily life' },
      { en: 'She makes breakfast for her kids every day.', vi: 'Cô ấy làm bữa sáng cho con mỗi ngày.', context: 'Family' },
    ],
    notes: ['Thường dùng với động từ have.', 'Có thể dùng breakfast as a verb: We breakfasted at 8.'],
    common_mistakes: ['Không dùng eat breakfast every time; have breakfast tự nhiên hơn.'], synonyms: ['morning meal'], antonyms: [], frequency_order: 220,
  },
  {
    id: 'v-deadline', word: 'deadline', pos: 'noun', meaning_vi: 'hạn chót', ipa: '/ˈdedlaɪn/', level: 'B1', topic: 'work-career',
    contexts: ['at work', 'project planning'],
    collocations: [
      { chunk: 'meet a deadline', meaning_vi: 'kịp hạn', examples: ['We need to meet the deadline this Friday.'] },
      { chunk: 'tight deadline', meaning_vi: 'hạn gấp', examples: ['It is a tight deadline, but we can do it.'] },
      { chunk: 'deadline extension', meaning_vi: 'gia hạn hạn chót', examples: ['Can we request a deadline extension?'] },
    ],
    examples: [
      { en: 'Our team met the deadline despite several issues.', vi: 'Đội của tôi vẫn kịp hạn dù có vài vấn đề.', context: 'Work' },
      { en: 'I put all deadlines in my calendar.', vi: 'Tôi đặt mọi hạn chót vào lịch.', context: 'Planning' },
    ],
    notes: ['Dùng giới từ by: by the deadline.'], common_mistakes: ['Không nói reach deadline; nên dùng meet deadline.'], synonyms: ['due date'], antonyms: [], frequency_order: 915,
  },
  {
    id: 'v-commute', word: 'commute', pos: 'verb', meaning_vi: 'đi làm/đi học hằng ngày', ipa: '/kəˈmjuːt/', level: 'B1', topic: 'travel-transport',
    contexts: ['daily life', 'travel & transport'],
    collocations: [
      { chunk: 'commute to work', meaning_vi: 'đi làm hằng ngày', examples: ['I commute to work by bus.'] },
      { chunk: 'long commute', meaning_vi: 'quãng đường đi làm dài', examples: ['A long commute makes me tired.'] },
      { chunk: 'daily commute', meaning_vi: 'lịch đi lại hằng ngày', examples: ['I listen to podcasts during my daily commute.'] },
    ],
    examples: [
      { en: 'She commutes from the suburbs every day.', vi: 'Cô ấy đi làm từ ngoại ô mỗi ngày.', context: 'Work' },
      { en: 'My commute takes around 40 minutes.', vi: 'Tôi đi lại mất khoảng 40 phút.', context: 'Travel' },
    ],
    notes: ['Danh từ commute cũng phổ biến.'], common_mistakes: ['Không dùng commute for work; dùng commute to work.'], synonyms: ['travel regularly'], antonyms: ['work remotely'], frequency_order: 1200,
  },
  {
    id: 'v-support', word: 'support', pos: 'verb/noun', meaning_vi: 'ủng hộ; hỗ trợ', ipa: '/səˈpɔːrt/', level: 'A2', topic: 'family-relationships',
    contexts: ['talking about family', 'at work'],
    collocations: [
      { chunk: 'emotional support', meaning_vi: 'hỗ trợ tinh thần', examples: ['Friends can give strong emotional support.'] },
      { chunk: 'support each other', meaning_vi: 'hỗ trợ lẫn nhau', examples: ['Good teams support each other.'] },
      { chunk: 'customer support', meaning_vi: 'hỗ trợ khách hàng', examples: ['Contact customer support for help.'] },
    ],
    examples: [
      { en: 'My family always supports my decisions.', vi: 'Gia đình luôn ủng hộ quyết định của tôi.', context: 'Family' },
      { en: 'Thanks for your support during this project.', vi: 'Cảm ơn bạn đã hỗ trợ trong dự án này.', context: 'Work' },
    ],
    notes: ['Có thể dùng support + somebody + in something.'], common_mistakes: ['Tránh nhầm support với tolerate.'], synonyms: ['help', 'encourage'], antonyms: ['oppose'], frequency_order: 450,
  },
  {
    id: 'v-assignment', word: 'assignment', pos: 'noun', meaning_vi: 'bài tập được giao', ipa: '/əˈsaɪnmənt/', level: 'A2', topic: 'school-education',
    contexts: ['at school', 'self-study'],
    collocations: [
      { chunk: 'submit an assignment', meaning_vi: 'nộp bài tập', examples: ['Please submit your assignment by Monday.'] },
      { chunk: 'group assignment', meaning_vi: 'bài tập nhóm', examples: ['We are doing a group assignment this week.'] },
      { chunk: 'assignment deadline', meaning_vi: 'hạn nộp bài', examples: ['The assignment deadline is tomorrow.'] },
    ],
    examples: [
      { en: 'I finished my math assignment last night.', vi: 'Tôi hoàn thành bài tập toán tối qua.', context: 'School' },
      { en: 'The teacher gave us a reading assignment.', vi: 'Giáo viên giao bài đọc cho chúng tôi.', context: 'Classroom' },
    ],
    notes: ['Động từ đi cùng phổ biến: do, finish, submit.'], common_mistakes: ['Không dùng make assignment khi muốn nói làm bài.'], synonyms: ['task', 'homework'], antonyms: [], frequency_order: 680,
  },
  {
    id: 'v-anxious', word: 'anxious', pos: 'adjective', meaning_vi: 'lo lắng', ipa: '/ˈæŋkʃəs/', level: 'B1', topic: 'feelings-personality',
    contexts: ['describing feelings', 'before exams'],
    collocations: [
      { chunk: 'feel anxious', meaning_vi: 'cảm thấy lo lắng', examples: ['I feel anxious before interviews.'] },
      { chunk: 'anxious about', meaning_vi: 'lo về', examples: ['She is anxious about her test results.'] },
      { chunk: 'look anxious', meaning_vi: 'trông lo lắng', examples: ['You look anxious. Is everything okay?'] },
    ],
    examples: [
      { en: 'He felt anxious while waiting for the call.', vi: 'Anh ấy thấy lo khi chờ cuộc gọi.', context: 'Life' },
      { en: 'Try to breathe slowly when you are anxious.', vi: 'Hãy thở chậm khi bạn lo lắng.', context: 'Health' },
    ],
    notes: ['Anxious about + noun / anxious to + verb.'], common_mistakes: ['Không dùng anxious for doing; dùng anxious to do.'], synonyms: ['nervous', 'worried'], antonyms: ['calm'], frequency_order: 1090,
  },
  {
    id: 'v-update', word: 'update', pos: 'verb/noun', meaning_vi: 'cập nhật', ipa: '/ˌʌpˈdeɪt/', level: 'A2', topic: 'technology-internet',
    contexts: ['using technology', 'at work'],
    collocations: [
      { chunk: 'software update', meaning_vi: 'bản cập nhật phần mềm', examples: ['A software update is available now.'] },
      { chunk: 'update someone on', meaning_vi: 'cập nhật cho ai về', examples: ['Can you update me on the plan?'] },
      { chunk: 'latest update', meaning_vi: 'cập nhật mới nhất', examples: ['The latest update fixed the bug.'] },
    ],
    examples: [
      { en: 'Please update your app before class.', vi: 'Hãy cập nhật ứng dụng trước buổi học.', context: 'Technology' },
      { en: 'I will update the report tonight.', vi: 'Tôi sẽ cập nhật báo cáo tối nay.', context: 'Work' },
    ],
    notes: ['update là cả danh từ và động từ.'], common_mistakes: ['Không dùng upgrade khi chỉ nói cập nhật thông tin đơn thuần.'], synonyms: ['refresh'], antonyms: ['outdate'], frequency_order: 540,
  },
  {
    id: 'v-budget', word: 'budget', pos: 'noun/verb', meaning_vi: 'ngân sách; dự trù', ipa: '/ˈbʌdʒɪt/', level: 'B1', topic: 'daily-life',
    contexts: ['shopping & money', 'work planning'],
    collocations: [
      { chunk: 'set a budget', meaning_vi: 'đặt ngân sách', examples: ['Set a budget before shopping online.'] },
      { chunk: 'tight budget', meaning_vi: 'ngân sách eo hẹp', examples: ['We are on a tight budget this month.'] },
      { chunk: 'stay within budget', meaning_vi: 'chi trong ngân sách', examples: ['We stayed within budget for the trip.'] },
    ],
    examples: [
      { en: 'I set a weekly food budget.', vi: 'Tôi đặt ngân sách ăn uống theo tuần.', context: 'Money' },
      { en: 'The team needs to budget for marketing.', vi: 'Đội cần dự trù ngân sách cho marketing.', context: 'Work' },
    ],
    notes: ['budget for + noun'], common_mistakes: ['Không dùng budgetize.'], synonyms: ['financial plan'], antonyms: [], frequency_order: 990,
  },
  {
    id: 'v-book', word: 'book', pos: 'verb/noun', meaning_vi: 'đặt chỗ; cuốn sách', ipa: '/bʊk/', level: 'A1', topic: 'travel-transport',
    contexts: ['at the airport', 'travel planning'],
    collocations: [
      { chunk: 'book a flight', meaning_vi: 'đặt chuyến bay', examples: ['I booked a flight to Da Nang.'] },
      { chunk: 'book in advance', meaning_vi: 'đặt trước', examples: ['Book in advance during holidays.'] },
      { chunk: 'booking confirmation', meaning_vi: 'xác nhận đặt chỗ', examples: ['Show your booking confirmation at check-in.'] },
    ],
    examples: [
      { en: 'We should book a hotel tonight.', vi: 'Chúng ta nên đặt khách sạn tối nay.', context: 'Travel' },
      { en: 'Did you book the tickets yet?', vi: 'Bạn đặt vé chưa?', context: 'Airport' },
    ],
    notes: ['book + object: book a room/flight/table.'], common_mistakes: ['Không nói do a booking như động từ chính.'], synonyms: ['reserve'], antonyms: ['cancel'], frequency_order: 130,
  },
  {
    id: 'v-responsible', word: 'responsible', pos: 'adjective', meaning_vi: 'có trách nhiệm', ipa: '/rɪˈspɒnsəbəl/', level: 'B1', topic: 'work-career',
    contexts: ['at work', 'school project'],
    collocations: [
      { chunk: 'responsible for', meaning_vi: 'chịu trách nhiệm cho', examples: ['She is responsible for onboarding new staff.'] },
      { chunk: 'socially responsible', meaning_vi: 'có trách nhiệm xã hội', examples: ['We support socially responsible brands.'] },
      { chunk: 'be responsible with', meaning_vi: 'sử dụng có trách nhiệm', examples: ['Be responsible with your money.'] },
    ],
    examples: [
      { en: 'I am responsible for this report.', vi: 'Tôi chịu trách nhiệm báo cáo này.', context: 'Work' },
      { en: 'He is very responsible with his tasks.', vi: 'Anh ấy rất có trách nhiệm với công việc.', context: 'Career' },
    ],
    notes: ['responsible for + noun/V-ing'], common_mistakes: ['Không dùng responsible of trong ngữ cảnh này.'], synonyms: ['reliable'], antonyms: ['careless'], frequency_order: 830,
  },
  {
    id: 'v-reliable', word: 'reliable', pos: 'adjective', meaning_vi: 'đáng tin cậy', ipa: '/rɪˈlaɪəbəl/', level: 'B1', topic: 'family-relationships',
    contexts: ['work relationship', 'friendship'],
    collocations: [
      { chunk: 'reliable source', meaning_vi: 'nguồn đáng tin', examples: ['Use a reliable source for your essay.'] },
      { chunk: 'highly reliable', meaning_vi: 'rất đáng tin cậy', examples: ['This app is highly reliable.'] },
      { chunk: 'reliable friend', meaning_vi: 'người bạn đáng tin', examples: ['She is a reliable friend in difficult times.'] },
    ],
    examples: [
      { en: 'Public transport is reliable in this city.', vi: 'Giao thông công cộng ở thành phố này khá đáng tin.', context: 'Travel' },
      { en: 'He is reliable and always on time.', vi: 'Anh ấy đáng tin và luôn đúng giờ.', context: 'Work' },
    ],
    notes: ['Trạng từ: reliably'], common_mistakes: ['Không nhầm với available.'], synonyms: ['dependable'], antonyms: ['unreliable'], frequency_order: 940,
  },
  {
    id: 'v-negotiate', word: 'negotiate', pos: 'verb', meaning_vi: 'đàm phán', ipa: '/nɪˈɡəʊʃieɪt/', level: 'B2', topic: 'work-career',
    contexts: ['business meeting', 'shopping & money'],
    collocations: [
      { chunk: 'negotiate a deal', meaning_vi: 'đàm phán một thỏa thuận', examples: ['They negotiated a better deal with suppliers.'] },
      { chunk: 'negotiate with', meaning_vi: 'đàm phán với', examples: ['We need to negotiate with the client.'] },
      { chunk: 'salary negotiation', meaning_vi: 'đàm phán lương', examples: ['Prepare well for salary negotiation.'] },
    ],
    examples: [
      { en: 'She negotiated a flexible schedule.', vi: 'Cô ấy đàm phán được lịch làm việc linh hoạt.', context: 'Career' },
      { en: 'We negotiated the price politely.', vi: 'Chúng tôi thương lượng giá một cách lịch sự.', context: 'Shopping' },
    ],
    notes: ['negotiate something / negotiate with someone'], common_mistakes: ['Không dùng negotiate about + specific noun khi có object trực tiếp.'], synonyms: ['bargain'], antonyms: ['demand'], frequency_order: 1500,
  },
];
