# Oxford 3000 Chunk Learner (Mobile-first Web App)

Web app học từ vựng tiếng Anh theo **chunk-based learning** cho người Việt, thiết kế tối ưu điện thoại và có thể chạy local ngay không cần backend.

## Stack
- React + TypeScript + Vite
- Tailwind CSS
- LocalStorage (lưu tiến độ, settings, favorites, streak)

## Điểm chính
- Mobile-first UX + bottom navigation: `Home / Learn / Review / Search / Profile`
- Học theo bài, theo tình huống, theo chunk và theo review
- Flashcard + mini quiz + lọc theo chủ đề / difficult / random
- Dashboard tiến độ: streak, từ đã học, chunk đã học, mạnh/yếu theo chủ đề
- Spaced repetition đơn giản với trạng thái:
  - `new` / `learning` / `familiar` / `review` / `mastered`
- Dark mode + cài đặt mục tiêu học mỗi ngày
- Dữ liệu mẫu có schema chuẩn để mở rộng lên full Oxford 3000

## Cấu trúc dữ liệu từ vựng
Mỗi entry có:
- `id, word, level, pos, ipa, meaning_vi`
- `topic, contexts`
- `collocations`
- `examples`
- `notes, common_mistakes`
- `synonyms, antonyms`
- `frequency_order`

Bạn chỉ cần thêm file/chủ đề mới theo cùng schema là app hoạt động tiếp.

## Thư mục chính
```
src/
  components/
  data/
    vocabulary.ts
    lessons.ts
    topics.ts
  hooks/
    useAppState.ts
  lib/
    spacedRepetition.ts
    progress.ts
    filters.ts
    storage.ts
  styles/
```

## Chạy local
```bash
npm install
npm run dev
```

Mở `http://localhost:5173`.

## Build production
```bash
npm run build
npm run preview
```

## Mở rộng lên full Oxford 3000
1. Tách dữ liệu theo từng chủ đề (`src/data/vocab/<topic>.ts`).
2. Giữ nguyên schema `VocabularyEntry` trong `src/types.ts`.
3. Thêm lesson/situation map trong `src/data/lessons.ts`.
4. App tự dùng được các tính năng lọc, search, review và dashboard mà không cần đổi kiến trúc.

## Gợi ý lộ trình học 10–15 phút/ngày
- 5 phút: Learn (1 lesson)
- 5 phút: Review (only difficult + random)
- 3 phút: Search nhanh các chunks vừa học
- 2 phút: xem dashboard + streak để duy trì động lực
