import { Task } from "./types/task";

const DUMMY_DATA: Task[] = [
  {
    id: "1",
    title: "Đi ngủ sớm 🌙",
    description: "Nói thế thôi chứ lại lướt TikTok tới 2h sáng... 😴",
    done: false,
    dateCreated: "2024-02-15",
  },
  {
    id: "2",
    title: "Tập gym 💪",
    description: "Tập mồm suốt, nhưng cái bụng vẫn y nguyên... 🍕",
    done: false,
    dateCreated: "2024-02-14",
  },
  {
    id: "3",
    title: "Viết code 👨‍💻",
    description: "Viết 100 dòng code, debug mất 2 tiếng, xóa hết 99 dòng. 👍",
    done: true,
    dateCreated: "2024-02-13",
  },
  {
    id: "4",
    title: "Nghiên cứu AI 🤖",
    description: "Tìm cách khiến AI code hộ mình... nhưng AI lại hỏi ngược 😵‍💫",
    done: false,
    dateCreated: "2024-02-12",
  },
  {
    id: "5",
    title: "Giải bài tập LeetCode 🧠",
    description:
      "Giải được bài EASY, mở bài MEDIUM thấy 200 upvotes, tắt máy. 🚪👋",
    done: false,
    dateCreated: "2024-02-11",
  },
  {
    id: "6",
    title: "Đi chợ 🛒",
    description: "Mua rau, trứng, thịt... về tới nhà thấy toàn snack 🍟🍫",
    done: true,
    dateCreated: "2024-02-10",
  },
  {
    id: "7",
    title: "Học ngoại ngữ 🗣",
    description:
      "Mở app học tiếng Anh, được 5 phút rồi lướt Instagram 1 tiếng 📱",
    done: false,
    dateCreated: "2024-02-09",
  },
  {
    id: "8",
    title: "Đọc sách 📖",
    description: "Đọc 2 trang sách, buồn ngủ quá nên ngủ luôn 😪",
    done: true,
    dateCreated: "2024-02-08",
  },
  {
    id: "9",
    title: "Đi cà phê ☕",
    description: "Ra quán cà phê làm việc, nhưng cuối cùng toàn tám chuyện 🗣",
    done: false,
    dateCreated: "2024-02-07",
  },
  {
    id: "10",
    title: "Luyện tập tỏ tình 💘",
    description: "Tập nói trước gương, nhưng ra gặp crush thì câm luôn 🤐",
    done: false,
    dateCreated: "2024-02-06",
  },
];

export default DUMMY_DATA;
