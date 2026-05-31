const QUESTIONS = [
  {
    "num": 1,
    "q": "Điều mong muốn cuối cùng của Hồ Chí Minh ghi trong Di chúc là gì?",
    "a": "Xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ, giàu mạnh.",
    "b": "Xây dựng một nước Việt Nam dân chủ, công bằng, văn minh",
    "c": "Xây dựng một nước Việt Nam phồn vinh và cường thịnh",
    "d": "Làm cho mọi người được hạnh phúc",
    "ans": "a"
  },
  {
    "num": 2,
    "q": "Đối tượng nghiên cứu của môn học tư tưởng Hồ Chí Minh là:",
    "a": "Là hệ thống quan điểm về cách mạng Việt Nam và thế giới.",
    "b": "Là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam.",
    "c": "Là tư tưởng về đấu tranh dân tộc và xây dựng chủ nghĩa xã hội.",
    "d": "Là tư tưởng giải phóng dân tộc.",
    "ans": "b"
  },
  {
    "num": 3,
    "q": "Chọn đáp án trả lời đúng nhất về tư tưởng Hồ Chí Minh.",
    "a": "Tư tưởng Hồ Chí Minh là chủ nghĩa Mác - Lênin ở Việt Nam.",
    "b": "Tư tưởng Hồ Chí Minh là kết quả của sự phát triển sáng tạo chủ nghĩa Mác -Lênin vào điều kiện thực tế của nước ta.",
    "c": "Tư tưởng Hồ Chí Minh là kết quả của sự vận dụng sáng tạo chủ nghĩa Mác -Lênin vào điều kiện thực tế của nước ta.",
    "d": "Tư tưởng Hồ Chí Minh là kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta.",
    "ans": "d"
  },
  {
    "num": 4,
    "q": "Thuật ngữ tư tưởng trong khái niệm “tư tưởng Hồ Chí Minh” được hiểu theo nghĩa nào?",
    "a": "Tư tưởng là sự phản ánh hiện thực trong ý thức, là biểu hiện của mối quan hệ giữa con người với xung quanh.",
    "b": "Hệ thống những quan niệm, quan điểm, luận điểm được xây dựng trên nền tảng triết học nhất quán, được hình thành trên cơ sở thực tiễn và trở lại chỉ đạo thực tiễn, cái tạo hiện thực.",
    "c": "Tư tưởng là quan điểm, quan niệm của một cá nhân, một cộng đồng.",
    "d": "Tư tưởng là sự phản ánh hiện thực trong ý thức, là biểu hiện của mối quan hệ giữa con người với xung quanh.",
    "ans": "b"
  },
  {
    "num": 5,
    "q": "Hồ Chí Minh được UNESCO tôn vinh Anh hùng dân tộc và nhà văn hóa kiệt xuất ở Việt Nam năm nào?",
    "a": "1987.",
    "b": "1984.",
    "c": "1988 (11/1987) đã khẳng định: “Chủ tịch Hồ Chí Minh là Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam”",
    "d": "1986.",
    "ans": "a"
  },
  {
    "num": 6,
    "q": "Phong cách tư duy Hồ Chí Minh gồm những phong cách nào?",
    "a": "Phong cách tư duy khoa học, cách mạng và hiện đại.",
    "b": "Cả 03 đáp án trên đều đúng.",
    "c": "Phong cách tư duy hài hòa, uyển chuyển, có lý có tình.",
    "d": "Phong cách tư duy độc lập, tự chủ, sáng tạo.",
    "ans": "b"
  },
  {
    "num": 7,
    "q": "Phương pháp luận Hồ Chí Minh dựa trên cơ sở nào?",
    "a": "Thực tiễn đấu tranh cách mạng của Hồ Chí Minh.",
    "b": "Lấy phương pháp luận của chủ nghĩa duy vật lịch sử Mác – Lênin làm cơ sở. Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Lấy phương pháp luận của chủ nghĩa duy vật biện chứng Mác – Lênin làm cơ sở.",
    "d": "Lấy phương pháp luận chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử Mác – Lênin làm cơ sở, được hình thành và phát triển qua trình hoạt động cách mạng của Người.",
    "ans": "d"
  },
  {
    "num": 8,
    "q": "Thuật ngữ “tư tưởng Hồ Chí Minh” được dùng theo nghĩa nào?",
    "a": "Là tư tưởng của một lãnh tụ",
    "b": "Là tư tưởng của một cá nhân",
    "c": "Là tư tưởng của một giai cấp, một dân tộc",
    "d": "Là tất cả những vấn đề trên",
    "ans": "c"
  },
  {
    "num": 9,
    "q": "Khái niệm tư tưởng Hồ Chí Minh sau đâyđược nêu trong Đại hội Đảng toàn quốc lần thứ mấy: \"Tư tưởng Hồ Chí Minh là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam; kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta, kế thừa và phát triển các giá trị truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hóa nhân loại; là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi.\"?",
    "a": "Đại hội Đảng toàn quốc lần thứ VIII (1996).",
    "b": "Đại hội Đảng toàn quốc lần thứ XI (2011) HCM” như sau: “…”",
    "c": "Đại hội Đảng toàn quốc lần thứ IX (2001)",
    "d": "Đại hổi Đảng toàn quốc lần thứ X (2006)",
    "ans": "b"
  },
  {
    "num": 10,
    "q": "Đâu là ý nghĩa của việc học tập môn học Tư tưởng Hồ Chí Minh?",
    "a": "Góp phần hình thành thế giới quan khoa học.",
    "b": "Hiểu rõ hơn về lịch sử Việt Nam.",
    "c": "Góp phần hình thành tri thức về chính trị - xã hội.",
    "d": "Góp phần nâng cao năng lực tư duy lý luận.",
    "ans": "d"
  },
  {
    "num": 11,
    "q": "BCH Trung ương Đảng tôn vinh Hồ Chí Minh là “Anh hùng dân tộc vĩ đại” năm nào?",
    "a": "1969.",
    "b": "1970",
    "c": "1967.",
    "d": "1968.",
    "ans": "a"
  },
  {
    "num": 12,
    "q": "Hãy lựa chọn câu trả lời đúng nhất:",
    "a": "Hồ Chí Minh là anh hùng giải phóng dân tộc của dân tộc Việt Nam và là nhà văn hoá lỗi lạc.",
    "b": "Hồ Chí Minh là anh hùng giải phóng của dân tộc Việt Nam và là danh nhân văn hóa kiệt xuất của thế giới.",
    "c": "Hồ Chí Minh là anh hùng giải phóng dân tộc và là nhà văn hóa lớn.",
    "d": "Hồ Chí Minh là anh hùng giải phóng dân tộc và là nhà văn hóa kiệt xuất của Việt Nam .",
    "ans": "d"
  },
  {
    "num": 13,
    "q": "Văn kiện Đại hội IX quan niệm: “Tư tưởng Hồ Chí Minh là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của  … . . .  là kết quả của sự vận dụng và phát triển sáng tạo  … . . .  vào điều kiện cụ thể của nước ta, đồng thời là kết tinh tinh hoa dân tộc và trí tuệ thời đại nhằm giải phóng dân tộc, giải phóng giai cấp, giải phóng con người.”",
    "a": "Cách mạng vô sản; chủ nghĩa Mác- Lênin",
    "b": "Cách mạng Việt Nam; chủ nghĩa Mác-Lênin",
    "c": "Chủ nghĩa Mác- Lênin; cách mạng Việt Nam",
    "d": "Cách mạng xã hội chủ nghĩa; chủ nghĩa Mác- Lênin Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "b"
  },
  {
    "num": 14,
    "q": "Khái niệm tư tưởng Hồ Chí Minh được Đảng ta chính thức sử dụng vào thời gian nào?",
    "a": "Năm 1930",
    "b": "Năm 1945",
    "c": "Năm 1991",
    "d": "Năm 1969",
    "ans": "c"
  },
  {
    "num": 15,
    "q": "Giá trị của tư tưởng Hồ Chí Minh đối với dân tộc là?",
    "a": "Tài sản tinh thần vô giá của dân tộc Việt Nam",
    "b": "Tìm ra các giải pháp đấu tranh giải phóng loài người",
    "c": "Cổ vũ các dân tộc đấu tranh trong sự nghiệp giải phóng",
    "d": "Phản ánh khát vọng thời đại",
    "ans": "a"
  },
  {
    "num": 16,
    "q": "Nội dung nào là phương pháp nghiên cứu cụ thể tư tưởng Hồ Chí Minh?",
    "a": "Quan điểm toàn diện và hệ thống.",
    "b": "Quan điểm kế thừa và phát triển.",
    "c": "Phương pháp chuyên ngành, liên ngành.",
    "d": "Quan điểm lịch sử - cụ thể.",
    "ans": "c"
  },
  {
    "num": 17,
    "q": "Vấn đề nào mà giáo trình tư tưởng Hồ Chí Minh chưa nêu khi nói về ý nghĩa học tập môn học này đối với sinh viên?",
    "a": "Nâng cao lòng tự hào dân tộc, tự hào về Bác Hồ kính yêu",
    "b": "Bồi dưỡng tình yêu thiên nhiên, ý thức bảo vệ môi trường.",
    "c": "Nâng cao năng lực tư duy lý luận và phương pháp công tác",
    "d": "Bồi dưỡng phẩm chất đạo đức cách mạng và rèn luyện bản lĩnh chính trị",
    "ans": "b"
  },
  {
    "num": 18,
    "q": "Tìm đáp án sai Khái niệm tư tưởng Hồ Chí Minh mà Đại hội IX (2001) nêu lên bao gồm:",
    "a": "Ý nghĩa của tư tưởng Hồ Chí Minh thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng VN. Cơ sở hình thành tư tưởng HCM: chủ nghĩa Mác Lenin. Ý nghĩa của tư tưởng HCM (đến Đại hội X \u0026 XI mới được nêu lên): là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi",
    "b": "Nguồn gốc tư tưởng, lý luận của tư tưởng Hồ Chí Minh",
    "c": "Nội dung cơ bản của tư tưởng Hồ Chí Minh",
    "d": "Bản chất khoa học và cách mạng của tư tưởng Hồ Chí Minh",
    "ans": "a"
  },
  {
    "num": 19,
    "q": "Mục đích của tư tưởng Hồ Chí Minh là gì",
    "a": "Giải phóng các dân tộc thuộc địa",
    "b": "Giải phóng dân tộc",
    "c": "Giải phóng dân tộc, giải phóng giai cấp và giải phóng con người",
    "d": "Giải phóng giai cấp và giải phóng con người mà còn ở tầm thế giới: Giải phóng dân tộc, giải phóng xã hội, giải phóng giai cấp, giải phóng con người",
    "ans": "c"
  },
  {
    "num": 20,
    "q": "Tư tưởng Hồ Chí Minh có vị trí như thế nào trong hệ thống tư tưởng Đảng Cộng sản Việt Nam?",
    "a": "Là một bộ phận trong hệ thống tư tưởng của Đảng Tài l ệu tham khảo môn Triết - Anh Huy",
    "b": "Là bộ phận nền tảng, kim chỉ nam cho hành động của Đảng",
    "c": "Là bộ phận quan trọng trong hệ thống tư tưởng của Đảng",
    "d": "Là bộ phận rất quan trọng trong hệ thống tư tưởng của Đảng",
    "ans": "b"
  },
  {
    "num": 21,
    "q": "Luận điểm: “Dân ta có một lòng nồng nàn yêu nước. Đó là một truyền thống quý báu của ta. Từ xưa đến nay, mỗi khi Tổ quốc bị xâm lăng, thì tinh thần ấy lại sôi nổi, nó kết thành một làn sóng vô cùng mạnh mẽ, to lớn, nó lướt qua mọi sự nguy hiểm, khó khăn, nó nhấn chìm tất cả lũ bán nước và cướp nước” là của ai?",
    "a": "Phan Châu Trinh",
    "b": "Hoàng Hoa Thám",
    "c": "Hồ Chí Minh",
    "d": "Phan Bội Châu",
    "ans": "c"
  },
  {
    "num": 22,
    "q": "Theo tư tưởng Hồ Chí Minh, nền tảng tư tưởng của Đảng phải dựa trên…",
    "a": "Chủ nghĩa Mác – Lenin",
    "b": "Nho giáo",
    "c": "Phật giáo nam cho hành động",
    "d": "Chủ nghĩa Tam dân",
    "ans": "a"
  },
  {
    "num": 23,
    "q": "Đại hội nào là dấu mốc quan trọng đánh dấu sự phát triển nhận thức của Đảng về vai trò của tư tưởng Hồ Chí Minh?",
    "a": "Đại hội Đảng toàn quốc lần thứ VI (1986).",
    "b": "Đại hổi Đảng toàn quốc lần thứ VIII (1996)",
    "c": "Đại hội Đảng toàn quốc lần thứ VII (1991) tưởng Hồ Chí Minh”",
    "d": "Đại hội Đảng toàn quốc lần thứ IX (2001).",
    "ans": "c"
  },
  {
    "num": 24,
    "q": "Đảng ta khẳng định: Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động tại Đại hội Đảng toàn quốc lần thứ mấy?",
    "a": "Đại hội Đảng toàn quốc lần thứ VI (1986).",
    "b": "Đại hội Đảng toàn quốc lần thứ VII (1991)",
    "c": "Đại hổi Đảng toàn quốc lần thứ VIII (1996)",
    "d": "Đại hội Đảng toàn quốc lần thứ IX (2001).",
    "ans": "b"
  },
  {
    "num": 25,
    "q": "Phương hướng vận dụng và phát triển tư tưởng Hồ Chí Minh trong sự nghiệp đổi mới là:",
    "a": "Vận dụng và phát triển sáng tạo tư tưởng Hồ Chí Minh Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "Nắm vững quan điểm thực tiễn",
    "c": "Giải quyết đúng những vấn đề do thực tiễn đặt ra",
    "d": "Cả 3 phương án trên.",
    "ans": "d"
  },
  {
    "num": 26,
    "q": "Truyền thống quý báu nhất của dân tộc Việt Nam được Chủ tịch Hồ Chí Minh kế thừa và phát triển là gì?",
    "a": "Tinh thần hiếu học",
    "b": "Lòng nhân ái",
    "c": "Chủ nghĩa yêu nước",
    "d": "Cần cù lao động.",
    "ans": "c"
  },
  {
    "num": 27,
    "q": "Đoạn trích sau đây thuộc tác phẩm nào của Hồ Chí Minh: “Lúc bấy giờ, tôi ủng hộ cách mạng Tháng Mười chỉ là theo cảm tính tự nhiên… Tôi kính yêu Lênin vì Lênin là một người yêu nước vĩ đại đã giải phóng đồng bào mình…”?",
    "a": "Con đường dẫn tôi đến chủ nghĩa Lênin",
    "b": "Bản án chế độ thực dân Pháp",
    "c": "Đường cách mệnh",
    "d": "Cương lĩnh chính trị đầu tiên",
    "ans": "a"
  },
  {
    "num": 28,
    "q": "Nguyễn Ái Quốc gửi bản “Yêu sách của nhân dân An Nam” tới Hội nghị Vecxay vào ngày tháng năm nào?",
    "a": "18/6/1920",
    "b": "18/6/1917",
    "c": "18/6/1918",
    "d": "18/6/1919",
    "ans": "d"
  },
  {
    "num": 29,
    "q": "Lựa chọn phương án sai. Vào cuối thế kỷ XIX, đầu thế kỷ XX tình hình thế giới có những biến đổi to lớn:",
    "a": "Sự thành công của cách mạng Tháng Mười Nga năm 1917",
    "b": "Sự ra đời của Quốc tế cộng sản II năm 1919",
    "c": "Phong trào đấu tranh của giai cấp công nhân ngày càng sâu rộng",
    "d": "Sự phát triển nhanh chóng của cách mạng khoa học kỹ thuật.",
    "ans": "b"
  },
  {
    "num": 30,
    "q": "Hồ Chí Minh chú ý kế thừa, đổi mới, phát triển tinh thần nào của Nho giáo?",
    "a": "Xây dựng nhà nước của dân, do dân, vì dân.",
    "b": "Yêu thương con người, có tính thần quốc tế trong sáng.",
    "c": "Xây dựng xã hội xã hội chủ nghĩa.",
    "d": "Tu dưỡng, rèn luyện đạo đức.",
    "ans": "d"
  },
  {
    "num": 31,
    "q": "Những tác phẩm dưới đây, tác phẩm nào không phải là của Hồ Chí Minh?",
    "a": "Tuyên ngôn Độc lập.",
    "b": "Tuyên ngôn của Đảng Cộng sản.",
    "c": "Bản án chế độ thực dân Pháp",
    "d": "Đường cách mệnh.",
    "ans": "b"
  },
  {
    "num": 32,
    "q": "Hồ Chí Minh trở về nước sau 30 năm hoạt động khi nào?",
    "a": "9/1943 Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "1/1941",
    "c": "8/1942",
    "d": "10/1938",
    "ans": "b"
  },
  {
    "num": 33,
    "q": "Ai là người bàn nhiều về cuộc đấu tranh chống chủ nghĩa tư bản?",
    "a": "Ph. Ăngghen",
    "b": "C.Mác",
    "c": "Hồ Chí Minh",
    "d": "V.I.Lênin",
    "ans": "b"
  },
  {
    "num": 34,
    "q": "Theo Hồ Chí Minh, ưu điểm lớn nhất của chủ nghĩa Tam dân của Tôn Trung Sơn là gì?",
    "a": "Đấu tranh vì dân chủ",
    "b": "Chống chế độ phong kiến",
    "c": "Phù hợp với điều kiện thực tế ở nước ta",
    "d": "Chống chế độ tư bản chủ nghĩa",
    "ans": "c"
  },
  {
    "num": 35,
    "q": "Lựa chọn phương án sai. Hồ Chí Minh đã tiếp thu tinh hoa văn hóa nhân loại, đó là",
    "a": "Tư tưởng về một xã hội bình đẳng của các nhà Khai sáng Anh",
    "b": "Tư tưởng về quyền tự do, bình đẳng trong Tuyên ngôn độc lập của Mỹ",
    "c": "Tư tưởng bình đẳng, bác ái của Phật giáo",
    "d": "Tư tưởng về một xã hội bình trị, thế giới đại đồng của Nho giáo",
    "ans": "a"
  },
  {
    "num": 36,
    "q": "Trong bản \"Yêu sách của nhân dân An Nam\" gửi đến Hội nghị Véc xây, lúc đó Hồ Chí Minh mang tên là gì?",
    "a": "Nguyễn Tất Thành",
    "b": "Nguyễn Ái Quốc",
    "c": "Văn Ba",
    "d": "Trần Vương",
    "ans": "b"
  },
  {
    "num": 37,
    "q": "Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam. Những vấn đề đó thuộc phạm vi nào?",
    "a": "Cả trong cách mạng dân tộc dân chủ nhân dân và cách mạng xã hội chủ nghĩa.",
    "b": "Trong cách mạng dân tộc dân chủ nhân dân.",
    "c": "Trong cách mạng xã hội chủ nghĩa.",
    "d": "Trong thế kỷ XX",
    "ans": "a"
  },
  {
    "num": 38,
    "q": "Tư tưởng vị tha, từ bi bác ái, cứu khổ cứu nạn là ưu điểm của học thuyết, tôn giáo nào?",
    "a": "Thiên chúa giáo",
    "b": "Phật giáo",
    "c": "Nho giáo",
    "d": "Hồi giáo",
    "ans": "b"
  },
  {
    "num": 39,
    "q": "Ai là người bàn nhiều về cuộc đấu tranh chống chủ nghĩa thực dân?",
    "a": "C.Mác",
    "b": "Ph. Ăngghen",
    "c": "Hồ Chí Minh",
    "d": "V.I.Lênin",
    "ans": "c"
  },
  {
    "num": 40,
    "q": "Khi thực dân Pháp xâm lược Việt Nam, mâu thuẫn cơ bản chi phối đời sống xã hội Việt Nam lúc bấy giờ là? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Mâu thuẫn giữa toàn thể dân tộc Việt Nam và thực dân Pháp xâm lược",
    "b": "Mâu thuẫn giữa công nhân, nông dân và thực dân Pháp",
    "c": "Mâu thuẫn giữa nông dân và địa chủ phong kiến",
    "d": "Mâu thuẫn giữa công nhân và tư sản",
    "ans": "a"
  },
  {
    "num": 41,
    "q": "Luận điểm: “Chỉ có những người cách mạng chân chính mới thu hái được những hiểu biết quý báu của các đời trước để lại” là của ai?",
    "a": "C.Mác",
    "b": "Ph. Ăngghen",
    "c": "V.I.Lênin",
    "d": "Hồ Chí Minh",
    "ans": "c"
  },
  {
    "num": 42,
    "q": "Sự kiện đánh dấu bước chuyển về chất trong tư tưởng của Nguyễn Ái Quốc: Từ chủ nghĩa yêu nước đến với chủ nghĩa Lênin, từ giác ngộ dân tộc đến giác ngộ giai cấp, từ người yêu nước trở thành người cộng sản?",
    "a": "Tham dự Đại hội lần thứ XVIII của Đảng xã hội Pháp",
    "b": "Tổ chức hội nghị hợp nhất các tổ chức cộng sản thành lập Đảng cộng sản Việt Nam",
    "c": "Gửi bản Yêu sách của nhân dân An Nam đến Hội nghị Vecxay",
    "d": "Đọc được Sơ thảo lần T1 những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin nước kết hợp chặt chẽ với lập trường cách mạng vô sản",
    "ans": "a"
  },
  {
    "num": 43,
    "q": "Yếu tố nào thuộc nhân tố chủ quan giúp Hồ Chí Minh hình thành nên hệ thống tư tưởng của mình?",
    "a": "Tinh hoa văn hóa nhân loại",
    "b": "Phẩm chất đạo đức và năng lực hoạt động thực tiễn",
    "c": "Chủ nghĩa Mác – Lênin",
    "d": "Truyền thống dân tộc",
    "ans": "b"
  },
  {
    "num": 44,
    "q": "Vào cuối những năm 20 đấu những năm 30 của thế kỷ XX, Quốc tế cộng sản đã bị chi phối nặng nề bởi khuynh hướng “tả”. Khuynh hướng này đã khiến Nguyễn Ái Quốc bị chỉ trích như nào?",
    "a": "Chỉ lo đến cách mạng điền địa, mà quên mất cách mạng giải phóng dân tộc",
    "b": "Chỉ lo đến việc phản đế, mà quên mất lợi ích giai cấp đấu tranh",
    "c": "Chỉ lo cách mạng giải phóng dân tộc, mà quên mất cách mạng xã hội chủ nghĩa",
    "d": "Chỉ lo đến việc phản phong, mà quên mất lợi ích dân tộc",
    "ans": "b"
  },
  {
    "num": 45,
    "q": "Tác phẩm nào của Hồ Chí Minh là sự chuẩn bị mọi mặt về chính trị, tư tưởng, tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam?",
    "a": "Tuyên ngôn của Hội liên hiệp các dân tộc thuộc địa năm 1921.",
    "b": "Cương lĩnh chính trị đầu tiên năm 1930.",
    "c": "Bản án chế độ thực dân Pháp năm 1925.",
    "d": "Đường Cách mệnh năm 1927. sự ra đời của ĐCSVN",
    "ans": "d"
  },
  {
    "num": 46,
    "q": "Mong muốn: “Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, và góp phần xứng đáng vào sự nghiệp thế giới” được trích trong tác phẩm nào của Hồ Chí Minh?",
    "a": "Bản án chế độ thực dân Pháp",
    "b": "Di chúc",
    "c": "Đường cách mệnh Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Cương lĩnh chính trị đầu tiên",
    "ans": "b"
  },
  {
    "num": 47,
    "q": "Theo Hồ Chí Minh, chủ nghĩa Mác có “ưu điểm” gì?",
    "a": "Phương pháp làm việc biện chứng.",
    "b": "Lý luận về giải phóng con người.",
    "c": "Học thuyết cách mạng, tiến bộ.",
    "d": "Thế giới quan khoa học.",
    "ans": "a"
  },
  {
    "num": 48,
    "q": "Phong cách ứng xử của Chủ tịch Hồ Chí Minh được thể hiện qua những phong cách nào dưới đây?",
    "a": "(3) Linh hoạt, chủ động, biến hóa; vui vẻ, hòa nhã, xóa nhòa mọi khoảng cách.",
    "b": "Cả (2) và (3).",
    "c": "(2) Khiêm tốn, nhã nhặn, lịch thiệp; chân tình, nồng hậu, tự nhiên.",
    "d": "(1) Hài hòa, kết hợp nhuần nhuyễn văn hóa Đông - Tây.",
    "ans": "b"
  },
  {
    "num": 49,
    "q": "Hãy chọn đáp án đúng cho câu hỏi: Phong cách lãnh đạo của Chủ tịch Hồ Chí Minh được thể hiện qua:",
    "a": "Tổ chức việc kiểm tra, kiểm soát cụ thể, thường xuyên",
    "b": "Phong cách quần chúng, luôn luôn gần dân, tin dân, trọng dân, dựa vào dân, gắn bó với nhân dân và phong cách nêu gương.",
    "c": "Cả 03 đáp án trên đều đúng.",
    "d": "Phong cách dân chủ, tuân thủ nghiêm ngặt nguyên tắc tập trung dân chủ, tập thể lãnh đạo, cá nhân phụ trách.",
    "ans": "c"
  },
  {
    "num": 50,
    "q": "Luận điểm: “Trong lúc này quyền lợi của bộ phận, của giai cấp phải đặt dưới sự sinh tử, tồn vong của quốc gia, của dân tộc. Trong lúc này nếu không giải quyết được vấn đề dân tộc giải phóng, không đòi được độc lập, tự do cho toàn thể dân tộc, thì chẳng những toàn thể quốc gia dân tộc còn chịu mãi kiếp ngựa trâu, mà quyền lợi của bộ phận, giai cấp đến vạn năm cũng không đòi lại được” thể hiện tư tưởng Hồ Chí Minh về vấn đề gì?",
    "a": "Giải phóng dân tộc tạo tiền đề để giải phóng giai cấp",
    "b": "Giữ vững độc lập của dân tộc mình, đồng thời tôn trọng độc lập của các dân tộc khác",
    "c": "Giải phóng dân tộc là vấn đề trên hết, trước hết, độc lập dân tộc gắn liền với chủ nghĩa xã hội",
    "d": "Vấn đề dân tộc và vấn đề giai cấp có quan hệ chặt chẽ với nhau",
    "ans": "a"
  },
  {
    "num": 51,
    "q": "Một trong những truyền thống tốt đẹp của tư tưởng và văn hóa Việt Nam được Hồ Chí Minh tiếp thu để hình thành tư tưởng của Người là:",
    "a": "Chủ nghĩa yêu nước Việt Nam",
    "b": "Học thuyết chính trị của Nho Giáo",
    "c": "Tư tưởng vị tha của Phật Giáo",
    "d": "Cả A, B, C đều sai",
    "ans": "a"
  },
  {
    "num": 52,
    "q": "Bác Hồ bắt đầu viết Di chúc vào năm nào?",
    "a": "Năm 1965",
    "b": "Năm 1969",
    "c": "Năm 1967",
    "d": "Năm 1966",
    "ans": "a"
  },
  {
    "num": 53,
    "q": "Quốc tế cộng sản thừa nhận và sửa chữa những sai lầm của khuynh hướng “tả” tại Đại hội lần thứ mấy?",
    "a": "Đại hội VII",
    "b": "Đại hội V Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Đại hội IV",
    "d": "Đại hội VI",
    "ans": "a"
  },
  {
    "num": 54,
    "q": "Sự thống nhất trong tư tưởng Hồ Chí Minh về giải phóng dân tộc, giải phóng giai cấp, giải phóng con người là gì?",
    "a": "(3) Chủ nghĩa yêu nước và tinh thần dân tộc;",
    "b": "Cả (1) và (2).",
    "c": "(2) Kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước và chủ nghĩa quốc tế;",
    "d": "(1) Không có gì quý hơn độc lập, tự do;",
    "ans": "b"
  },
  {
    "num": 55,
    "q": "Chủ trương cầu ngoại viện, dùng bạo lực để khôi phục độc lập dân tộc là của nhà cách mạng nào?",
    "a": "Phan Châu Trinh",
    "b": "Tôn Thất Thuyết",
    "c": "Hàm Nghi",
    "d": "Phan Bội Châu",
    "ans": "d"
  },
  {
    "num": 56,
    "q": "Cuộc cách mạng nào được coi là “mở ra trước mắt họ thời đại cách mạng chống đế quốc, thời đại giải phóng dân tộc”?",
    "a": "Công xã Pari",
    "b": "Cách mạng Tháng Mười Nga",
    "c": "Đại cách mạng tư sản Pháp",
    "d": "Cuộc đấu tranh giành độc lập của Mỹ",
    "ans": "b"
  },
  {
    "num": 57,
    "q": "Nguyễn Ái Quốc đọc “Sơ thảo lần thứ nhất Luận cương về vấn đề dân tộc và vấn đề thuộc địa” của V.I.Lenin vào thời gian nào?",
    "a": "7/1919",
    "b": "7/1920",
    "c": "7/1917",
    "d": "7/1925",
    "ans": "b"
  },
  {
    "num": 58,
    "q": "Hồ Chí Minh tham gia sáng lập hội liên hiệp thuộc địa vào năm nào?",
    "a": "1922",
    "b": "1921",
    "c": "1924",
    "d": "1923",
    "ans": "b"
  },
  {
    "num": 59,
    "q": "“Đến ngày thắng lợi, nhân dân ta sẽ xây dựng lại đất nước ta đàng hoàng hơn, to đẹp hơn”. Đoạn trên được trích từ bài viết nào của Hồ Chí Minh",
    "a": "Tuyên ngôn độc lập (1945)",
    "b": "Lời kêu gọi chống Mỹ, cứu nước",
    "c": "Thư gửi đồng bào Nam Bộ",
    "d": "Thư kêu gọi Tổng khởi nghĩa",
    "ans": "b"
  },
  {
    "num": 60,
    "q": "Hồ Chí Minh nhận xét về phong trào nào “đưa hổ cửa trước, rước beo cửa sau”?",
    "a": "Phong trào Duy Tân của Phan Châu Trinh",
    "b": "Phong trào Đông Du của Phan Bội Châu",
    "c": "Khởi nghĩa nông dân Yên Thế của Hoàng Hoa Thám Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Phong trào Cần Vương của Hàm Nghi, Tôn Thất Thuyết",
    "ans": "b"
  },
  {
    "num": 61,
    "q": "Theo Hồ Chí Minh, nguồn gốc của những đau khổ và áp bức dân tộc là ở đâu?",
    "a": "Ở tại các chính phủ đế quốc",
    "b": "Ở tại các nước tư bản phát triển.",
    "c": "Ở “Chính quốc”, ở các nước đế quốc đang thống trị dân tộc mình.",
    "d": "Tại các nước thuộc địa.",
    "ans": "c"
  },
  {
    "num": 62,
    "q": "“Hỡi đồng bào bị đoạ đầy đau khổ! Đây là cái cần thiết cho chúng ta!”. Câu nói này được Chủ tịch Hồ Chí Minh nói khi đọc tài liệu nào?",
    "a": "Chủ nghĩa Tam dân của Tôn Trung Sơn",
    "b": "Luận cương của Lênin",
    "c": "Lịch sử Đại cách mạng Pháp năm 1789.",
    "d": "Tuyên ngôn độc lập 1776 của nước Mỹ",
    "ans": "b"
  },
  {
    "num": 63,
    "q": "Triết lý hành động, tư tưởng nhập thế, hành đạo, giúp đời là ưu điểm của học thuyết, tôn giáo nào?",
    "a": "Thiên chúa giáo ưu điểm là lòng nhân ái cao cả. Chủ nghĩa Mác có ưu điểm là phương pháp làm việc biện chứng. Chủ nghĩa Tôn Dật Tiên có ưu điểm là chính sách của nó phù hợp với điều kiện nước ta…\". Hồ Chí Minh đã phê phán, gạt bỏ tư tưởng đẳng cấp, khinh lao động chân tay, khinh phụ nữ,…của Nho giáo nhưng Người cũng đã tiếp thu triết lý hành động, tư tưởng nhập thế, hành đạo, giúp đời,…; trong nội dung xây dựng nền đạo đức mới, Hồ Chí Minh đã sử dụng nhiều khái niệm, phạm trù của các tư tưởng đạo đức đã có từ trước, nhất là đạo đức Nho giáo như: trung, hiếu, nhân, nghĩa, cần, kiệm, liêm, chính,…",
    "b": "Phật giáo",
    "c": "Nho giáo",
    "d": "Hồi giáo",
    "ans": "c"
  },
  {
    "num": 64,
    "q": "Chủ trương “ỷ pháp cầu tiến bộ”, khai thông dân trí, nâng cao dân khí trên cơ sở đó mà tính chuyện giải phóng dân tộc là quan điểm của nhà cách mạng nào?",
    "a": "Phan Châu Trinh",
    "b": "Phan Bội Châu",
    "c": "Tôn Thất Thuyết",
    "d": "Hàm Nghi",
    "ans": "a"
  },
  {
    "num": 65,
    "q": "Theo tư tưởng Hồ Chí Minh, ưu điểm lớn nhất của học thuyết Khổng Tử là gì?",
    "a": "Giải phóng con người",
    "b": "Quản lý xã hội bằng đạo đức",
    "c": "Sự tu dưỡng đạo đức cá nhân",
    "d": "Tinh thần hiếu học Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "c"
  },
  {
    "num": 66,
    "q": "Theo Hồ Chí Minh, ưu điểm lớn nhất của Tôn giáo Giêxu là gì?",
    "a": "Đức hy sinh",
    "b": "Lòng nhân ái cao cả",
    "c": "Sự đấu tranh",
    "d": "Lòng cao thượng",
    "ans": "b"
  },
  {
    "num": 67,
    "q": "Quá trình hình thành và phát triển tư tưởng Hồ Chí Minh được chia thành mấy giai đoạn?",
    "a": "7 giai đoạn",
    "b": "4 giai đoạn",
    "c": "5 giai đoạn",
    "d": "6 giai đoạn",
    "ans": "c"
  },
  {
    "num": 68,
    "q": "\"Dân tộc ta, nhân dân ta, non sông đất nước ta đã sinh ra Hồ Chủ tịch, người anh hùng dân tộc vĩ đại, và chính Người đã làm rạng rỡ dân tộc ta, nhân dân ta và non sông đất nước ta\". Câu nói trên ở trong văn kiện nào?",
    "a": "Diễn văn của Ban Chấp hành Trung ương Đảng CSVN đọc tại lễ kỷ niệm 100 năm ngày sinh của Hồ Chí Minh.",
    "b": "Điếu văn của Ban Chấp hành Trung ương Đảng lao động Việt Nam đọc tại lễ truy diệu Chủ tịch Hồ Chí Minh ngày 9/9/1969.",
    "c": "Diễn văn của Ban Chấp hành Trung ương Đảng LĐVN đọc tại lễ kỷ niệm 80 năm ngày sinh của Hồ Chí Minh.",
    "d": "Lời kêu gọi Ban chấp hành Trung ương Đảng lao động Việt Nam ngày 3/9/1969",
    "ans": "b"
  },
  {
    "num": 69,
    "q": "Luận điểm sau của Hồ Chí Minh: “Bây giờ học thuyết nhiều, chủ nghĩa nhiều, nhưng chủ nghĩa chân chính nhất, chắc chắn nhất, cách mạng nhất là chủ nghĩa Lênin”, được trích trong tác phẩm nào?",
    "a": "Cương lĩnh chính trị đầu tiên (1930)",
    "b": "Đường cách mệnh (1927)",
    "c": "Con đường dẫn tôi đến với chủ nghĩa Lênin (1960)",
    "d": "Bản án chế độ thực dân Pháp (1925)",
    "ans": "b"
  },
  {
    "num": 70,
    "q": "Giai đoạn hình thành cơ bản tư tưởng về cách mạng Việt Nam của Hồ Chí Minh được tính từ:",
    "a": "1930 – 1941",
    "b": "1911 – 1920",
    "c": "1921 – 1930",
    "d": "1941 – 1945",
    "ans": "c"
  },
  {
    "num": 71,
    "q": "Phong cách diễn đạt của Chủ tịch Hồ Chí Minh được thể hiện qua phong cách nào dưới đây?",
    "a": "Cả (1) và (2).",
    "b": "(3) Kết hợp nhuần nhuyễn văn hóa Đông - Tây.",
    "c": "(2) Sinh động, gần gũi với cách nghĩ của quần chúng, gắn với những hình ảnh, sự ví von, so sánh cụ thể; diễn đạt luôn luôn biến hóa, nhất quán mà đa dạng.",
    "d": "(1) Cách nói, cách viết giản dị, cụ thể, thiết thực; diễn đạt ngắn gọn, cô đọng, hàm súc, trong sáng, có lượng thông tin cao.",
    "ans": "a"
  },
  {
    "num": 72,
    "q": "Thay mặt Hội những người yêu nước Việt Nam tại Pháp, Nguyễn Ái Quốc đã gửi đến Hội nghị Vécxây tài liệu gì?",
    "a": "Bản Yêu sách của nhân dân An Nam",
    "b": "Tâm địa thực dân",
    "c": "Vấn đề bản xứ",
    "d": "Những người bị áp bức Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "a"
  },
  {
    "num": 73,
    "q": "Yếu tố nào thuộc nhân tố chủ quan giúp Hồ Chí Minh hình thành nên hệ thống tư tưởng của mình?",
    "a": "Tinh hoa văn hóa nhân loại",
    "b": "Khả năng tư duy và trí tuệ của Hồ Chí Minh",
    "c": "Truyền thống dân tộc",
    "d": "Chủ nghĩa Mác – Lênin",
    "ans": "b"
  },
  {
    "num": 74,
    "q": "Một trong những nguồn gốc để hình thành tư tưởng Hồ Chí Minh là Người đã tiếp thu",
    "a": "Triết học Hy Lạp cổ đại",
    "b": "Tư tưởng xã hội chủ nghĩa không tưởng Pháp",
    "c": "Tinh hoa văn hóa nhân loại",
    "d": "Triết học cổ điển Đức",
    "ans": "c"
  },
  {
    "num": 75,
    "q": "Ai là người khẳng định: Sự phát triển của xã hội loài người là quá trình lịch sử tự nhiên?",
    "a": "C.Mác",
    "b": "Hồ Chí Minh",
    "c": "V.I.Lênin",
    "d": "Ph. Ăngghen",
    "ans": "a"
  },
  {
    "num": 76,
    "q": "Giá trị truyền thống nào là cơ sở quan trọng nhất giúp Hồ Chí Minh xây dựng hệ thống quan điểm của mình?",
    "a": "Truyền thống cần cù, yêu lao động HCM ra đi tìm đường cứu nước",
    "b": "Chủ nghĩa nhân văn của dân tộc",
    "c": "Tinh thần đoàn kết, cố kết cộng đồng",
    "d": "Chủ nghĩa yêu nước",
    "ans": "d"
  },
  {
    "num": 77,
    "q": "Hồ Chí Minh bắt gặp Sơ thảo lần thứ nhất luận cương về những vấn đề dân tộc và vấn đề thuộc địa khi nào?",
    "a": "6/1923",
    "b": "2/1930",
    "c": "7/1920",
    "d": "12/1920",
    "ans": "c"
  },
  {
    "num": 78,
    "q": "Hồ Chí Minh nhận thấy học thuyết, tôn giáo nào trong đó có “những điều thích hợp với điều kiện của nước ta”?",
    "a": "Thiên chúa giáo",
    "b": "Chủ nghĩa Tam dân",
    "c": "Phật giáo",
    "d": "Nho giáo",
    "ans": "b"
  },
  {
    "num": 79,
    "q": "Trong các thời kỳ hình thành và phát triển tư tưởng Hồ Chí Minh, có thời kỳ ghi nhầm lẫn, đó là?",
    "a": "Thời kỳ trước ngày 5 - 6 - 1911: Hình thành tư tưởng yêu nước và có chí hướng tìm đường cứu nước.",
    "b": "Thời kỳ từ giữa năm 1911 đến cuối năm 1920: Dần dần hình thành tư tưởng cứu nước, giải phóng dân tộc Việt Nam theo con đường cách mạng vô sản.",
    "c": "Thời kỳ đầu năm 1930 đến đầu năm 1941: Tư tưởng Hồ Chí Minh tiếp tục phát triển, hoàn thiện, soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta. soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta",
    "d": "Thời kỳ cuối năm 1920 đến đầu năm 1930: Hình thành những nội dung cơ bản tư tưởng về cách mạng Việt Nam. Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "c"
  },
  {
    "num": 80,
    "q": "Nguồn gốc hình thành tư tưởng Hồ Chí Minh là gì?",
    "a": "Những nhân tố chủ quan thuộc về phẩm chất cá nhân của Hồ Chí Minh?",
    "b": "Chủ nghĩa Mác-Lênin, cơ sở thế giới quan và phương pháp luận của tư tưởng Hồ Chí Minh;",
    "c": "Tư tưởng và văn hoá truyền thống Việt Nam; tinh hoa văn hoá nhân loại;",
    "d": "Cả 3 đáp án đều đúng",
    "ans": "d"
  },
  {
    "num": 81,
    "q": "Tháng 7 năm 1920, Nguyễn Ái Quốc đã đọc … của V.I.Lênin?",
    "a": "Sơ thảo lần thứ nhất Luận cương về các vấn đề dân tộc và vấn đề thuộc địa",
    "b": "Sơ thảo lần thứ nhất Luận cương về các vấn đề dân tộc",
    "c": "Sáng kiến vĩ đại",
    "d": "Tác phẩm làm gì",
    "ans": "a"
  },
  {
    "num": 82,
    "q": "Tìm một điểm nhầm lẫn trong đoạn viết sau đây: Một trong những nguồn gốc của tư tưởng Hồ Chí Minh là tiếp văn hóa phương Đông. Cụ thể là:",
    "a": "Những mặt tích cực của Nho giáo.",
    "b": "Tư tưởng vị tha của Phật giáo.",
    "c": "Tư tưởng Tam dân của Tôn Trung Sơn.",
    "d": "Tư tưởng của Khổng Tử về một xã hội bình yên không bao giờ thay đổi.",
    "ans": "d"
  },
  {
    "num": 83,
    "q": "Luận điểm của Hồ Chí Minh: “làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản” được đưa ra trong tác phẩm nào?",
    "a": "Cương lĩnh chính trị đầu tiên năm 1930.",
    "b": "Bản án chế độ thực dân Pháp năm 1925.",
    "c": "Tuyên ngôn của Hội liên hiệp các dân tộc thuộc địa năm 1921.",
    "d": "Đường Cách mệnh năm 1927.",
    "ans": "a"
  },
  {
    "num": 84,
    "q": "“Tư tưởng và đạo đức Hồ Chí Minh là sự kết tinh những truyền thống tốt đẹp của dân tộc ta và tinh hoa văn hoá của nhân loại, là tài sản tinh thần vô giá của Đảng và nhân dân ta; là tấm gương sáng để mọi người Việt Nam học tập và noi theo”. Nhận định trên được trích trong văn bản nào của Đảng?",
    "a": "Chỉ thị số 06-CT/TW (khoá X)",
    "b": "Nghị quyết Đại hội X của Đảng",
    "c": "Chỉ thị số 23-CT/TW (khoá IX)",
    "d": "Nghị quyết Đại hội IX của Đảng",
    "ans": "a"
  },
  {
    "num": 85,
    "q": "Cách mạng Tháng Mười Nga nổ ra vào năm nào?",
    "a": "1915",
    "b": "1916",
    "c": "1917",
    "d": "1918 Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "c"
  },
  {
    "num": 86,
    "q": "Điền từ vào chỗ trống: Theo Hồ Chí Minh: (…) mở ra con đường giải phóng cho các dân tộc loài người, mở đầu một thời đại mới trong lịch sử",
    "a": "Cách mạng tư sản Pháp",
    "b": "Cách mạng Tháng Tám",
    "c": "Cách mạng Tháng Mười",
    "d": "Cách mạng Tân Hợi",
    "ans": "c"
  },
  {
    "num": 87,
    "q": "Luận điểm sau của Hồ Chí Minh nhằm đề cập đến vấn đề gì trong cách mạng giải phóng dân tộc: “Làm cho các dân tộc thuộc địa, từ trước đến nay vẫn cách biệt nhau, hiểu biết nhau hơn và đoàn kết lại để đặt cơ sở cho một Liên minh phương Đông tương lai, khối liên minh này sẽ là một trong những cái cánh của cách mạng vô sản”?",
    "a": "Cách mạng giải phóng dân tộc cần được tiến hành chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc",
    "b": "Cách mạng giải phóng dân tộc trong thời đại mới phải do Đảng cộng sản lãnh đạo",
    "c": "Cách mạng giải phóng phải được thực hiện bằng con đường bạo lực cách mạng dân tộc dẫn tới phá tan hệ thống thuộc địa của chủ nghĩa thực dân, được thế giới tôn vinh là anh hung giải phóng dân tộc trong thời đại ngày nay Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Cách mạng giải phóng muốn thắng lợi phải đi theo con đường cách mạng vô sản",
    "ans": "a"
  },
  {
    "num": 88,
    "q": "Kiên trì con đường Chủ tịch Hồ Chí Minh đã lựa chọn nghĩa là:",
    "a": "Thực hiện mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
    "b": "Thực hiện triệt để cuộc cách mạng dân tộc dân chủ nhân dân.",
    "c": "Giữ vững nền độc lập dân tộc.",
    "d": "Hội nhập với nền kinh tế thế giới.",
    "ans": "a"
  },
  {
    "num": 89,
    "q": "Theo tư tưởng Hồ Chí Minh, muốn xây dựng chủ nghĩa xã hội trước hết cần có…",
    "a": "Kinh tế phát triển",
    "b": "Khoa học – kỹ thuật",
    "c": "Con người mới xã hội chủ nghĩa",
    "d": "Con người toàn diện",
    "ans": "c"
  },
  {
    "num": 90,
    "q": "Luận điểm của Hồ Chí Minh khẳng định: “Hai thứ Cách mạng tuy có khác nhau, nhưng có mối quan hệ chặt chẽ với nhau”. Người muốn nói về mối quan hệ của cuộc cách mạng nào?",
    "a": "Cách mạng giải phóng giai cấp và dân tộc trong chủ nghĩa tư bản",
    "b": "Cách mạng giải phóng giai cấp ở chính quốc và giải phóng con người trong chủ nghĩa tư bản",
    "c": "Cách mạng giải phóng dân tộc ở thuộc địa và cách mạng vô sản ở chính quốc",
    "d": "Cách mạng giải phóng giai cấp ở thuộc địa và cách mạng tư sản ở chính quốc",
    "ans": "c"
  },
  {
    "num": 91,
    "q": "Đoạn trích sau được trích trong tác phẩm nào của Hồ Chí Minh: “Nước Việt Nam có quyền hướng tự do và độc lập, và sự thật đã thành một nước tự do độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy”?",
    "a": "Di chúc",
    "b": "Đường cách mệnh",
    "c": "Tuyên ngôn độc lập",
    "d": "Bản án chế độ thực dân Pháp",
    "ans": "c"
  },
  {
    "num": 92,
    "q": "Theo tư tưởng Hồ Chí Minh, chế độ chính trị mà chúng ta xây dựng là chế độ do…",
    "a": "Giai cấp nông dân làm chủ",
    "b": "Trí thức làm chủ chủ",
    "c": "Giai cấp công nhân làm chủ",
    "d": "Nhân dân làm chủ",
    "ans": "d"
  },
  {
    "num": 93,
    "q": "Chọn luận điểm đúng với tư tưởng Hồ Chí Minh:",
    "a": "Muốn tiến lên chủ nghĩa xã hội thì phải phát triển văn hoá và kinh tế",
    "b": "Muốn tiến lên chủ nghĩa xã hội thì phải phát triển văn hoá",
    "c": "Muốn tiến lên chủ nghĩa xã hội thì phải phát triển kinh tế",
    "d": "Muốn tiến lên chủ nghĩa xã hội thì phải phát triển kinh tế và văn hoá",
    "ans": "d"
  },
  {
    "num": 94,
    "q": "Vấn đề dân tộc trong tư tưởng Hồ Chí Minh trong thời đại cách mạng vô sản là vấn đề…",
    "a": "Dân tộc nói chung",
    "b": "Dân tộc tư sản",
    "c": "Dân tộc thuộc địa",
    "d": "Dân tộc – tộc người Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "c"
  },
  {
    "num": 95,
    "q": "Theo Hồ Chí Minh, đối tượng của cách mạng ở thuộc địa là?",
    "a": "Cả 3 phương án trên",
    "b": "Giai cấp địa chủ",
    "c": "Giai cấp tư sản bản xứ",
    "d": "Chủ nghĩa thực dân và tay sai phản động",
    "ans": "d"
  },
  {
    "num": 96,
    "q": "Thực chất vấn đề dân tộc thuộc địa trong tư tưởng Hồ Chí Minh là:",
    "a": "Đòi bình đằng dân tộc",
    "b": "Đòi quyền tự do dân chủ tối thiểu cho nhân dân",
    "c": "Đòi quyền dân tộc tự quyết",
    "d": "Đấu tranh giải phóng dân tộc khỏi sự áp bức, thống trị của nước ngoài, giành độc lập dân tộc, thành lập nhà nước dân tộc độc lập và đưa đất nước phát triển theo xu thế thời đại",
    "ans": "d"
  },
  {
    "num": 97,
    "q": "Luận điểm của Hồ Chí Minh khẳng định: “Hai thứ Cách mạng tuy có khác nhau, nhưng có mối quan hệ chặt chẽ với nhau”. Người muốn nói về mối quan hệ của cuộc cách mạng nào?",
    "a": "Cách mạng giải phóng dân tộc ở thuộc địa và cách mạng vô sản ở chính quốc",
    "b": "Cách mạng giải phóng giai cấp ở chính quốc và giải phóng con người trong chủ nghĩa tư bản",
    "c": "Cách mạng giải phóng giai cấp và dân tộc trong chủ nghĩa tư bản",
    "d": "Cách mạng giải phóng giai cấp ở thuộc địa và cách mạng tư sản ở chính quốc",
    "ans": "a"
  },
  {
    "num": 98,
    "q": "Chọn phương án trả lời đúng với tư tưởng Hồ Chí Minh:",
    "a": "Cách mạng giải phóng dân tộc ở thuộc địa có khả năng giành được thắng lợi trước cách mạng vô sản ở chính quốc",
    "b": "Thắng lợi của cách mạng vô sản tổn tại song song với thắng lợi của các cuộc cách mạng tư sản",
    "c": "Cách mạng giải phóng dân tộc giành thắng lợi đồng thời với thắng lợi cách mạng vô sản ở chính quốc",
    "d": "Thắng lợi của cách mạng vô sản ở thuộc địa phải phụ thuộc vào thắng lợi của cách mạng vô sản ở chính quốc",
    "ans": "a"
  },
  {
    "num": 99,
    "q": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc trong thời đại mới phải do Đảng Cộng sản lãnh đạo để",
    "a": "Đoàn kết với giai cấp vô sản và các dân tộc bị áp bức trên thế giới",
    "b": "Tổ chức, tập hợp quần chúng",
    "c": "Cả 3 phương án trên đều đúng",
    "d": "Giác ngộ quần chúng",
    "ans": "c"
  },
  {
    "num": 100,
    "q": "Lựa chọn cụm từ điền vào chỗ trống: “Chỉ có chủ nghĩa xã hội, chủ nghĩa cộng sản … … và những người lao động trên thế giới khỏi ách nô lệ”.",
    "a": "Mới xóa bỏ áp bức, bóc lột.",
    "b": "Mới giải phóng được giai cấp giai cấp công nhân.",
    "c": "Mới giải phóng được các dân tộc bị áp bức.",
    "d": "Mới giải phóng được nhân dân.",
    "ans": "c"
  },
  {
    "num": 101,
    "q": "Luận điểm: “Sự giải phóng của giai cấp công nhân phải là sự nghiệp của bản thân giai cấp công nhân” là của ai?",
    "a": "Ph. Ănghen",
    "b": "Hồ Chí Minh",
    "c": "C.Mác",
    "d": "V.I. Lênin Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "c"
  },
  {
    "num": 102,
    "q": "Chọn cụm từ đúng điền vào chỗ trống trong câu nói sau của Hồ Chí Minh: “Một dân tộc dốt là một dân tộc …”",
    "a": "Lạc hậu",
    "b": "Chậm phát triển",
    "c": "Không thể trở thành phú cường",
    "d": "Yếu",
    "ans": "d"
  },
  {
    "num": 103,
    "q": "Hồ Chí Minh đã khẳng định chủ nghĩa dân tộc là một động lực lớn ở các nước đang đấu tranh giành độc lập. Đó là chủ nghĩa dân tộc…",
    "a": "Chân chính",
    "b": "Vị tha",
    "c": "Hẹp hòi",
    "d": "Sô vanh nước lớn",
    "ans": "a"
  },
  {
    "num": 104,
    "q": "Theo Hồ Chí Minh, kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội phản ánh…",
    "a": "Quy luật khách quan của cách mạng giải phóng dân tộc trong thời đại cách mạng vô sản",
    "b": "Mối quan hệ giữa mục tiêu giải phóng dân tộc với giải phóng giai cấp, giải phóng con người",
    "c": "Cả 3 phương án trên đều đúng",
    "d": "Mối quan hệ giữa mục tiêu trước mắt và mục tiêu lâu dài",
    "ans": "c"
  },
  {
    "num": 105,
    "q": "Hồ Chí Minh đã dung hình tượng nào dưới đây để chỉ chủ nghĩa tư bản?",
    "a": "Con vẹt",
    "b": "Con chim đại bàng",
    "c": "Con bạch tuộc",
    "d": "Con đỉa hai vòi",
    "ans": "d"
  },
  {
    "num": 106,
    "q": "Luận điểm sau được trích trong tác phẩm nào của Hồ Chí Minh: “Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thì thuyền mới chạy”?",
    "a": "Tuyên ngôn độc lập",
    "b": "Đường cách mệnh",
    "c": "Di chúc",
    "d": "Bản án chế độ thực dân Pháp",
    "ans": "b"
  },
  {
    "num": 107,
    "q": "“Không! Chúng ta thà hi sinh tất cả chứ không chịu mất nước, chứ không chịu làm nô lệ”. Đoạn trên được trích từ bài viết nào của Hồ Chí Minh",
    "a": "Thư gửi đồng bào Nam Bộ",
    "b": "Tuyên ngôn độc lập (1945)",
    "c": "Thư kêu gọi Tổng khởi nghĩa",
    "d": "Lời kêu gọi toàn quốc kháng chiến",
    "ans": "d"
  },
  {
    "num": 108,
    "q": "\"Chúng ta thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ\". Câu nói trên của Hồ Chí Minh vào thời gian nào?",
    "a": "Tháng 9 năm 1945",
    "b": "Tháng 8 năm 1945",
    "c": "Tháng 6 năm 1966 Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Tháng 12 năm 1946",
    "ans": "d"
  },
  {
    "num": 109,
    "q": "Đại hội VI Quốc tế cộng sản đã thông qua “Những luận cương về phong trào cách mạng trong các nước thuộc địa và nửa thuộc địa” vào năm nào?",
    "a": "1929",
    "b": "1926",
    "c": "1927",
    "d": "1928",
    "ans": "d"
  },
  {
    "num": 110,
    "q": "“Chủ nghĩa xã hội là nhằm nâng cao đời sống vật chất và văn hoá của nhân dân và do nhân dân tự xây dựng lấy. Muốn đạt mục đích đó, thì nhân dân ta phải ra sức thi đua tăng gia sản xuất và thực hành tiết kiệm; mỗi người phải cố gắng trở thành lao động tiên tiến, chiến sĩ thi đua, anh hùng lao động, mỗi người phải nâng cao tinh thần làm chủ nước nhà”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Lời khai mạc Đại hội liên hoan anh hùng, chiến sĩ thi đua toàn quốc lần thứ III (5/1962)",
    "b": "Bài nói chuyện tại Đại hội lần thứ III của Đoàn Thanh niên Lao động Việt Nam (3/1961).",
    "c": "Bài nói chuyện với cán bộ tỉnh Hà Tây (2/1967).",
    "d": "Bài nói chuyện tại lớp nghiên cứu chính trị khoá I, Trường Đại học nhân dân Việt Nam (7/1956)",
    "ans": "a"
  },
  {
    "num": 111,
    "q": "Theo tư tưởng Hồ Chí Minh, độc lập tự do là…",
    "a": "Quyền thiêng liêng của tất cả các dân tộc",
    "b": "Quyền thiêng liêng và bất khả xâm phạm của tất cả các dân tộc",
    "c": "Quyền bất khả xâm phạm của tất cả các dân tộc",
    "d": "Quyền bất khả xâm phạm của công dân",
    "ans": "b"
  },
  {
    "num": 112,
    "q": "Hội nghị lần thứ tám Ban Chấp hành Trung ương Đảng do Nguyễn Ái Quốc chủ trì diễn ra khi nào?",
    "a": "8/1945",
    "b": "12/1944",
    "c": "5/1941",
    "d": "1/1941",
    "ans": "c"
  },
  {
    "num": 113,
    "q": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc là sự nghiệp đoàn kết của…",
    "a": "Toàn dân tộc trên cơ sở liên minh công – nông",
    "b": "Giai cấp công nhân và giai cấp nông dân",
    "c": "Giai cấp công nhân",
    "d": "Giai cấp tư sản và nông dân",
    "ans": "a"
  },
  {
    "num": 114,
    "q": "Theo Hồ Chí Minh, ở đời và làm người thì phải làm gì?",
    "a": "Yêu nước",
    "b": "Cả 3 phương án trên đều đúng",
    "c": "Thương nhân loại bị áp bức",
    "d": "Thương dân",
    "ans": "b"
  },
  {
    "num": 115,
    "q": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn giành được thắng lợi cần phải:",
    "a": "Tiến hành bằng bạo lực cách mạng.",
    "b": "Đi theo con đường cách mạng vô sản",
    "c": "Cả ba đáp án trên đều đúng.",
    "d": "Có Đảng cộng sản lãnh đạo. Tài liệu t am khảo môn Triết - Anh Huy",
    "ans": "c"
  },
  {
    "num": 116,
    "q": "Trong Tư tưởng HCM, giải phóng con người trước hết là",
    "a": "Giải phóng giai cấp công nhân",
    "b": "Giải phóng dân tộc",
    "c": "Giải phóng giai cấp nông dân",
    "d": "Giải phóng xã hội",
    "ans": "b"
  },
  {
    "num": 117,
    "q": "Mâu thuẫn chủ yếu trong xã hội thuộc địa phương Đông là mâu thuẫn gì?",
    "a": "Mâu thuẫn giữa giai cấp nông dân và giai cấp địa chủ",
    "b": "Mâu thuẫn giữa dân tộc bị áp bức với giai cấp tư sản bản xứ",
    "c": "Mâu thuẫn giữa dân tộc bị áp bức với chủ nghĩa thực dân",
    "d": "Mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản",
    "ans": "c"
  },
  {
    "num": 118,
    "q": "Thực chất của vấn đề dân tộc thuộc địa trong tư tưởng Hồ Chí Minh là gì?",
    "a": "Đấu tranh giải phóng giai cấp, mang lại tự do thực sự cho giai cấp công nhân",
    "b": "Đấu tranh chống lại giai cấp tư sản ở thuộc địa",
    "c": "Lật đổ sự thống trị của giai cấp địa chủ phong kiến, mang lại ruộng đất cho dân cày",
    "d": "Đấu tranh chống chủ nghĩa thực dân, giải phóng dân tộc",
    "ans": "d"
  },
  {
    "num": 119,
    "q": "Theo Hồ Chí Minh, trong cuộc cách mạng giải phóng dân tộc, lực lượng nào “là gốc cách mệnh”?",
    "a": "Giai cấp công nhân.",
    "b": "Giai cấp nông dân.",
    "c": "Giai cấp tư sản dân tộc.",
    "d": "Giai cấp công nhân và giai cấp nông dân.",
    "ans": "d"
  },
  {
    "num": 120,
    "q": "Trong những câu dưới đây, câu nào không phải là của Chủ tịch Hồ Chí Minh?",
    "a": "Không có gì quý hơn độc lập, tự do",
    "b": "Cay đắng chi bằng mất tự do.",
    "c": "Không có gì quý bằng độc lập, tự do",
    "d": "Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.",
    "ans": "c"
  },
  {
    "num": 121,
    "q": "Luận điểm: “Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộn sản” được trích trong tác phẩm nào của Hồ Chí Minh?",
    "a": "Đường cách mệnh lược của cách mạng VN:…",
    "b": "Bản án chế độ thực dân Pháp",
    "c": "Cương lĩnh chính trị đầu tiên",
    "d": "Di chúc",
    "ans": "c"
  },
  {
    "num": 122,
    "q": "Nột dung cốt lõi của tư tưởng Hồ Chí Minh là gì",
    "a": "Độc lập dân tộc Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "Dân chủ, dân quyền",
    "c": "Chủ nghĩa xã hội",
    "d": "Độc lập dân tộc gắn liền với chủ nghĩa xã hội nghĩa xã hội”",
    "ans": "d"
  },
  {
    "num": 123,
    "q": "Ai là người bàn nhiều về cuộc đấu tranh chống chủ nghĩa đế quốc?",
    "a": "C.Mác",
    "b": "V.I.Lênin",
    "c": "Hồ Chí Minh",
    "d": "Ph. Ăngghen",
    "ans": "b"
  },
  {
    "num": 124,
    "q": "Hồ Chí Minh viết: “Trong cuộc đấu tranh gian khổ chống kẻ thù của giai cấp và của dân tộc, cần phải dùng Bạo lực cách mạng chống lại bạo lực phản cách mạng, giành lấy chính quyền và bảo vệ chính quyền”. Câu trích nêu trên Hồ Chí Minh muốn đề cập tới vấn đề gì trong quan điểm về Cách mạng giải phóng dân tộc?",
    "a": "Hình thái của bạo lực cách mạng",
    "b": "Bạo lực cách mạng là phương thức phổ biến",
    "c": "Tính tất yếu của bạo lực cách mạng",
    "d": "Cách thức thể hiện của bạo lực cách mạng",
    "ans": "c"
  },
  {
    "num": 125,
    "q": "\"Chiến tranh có thể kéo dài 5 năm, 10 năm, 20 năm hoặc lâu hơn nữa..., song nhân dân Việt Nam quyết không sợ? Không có gì quý hơn độc lập tự do. Đến ngày thắng lợi nhân dân ta sẽ xây dựng lại đất nước ta đàng hoàng hơn, to đẹp hơn\". Câu nói trên của Chủ tịch Hồ Chí Minh vào thời gian nào?",
    "a": "Lời kêu gọi của Hồ Chí Minh ngày 17/7/1966",
    "b": "Bản Di chúc của Hồ Chí Minh được công bố tại lễ truy điệu Người ngày 9/9/1969",
    "c": "Thư chúc tết đầu Xuân 1969",
    "d": "Lời kêu gọi của Hồ Chí Minh ngày 19/12/1946",
    "ans": "a"
  },
  {
    "num": 126,
    "q": "Theo Hồ Chí Minh, nội dung giải phóng dân tộc theo con đường cách mạng vô sản bao gồm",
    "a": "Lực lượng cách mạng là toàn dân tộc",
    "b": "Đi từ giải phóng dân tộc tới xã hội cộng sản",
    "c": "Lực lượng lãnh đạo là Đảng Cộng sản",
    "d": "Cả 3 phương án trên đều đúng",
    "ans": "d"
  },
  {
    "num": 127,
    "q": "Theo Hồ Chí Minh, bước đi trong xây dựng Chủ nghĩa xã hội là gì?",
    "a": "Tiến nhanh.",
    "b": "Đẩy mạnh công nghiệp hóa, nhanh chóng đuổi kịp các nước. được mà phải làm dần dần”",
    "c": "Tiến dần dần từng bước.",
    "d": "Tiến mạnh.",
    "ans": "c"
  },
  {
    "num": 128,
    "q": "“… Tôi chỉ có một ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969)",
    "b": "Trả lời các nhà báo nước ngoài (1/1946). Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Diễn văn khai mạc Đại hội Đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam (9/1960)",
    "d": "Bài nói chuyện tại lớp nghiên cứu chính trị khoá I, Trường Đại học nhân dân Việt Nam (7/1956)",
    "ans": "b"
  },
  {
    "num": 129,
    "q": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn giành được thắng lợi phải…",
    "a": "Kết hợp lực lượng chính trị của quần chúng với lực lượng vũ trang của nhân dân",
    "b": "Thực hiện bằng con đường bạo lực",
    "c": "Thực hiện bằng con đường hòa bình, vận động, thuyết phục",
    "d": "Thực hiện bằng con đường bạo lực, kết hợp với lực lượng chính trị của quần chúng với lực lượng vũ trang của nhân dân",
    "ans": "d"
  },
  {
    "num": 130,
    "q": "“Công nông là tay không, chân không rồi, nếu thua thì chỉ mất một kiếp khổ, nếu được thì được cả thế giới, cho nên họ gan góc”. Câu trích nêu trên Hồ Chí Minh muốn đề cập đến vấn đề gì trong quan điểm về cách mạng giải phóng dân tộc?",
    "a": "Nguồn gốc của giai cấp công nhân.",
    "b": "Tinh thần cách mạng triệt để của giai cấp công nhân, nông dân ở Việt Nam",
    "c": "Công nông là lực lượng cách mạng đông đảo nhất.",
    "d": "Ý thức tự giác cách mạng của công nông",
    "ans": "b"
  },
  {
    "num": 131,
    "q": "Theo tư tưởng Hồ Chí Minh, nền kinh tế mà chúng ta xây dựng phải được tạo lập trên cơ sở… là chủ yếu.",
    "a": "Chế độ công hữu về tư liệu sản xuất",
    "b": "Nền nông nghiệp hiện đại",
    "c": "Chế độ tư hữu về tư liệu sản xuất",
    "d": "Nền công nghiệp hiện đại",
    "ans": "a"
  },
  {
    "num": 132,
    "q": "Theo Hồ Chí Minh điểm giống nhau của hai giai đoạn, giai đoạn thấp, tức chủ nghĩa xã hội, giai đoạn cao, tức chủ nghĩa cộng sản là gì?",
    "a": "Sức sản xuất đã phát triển cao; tư liệu sản xuất đều là của chung; không có giai cấp áp bức bóc lột.",
    "b": "Sức sản xuất đã phát triển cao; tư liệu sản xuất là của chung.",
    "c": "Sức sản xuất đã phát triển cao",
    "d": "Sức sản xuất đã phát triển cao; tư liệu sản xuất là của chung; thực hiện nguyên tắc phân phối theo lao động.",
    "ans": "a"
  },
  {
    "num": 133,
    "q": "Hồ Chí Minh khẳng định: “…Nọc độc và sức sống của con rắn độc Tư bản chủ nghĩa đang tập trung ở thuộc địa…đánh rắn thì phải đánh ở đằng đầu”. Câu trích nêu trên Hồ Chí Minh muốn đề cập đến vấn đề gì trong quan điểm về vấn đề dân tộc?",
    "a": "Phương pháp thực hiện cách mạng ở các nước thuộc địa",
    "b": "Động lực của cách mạng thuộc địa",
    "c": "Tính sáng tạo của cách mạng thuộc địa",
    "d": "Khả năng chủ động và giành thắng lợi của cách mạng thuộc địa so với cách mạng vô sản chính quốc",
    "ans": "d"
  },
  {
    "num": 134,
    "q": "“Tất cả sinh lực của chủ nghĩa tư bản quốc tế đều lấy ở các nước xứ thuộc địa. Đó là nơi chủ nghĩa tư bản lấy nguyên liệu cho các nhà máy của nó, nơi nó đầu tư, tiêu thụ hàng, mộ nhân công rẻ mạt cho đạo quân lao động của nó, và nhất là binh lính bản xứ cho các đạo quân phản cách mạng của nó... nhân dân xứ thuộc địa là những người bị bóc lột tàn tệ nhất”. Câu trích nêu trên Hồ Chí Minh muốn đề cập đến vấn đề gì trong quan điểm về cách mạng giải phóng dân tộc?",
    "a": "Khả năng giành thắng lợi của cách mạng thuộc địa trước cách mạng vô sản chính quốc",
    "b": "Mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc",
    "c": "Tính chủ động của cách mạng thuộc địa Tài liệu t am khảo môn Triết - Anh Huy",
    "d": "Khả năng giành thắng lợi của cách mạng vô sản chính quốc.",
    "ans": "a"
  },
  {
    "num": 135,
    "q": "Hồ Chí Minh khẳng định chủ nghĩa dân tộc là một động lực lớn ở các nước đang đấu tranh giành độc lập. Đó là chủ nghĩa dân tộc nào?",
    "a": "Chủ nghĩa dân tộc vị kỷ.",
    "b": "Chủ nghĩa sô vanh, nước lớn.",
    "c": "Chủ nghĩa dân tộc chân chính.",
    "d": "Chủ nghĩa nhân đạo cộng sản",
    "ans": "c"
  },
  {
    "num": 136,
    "q": "“Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy”. Đoạn trên được trích từ bài viết nào của Hồ Chí Minh",
    "a": "Lời kêu gọi toàn quốc kháng chiến",
    "b": "Tuyên ngôn độc lập (1945)",
    "c": "Thư gửi đồng bào Nam Bộ",
    "d": "Thư kêu gọi Tổng khởi nghĩa",
    "ans": "b"
  },
  {
    "num": 137,
    "q": "Trong cách mạng giải phóng dân tộc, Hồ Chí Minh coi giai cấp nào đóng vai trò động lực cách mạng?",
    "a": "Giai cấp công nhân",
    "b": "Giai cấp công nhân và giai cấp nông dân",
    "c": "Giai cấp nông dân",
    "d": "Giai cấp tư sản dân tộc",
    "ans": "b"
  },
  {
    "num": 138,
    "q": "Theo tư tưởng Hồ Chí Minh, mục tiêu của chủ nghĩa xã hội là gì?",
    "a": "Mở rộng dân chủ cho mọi giai cấp, tầng lớp",
    "b": "Phát triển mạnh mẽ khoa học, kỹ thuật",
    "c": "Không ngừng cải thiện và nâng cao đời sống nhân dân lao động",
    "d": "Nền kinh tế nông nghiệp hiện đại",
    "ans": "c"
  },
  {
    "num": 139,
    "q": "Câu nói: “Bạo lực là bà đỡ của một chế độ xã hội cũ đang thai nghén một chế độ xã hội mới”, của ai?",
    "a": "V.I.Lênin",
    "b": "Hồ Chí Minh",
    "c": "C.Mác",
    "d": "Ph. Ăngghen",
    "ans": "c"
  },
  {
    "num": 140,
    "q": "Trong các luận điểm sau đây, luận điểm nào của Hồ Chí Minh?",
    "a": "“Quyền tự nhiên của con người là quyền sống, quyền tự do, quyền tư hữu “",
    "b": "“Tất cả mọi người đều sinh ra có quyền bình đẳng.Tạo hóa cho họ những quyền không ai có thể xâm phạm được:trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc”.",
    "c": "“Tất cả dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do”.",
    "d": "“Người ta sinh ra tự do và bình đẳng về quyền lợi và phải luôn luôn được tự do và bình đẳng về quyền lợi”.",
    "ans": "c"
  },
  {
    "num": 141,
    "q": "\"Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy\". Đoạn văn trên trích từ bài viết nào của Chủ tịch Hồ Chí Minh?",
    "a": "Thư kêu gọi Tổng khởi nghĩa.",
    "b": "Tuyên ngôn Độc lập. Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Thư gửi đồng bào Nam bộ.",
    "d": "Lời kêu gọi Toàn quốc kháng chiến.",
    "ans": "b"
  },
  {
    "num": 142,
    "q": "Trong các luận điểm sau về chủ nghĩa xã hội, đâu là luận điểm của Hồ Chí Minh?",
    "a": "Chủ nghĩa xã hội là lấy nhà máy, ngân hàng, xe lửa... làm của chung",
    "b": "Chủ nghĩa cộng sản là giai cấp công nhân ghi lên lá cờ của mình khẩu hiệu: làm theo năng lực, hưởng theo nhu cầu",
    "c": "Liên hợp tự do của những người lao động, tự do của mỗi người là điều kiện cho sự tự do của mọi người",
    "d": "Chủ nghĩa xã hội là chính quyền Xô Viết + điện khí hóa toàn quốc",
    "ans": "a"
  },
  {
    "num": 143,
    "q": "Chủ tịch Hồ Chí Minh nói câu: \"Không có gì quý hơn độc lập, tự do” vào thời gian nào?",
    "a": "1945",
    "b": "1960",
    "c": "1966",
    "d": "1954",
    "ans": "c"
  },
  {
    "num": 144,
    "q": "Luận điểm “Chủ nghĩa dân tộc là động lực lớn của đất nước” của Hồ Chí Minh được trích từ tác phẩm nào?",
    "a": "Báo người cùng khổ",
    "b": "Báo cáo về Bắc kỳ, trung kỳ và nam kỳ",
    "c": "Đường cách mệnh",
    "d": "Bản án chế độ thực dân Pháp",
    "ans": "b"
  },
  {
    "num": 145,
    "q": "Trong quá trình tìm tòi con đường cứu nước, tại sao Hồ Chí Minh không lựa chọn đi theo con đường cách mạng của các nước Anh, Pháp, Mỹ?",
    "a": "Đây là các cuộc cách mạng dưới sự lãnh đạo của giai cấp tư sản",
    "b": "Các cuộc cách mạng này diễn ra ở phương Tây nên không phù hợp với xã hội phương Đông",
    "c": "Đây là những cuộc cách mạng không đến nơi đến nơi,…",
    "d": "Đây là các cuộc cách mạng không tiên tiến",
    "ans": "c"
  },
  {
    "num": 146,
    "q": "Trong cương lĩnh chính trị đầu tiên của Đảng cộng sản Việt Nam. Hồ Chí Minh viết: “Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản” thực chất là gì?",
    "a": "Cách mạng giải phóng giai cấp là trung tâm tạo điều kiện giải phóng dân tộc.",
    "b": "Cách mạng giải phóng dân tộc, giành độc lập dân tộc.",
    "c": "Cuộc cách mạng với nội dung dân tộc, dân chủ và chủ nghĩa xã hội.",
    "d": "Giải phóng dân tộc tạo tiền đề để giải phóng giai cấp.",
    "ans": "c"
  },
  {
    "num": 147,
    "q": "Luận điểm “công cuộc giải phóng anh em chỉ có thể thực hiện bằng sự nỗ lực của bản than anh em” là của ai?",
    "a": "Lê Duẩn",
    "b": "Ph. Ăngghen",
    "c": "C. Mác",
    "d": "Hồ Chí Minh",
    "ans": "d"
  },
  {
    "num": 148,
    "q": "Theo tư tưởng Hồ Chí Minh, đặc trưng kinh tế nổi bật nhất của chủ nghĩa xã hội là gì?",
    "a": "Chế độ tư hữu về tư liệu sản xuất",
    "b": "Sở hữu xã hội về tư liệu sản xuất Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Khoa học – Kỹ thuật",
    "d": "Cơ cấu công – nông nghiệp hợp lý",
    "ans": "b"
  },
  {
    "num": 149,
    "q": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn giành được thắng lợi phải…",
    "a": "Tiến hành chủ động và sáng tạo",
    "b": "Phụ thuộc hoàn toàn vào cách mạng tư sản",
    "c": "Dựa vào sự thắng lợi của cách mạng ở các nước thuộc địa khác",
    "d": "Dựa vào thắng lợi của cách mạng vô sản ở chính quốc",
    "ans": "a"
  },
  {
    "num": 150,
    "q": "“Đồng bào Nam Bộ là dân nước Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi”. Đoạn trên được trích từ bài viết nào của Hồ Chí Minh",
    "a": "Thư kêu gọi Tổng khởi nghĩa",
    "b": "Thư gửi đồng bào Nam Bộ",
    "c": "Tuyên ngôn độc lập (1945)",
    "d": "Lời kêu gọi toàn quốc kháng chiến",
    "ans": "b"
  },
  {
    "num": 151,
    "q": "Theo Hồ Chí Minh, trong cách mạng giải phóng dân tộc, lực lượng nào được coi là “bầu bạn cách mệnh” của công nông?",
    "a": "Tầng lớp tiểu tư sản – trí thức một cái kiếp khổ, nếu được thì được cả thế giới, cho nên họ gan góc. Vì những cớ ấy, nên công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ cũng bị tư bản áp bức, song không cực khổ bằng công nông; 3 hạng ấy chỉ là bầu bạn cách mệnh của công nông thôi.\" - Trích \"Đường Kách mệnh\"",
    "b": "Giai cấp tư sản dân tộc",
    "c": "Cả 3 phương án trên",
    "d": "Bộ phận địa chủ yêu nước",
    "ans": "c"
  },
  {
    "num": 152,
    "q": "Chọn cụm từ đúng điền vào chỗ trống trong câu viết sau đây của Hồ Chí Minh: \"Toàn thể dân tộc Việt Nam quyết đemđể giữ vững quyền tự do, độc lập ấy\".",
    "a": "Toàn bộ sức lực.",
    "b": "Lòng dũng cảm và sự hy sinh",
    "c": "Tất cả tinh thần và lực lượng, tính mạng và của cải.",
    "d": "Tất cả tinh thần và lực lượng.",
    "ans": "c"
  },
  {
    "num": 153,
    "q": "Theo Hồ Chí Minh, khi bước vào thời kỳ quá độ, đặc điểm to nhất của Việt Nam là gì?",
    "a": "Từ một nước nông nghiệp lạc hậu quá độ lên chủ nghĩa xã hội không phải kinh qua giai đoạn phát triển tư bản chủ nghĩa",
    "b": "Từ một nước nông nghiệp tiến lên chủ nghĩa xã hội",
    "c": "Từ một nước thuộc địa nửa phong kiến quá độ lên chủ nghĩa xã hội",
    "d": "Từ một nước lạc hậu quá độ trực tiếp lên chủ nghĩa xã hội",
    "ans": "a"
  },
  {
    "num": 154,
    "q": "Theo Hồ Chí Minh ở Việt Nam và các nước thuộc địa cần tiến hành cuộc cách mạng nào trước?",
    "a": "Cách mạng xã hội chủ nghĩa",
    "b": "Cách mạng giải phóng dân tộc",
    "c": "Cách mạng giải phóng giai cấp",
    "d": "Cách mạng giải phóng con người một cách toàn diện",
    "ans": "b"
  },
  {
    "num": 155,
    "q": "Theo Hồ Chí Minh, nhiệm vụ hàng đầu, trên hết trước hết của cách mạng Việt Nam là…",
    "a": "Giải phóng giai cấp",
    "b": "Giải phóng dân tộc",
    "c": "Giải phóng con người Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Giải phóng phụ nữ",
    "ans": "b"
  },
  {
    "num": 156,
    "q": "Luận điểm: “Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do” được trích trong tác phẩm nào của Hồ Chí Minh?",
    "a": "Bản án chế độ thực dân Pháp",
    "b": "Tuyên ngôn độc lập",
    "c": "Đường cách mệnh",
    "d": "Di chúc",
    "ans": "b"
  },
  {
    "num": 157,
    "q": "Luận điểm “Chủ nghĩa tư bản là một con đỉa có 1 cái vòi bám vào giai cấp vô sản ở chính quốc và 1 cái vòi khác bám vào giai cấp vô sản ở các nước thuộc địa. Nếu muốn giết con vật ấy, người ta phải đồng thời cắt cả 2 vòi” của Hồ Chí Minh được trích trong tác phẩm nào?",
    "a": "Đường cách mệnh",
    "b": "Bản án chế độ thực dân Pháp",
    "c": "Di chúc",
    "d": "Báo người cùng khổ",
    "ans": "b"
  },
  {
    "num": 158,
    "q": "Trong tác phẩm Đường cách mệnh, Hồ Chí Minh cho rằng muốn làm cách mạng thì trước hết phải có?",
    "a": "Lực lượng cách mạng",
    "b": "Cả 3 phương án trên",
    "c": "Phương pháp cách mạng",
    "d": "Đảng cách mạng liên lạc với các dân tộc bị áp bức và vô sản giai cấp mọi nơi",
    "ans": "d"
  },
  {
    "num": 159,
    "q": "Luận điểm: “Dù phải hy sinh tới đâu, dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập” được Hồ Chí Minh đưa ra khi nào?",
    "a": "5/1941",
    "b": "1/1941",
    "c": "8/1945 Tài liệu t am khảo môn T iết - Anh Huy",
    "d": "12/1944",
    "ans": "c"
  },
  {
    "num": 160,
    "q": "Tác phẩm Thường thức chính trị được Hồ Chí Minh viết khi nào?",
    "a": "1953",
    "b": "1950",
    "c": "1951",
    "d": "1952",
    "ans": "a"
  },
  {
    "num": 161,
    "q": "Theo Hồ Chí Minh, vai trò lãnh đạo của giai cấp công nhân trong cách mạng Việt Nam do yếu tố nào quy định?",
    "a": "Do đặc tính của giai cấp công nhân.",
    "b": "Do đặc điểm của thời đại mới. chức, kỷ luật. Công nhân là giai cấp tiền tiến nhất trong sức sản xuất, có trách nhiệm đánh đổ chế độ tư bản và đế quốc, xây dựng một xã hội mới. Vì những lẽ đó, giai cấp công nhân có thể lĩnh hội và thấm nhuần một tư tưởng cách mạng nhất: chủ nghĩa Marx Lenin. Đồng thời, tinh thần đấu tranh của họ ảnh hưởng và làm gương cho các tầng lớp khác. Do đó, về mặt chính trị, tư tưởng, tổ chức và hành động, giai cấp công nhân đều giữ vai trò lãnh đạo)",
    "c": "Do ý muốn của Đảng Cộng sản.",
    "d": "Do số lượng giai cấp công nhân.",
    "ans": "a"
  },
  {
    "num": 162,
    "q": "Cuộc Tổng tuyển cử bầu Quốc hội khóa I của Việt Nam diễn ra khi nào?",
    "a": "3/9/1945",
    "b": "5/9/1945",
    "c": "6/1/1946",
    "d": "19/12/1946",
    "ans": "c"
  },
  {
    "num": 163,
    "q": "Hồ Chí Minh coi những căn bệnh nào là “bạn đồng minh của thực dân và phong kiến”?",
    "a": "Cả 3 phương án trên",
    "b": "Đặc quyền, đặc lợi",
    "c": "Tham ô, lãng phí, quan liêu",
    "d": "Tư túng, kiêu ngạo, chia rẽ",
    "ans": "c"
  },
  {
    "num": 164,
    "q": "Hồ Chí Minh quan niệm dân chủ nghĩa là:",
    "a": "Dân làm chủ",
    "b": "Dân là chủ và dân làm chủ",
    "c": "Dân là chủ",
    "d": "Quyền lực thuộc về nhân dân.",
    "ans": "b"
  },
  {
    "num": 165,
    "q": "Quan điểm : \"Đảng ta là đạo đức, là văn minh\" được Hồ Chí Minh trình bày trong tác phẩm nào?",
    "a": "Diễn văn khai mạc Đại hội đại biểu toàn quốc lần thứ III của Đảng",
    "b": "Diễn văn đọc tại lễ kỷ niệm 30 năm ngày thành lập Đảng",
    "c": "Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ II của Đảng",
    "d": "Sách lược vắn tắt của Đảng",
    "ans": "b"
  },
  {
    "num": 166,
    "q": "Luận điểm sau của Hồ Chí Minh: “Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh,để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững cách mệnh mới thành công cũng như người cầm lái có vững thuyền mới chạy” thể hiện nội dung tư tưởng Hồ Chí Minh về?",
    "a": "Vai trò của Đảng cộng sản Việt Nam",
    "b": "Quan niệm về Đảng cầm quyền Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Sự ra đời của Đảng cộng sản Việt Nam",
    "d": "Bản chất của Đảng cộng sản Việt Nam",
    "ans": "a"
  },
  {
    "num": 167,
    "q": "Đảng cộng sản Việt Nam không lãnh đạo nhà nước bằng những phương thức nào?",
    "a": "Đảng lãnh đạo bằng Hiến pháp, pháp luật",
    "b": "Đảng lãnh đạo bằng công tác kiểm tra",
    "c": "Đảng lãnh đạo bằng hoạt động của các tổ chức đảng và đảng viên của mình trong bộ máy, cơ quan nhà nước.",
    "d": "Đảng lãnh đạo bằng đường lối, chủ trương, quan điểm",
    "ans": "a"
  },
  {
    "num": 168,
    "q": "Trong Di chúc, Chủ tịch Hồ Chí Minh đã dặn lại: “Đảng cần phải có kế hoạch thật tốt để phát triển kinh tế và văn hoá, không ngừng nâng cao đời sống của…”, tìm đáp án đúng để điền vào chỗ để trống?",
    "a": "Các tầng lớp nhân dân",
    "b": "Cán bộ, đảng viên",
    "c": "Nhân dân",
    "d": "Cả 3 phương án trên đều sai",
    "ans": "c"
  },
  {
    "num": 169,
    "q": "Theo tư tưởng Hồ Chí Minh, việc đổi mới, chỉnh đốn Đảng được hiểu là:",
    "a": "Khi cách mạng ở vào thời kỳ khó khan",
    "b": "Khi Đảng không còn vững mạnh",
    "c": "Một giải pháp tình thế",
    "d": "Việc làm thường xuyên của Đảng",
    "ans": "d"
  },
  {
    "num": 170,
    "q": "Theo tư tưởng Hồ Chí Minh, một nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ là…",
    "a": "Một nhà nước không có tiêu cực, không có đặc quyền, đặc lợi",
    "b": "Một nhà nước hợp hiến",
    "c": "Một nhà nước của dân, do dân, vì dân",
    "d": "Một nhà nước thống nhất, có quyền quốc gia",
    "ans": "b"
  },
  {
    "num": 171,
    "q": "Hồ Chí Minh khẳng định: \"Lực lượng của giai cấp công nhân và nhân dân lao động là to lớn, vô cùng, vô tận, nhưng lực lượng ấy cần có Đảng mới thắng lợi\". Câu này thể hiện quan điểm nào của Hồ Chí Minh về Đảng?",
    "a": "Đảng cộng sản là nhân tố hàng đầu đưa tới thắng lợi của cách mạng Việt Nam.",
    "b": "ĐCSVN – Đảng của giai cấp công nhân, nhân dân lao động và của cả dân tộc.",
    "c": "Đảng cộng sản lấy chủ nghĩa Mác – Lênin làm \"cốt\".",
    "d": "Tăng cường củng cố mối quan hệ bền chặt giữa Đảng và dân.",
    "ans": "a"
  },
  {
    "num": 172,
    "q": "Luận điểm: “Đảng muốn vững phải có chủ nghĩa làm cốt, trong đảng ai cũng phải hiểu, ai cũng phải theo chủ nghĩa ấy. Đảng mà không có chủ nghĩa cũng giống như người không có trí khôn, tàu không có bàn chỉ nam” thể hiện nội dung tư tưởng Hồ Chí Minh về?",
    "a": "Xây dựng Đảng về đạo đức",
    "b": "Xây dựng Đảng về tổ chức, bộ máy, công tác cán bộ",
    "c": "Xây dựng Đảng về chính trị",
    "d": "Xây dựng Đảng về tư tưởng lý luận",
    "ans": "d"
  },
  {
    "num": 173,
    "q": "Câu trích: “Bảy xin hiến pháp ban hành; Trăm đều phải có thần linh pháp quyền” được trích trong tác phẩm nào của Hồ Chí Minh? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Việt Nam yêu cầu ca",
    "b": "Cương lĩnh chính trị đầu tiên",
    "c": "Bản án chế độ thực dân Pháp",
    "d": "Đường cách mệnh",
    "ans": "a"
  },
  {
    "num": 174,
    "q": "Lựa chọn phương án đúng điền vào chỗ trống: “Một dân tộc, một đảng, một người, ngày hôm qua là vĩ đại, không nhất định ngày hôm nay và ngày mai vẫn được ca ngợi, nếu lòng dạ không trong sáng nữa, nếu…”",
    "a": "Vị kỷ, cá nhân.",
    "b": "Sa vào chủ nghĩa cá nhân.",
    "c": "Chạy theo cám dỗ vật chất.",
    "d": "Không nghĩ đến lợi ích dân tộc.",
    "ans": "b"
  },
  {
    "num": 175,
    "q": "Vấn đề nào không thể hiện bản chất giai cấp công nhân của Đảng cộng sản Việt Nam?",
    "a": "Số lượng Đảng viên là công nhân",
    "b": "Mục tiêu của Đảng là chủ nghĩa cộng sản",
    "c": "Đảng tuân thủ những nguyên tắc xây dựng đảng kiểu mới của giai cấp công nhân",
    "d": "Nền tảng tư tưởng, lý luận của Đảng chủ nghĩa Mác – Lênin",
    "ans": "a"
  },
  {
    "num": 176,
    "q": "Trước lúc đi xa, Chủ tịch Hồ Chí Minh đã để lại những lời tâm huyết, căn dặn toàn Đảng: “Việc cần phải làm trước tiên là... , làm cho mỗi đảng viên, mỗi đoàn viên, mỗi chi bộ đều ra sức làm tròn nhiệm vụ Đảng giao phó cho mình, toàn tâm, toàn ý phục vụ nhân dân”, tìm đáp án đúng điền vào chỗ để trống?",
    "a": "Xây dựng Đảng",
    "b": "Phát triển Đảng",
    "c": "Chỉnh đốn lại Đảng",
    "d": "Đoàn kết trong Đảng",
    "ans": "c"
  },
  {
    "num": 177,
    "q": "Nguyên tắc tập trung dân chủ là nguyên tắc gì của Đảng cộng sản?",
    "a": "Nguyên tắc phê bình",
    "b": "Nguyên tắc tổ chức",
    "c": "Nguyên tắc lãnh đạo",
    "d": "Nguyên tắc sinh hoạt",
    "ans": "b"
  },
  {
    "num": 178,
    "q": "Theo Hồ Chí Minh, nhà nước của dân là nhà nước như nào?",
    "a": "Mọi quyền lực trong xã hội đều thuộc về nhân dân",
    "b": "Cả 3 phương án trên",
    "c": "Nhân dân thực hiện quyền giảm sát, kiểm tra hoạt động của nhà nước",
    "d": "Dân tổ chức nên các cơ quan nhà nước thông qua bầu cử",
    "ans": "a"
  },
  {
    "num": 179,
    "q": "Luận điểm sau của Hồ Chí Minh: “Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh,để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững cách mệnh mới thành công cũng như người cầm lái có vững thuyền mới chạy” được trích trong tác phẩm nào?",
    "a": "Tuyên ngôn độc lập",
    "b": "Ba mươi năm hoạt động của Đảng",
    "c": "Đường cách mệnh Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Cương lĩnh chính trị đầu tiên",
    "ans": "c"
  },
  {
    "num": 180,
    "q": "Quan điểm: \"Đảng ta là một Đảng cầm quyền” được Hồ Chí Minh trình bày trong văn kiện nào?",
    "a": "Chánh cương vắn tắt của Đảng",
    "b": "Di chúc",
    "c": "Diễn văn khai mạc Đại hội đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam",
    "d": "Báo cáo chính trị tại Đại hội lần thứ II của Đảng",
    "ans": "b"
  },
  {
    "num": 181,
    "q": "\"Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư. Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân”. Câu viết trên của Hồ Chí Minh ở trong tác phẩm nào của Người?",
    "a": "Di chúc",
    "b": "Đường cách mệnh",
    "c": "Sửa đổi lối làm việc",
    "d": "Đạo đức cách mạng",
    "ans": "a"
  },
  {
    "num": 182,
    "q": "Chủ tịch Hồ Chí Minh coi nguyên tắc tự phê bình và phê bình trong hoạt động của Đảng là việc làm như thế nào? Lựa chọn đáp án đúng",
    "a": "Việc làm hàng tháng",
    "b": "Việc làm hàng năm",
    "c": "Việc làm thường xuyên",
    "d": "Việc làm có tính định kỳ",
    "ans": "c"
  },
  {
    "num": 183,
    "q": "Theo Hồ Chí Minh, Đảng cộng sản Việt Nam phải lấy chủ nghĩa Mác - Lênin làm “cốt” có nghĩa là?",
    "a": "Đảng cộng sản phải lấy chủ nghĩa Mác - Lênin làm chủ trương, đường lối",
    "b": "Đảng phải lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng",
    "c": "Đảng cộng sản phải lấy chủ nghĩa Mác - Lênin làm học thuyết của Đảng",
    "d": "Đảng cộng sản phải thường xuyên nâng cao nhận thức chủ nghĩa Mác – Lênin",
    "ans": "b"
  },
  {
    "num": 184,
    "q": "Đảng cộng sản Việt Nam trở thành Đảng cầm quyền khi nào?",
    "a": "1975 lái con thuyền cách mạng Việt Nam ngay từ khi ra đời đã trở thành đảng cầm quyền)",
    "b": "1954",
    "c": "1945",
    "d": "1930",
    "ans": "c"
  },
  {
    "num": 185,
    "q": "Đảng cộng sản Việt Nam lãnh đạo nhà nước bằng những phương thức nào?",
    "a": "Đảng lãnh đạo bằng hệ thống chính sách",
    "b": "Đảng lãnh đạo bằng hệ thống cơ quan của Đảng",
    "c": "Đảng lãnh đạo bằng đường lối",
    "d": "Đảng lãnh đạo bằng Hiến pháp, pháp luật",
    "ans": "c"
  },
  {
    "num": 186,
    "q": "Tư tưởng về xây dựng một nhà nước mới ở Việt Nam là một nhà nước do nhân dân lao động làm chủ là của ai?",
    "a": "Phan Bội Châu",
    "b": "Phan Chu Trinh Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Hồ Chí Minh",
    "d": "Huỳnh Thúc Kháng",
    "ans": "c"
  },
  {
    "num": 187,
    "q": "Theo Hồ Chí Minh, bản chất giai cấp công nhân của Nhà nước được thể hiện ở nội dung nào?",
    "a": "Nhà nước do Đảng cộng sản lãnh đạo",
    "b": "Nhà nước bảo vệ lợi ích của nhân dân, lấy lợi ích của giai cấp công nhân làm nền tảng",
    "c": "Nhà nước ra đời là kết quả cuộc đấu tranh lâu dài và gian khổ của nhiều thế hệ người Việt Nam",
    "d": "Nhà nước bảo vệ nền độc lập của Tổ quốc",
    "ans": "a"
  },
  {
    "num": 188,
    "q": "Theo Hồ Chí Minh, mâu thuẫn giai cấp trong xã hội thuộc địa, nửa phong kiến Việt Nam thể hiện như thế nào?",
    "a": "Mâu thuẫn cơ bản",
    "b": "Mâu thuẫn được giảm thiểu",
    "c": "Mâu thuẫn gay gắt cần được giải quyết",
    "d": "Mâu thuẫn đối kháng",
    "ans": "b"
  },
  {
    "num": 189,
    "q": "Theo Hồ Chí Minh, căn bệnh nào là căn bệnh gốc sinh ra bệnh tham ô, lãng phí?",
    "a": "Đặc quyền vậy, đây là bệnh gốc sinh ra các bệnh tham ô, lãng phí; muốn trừ sạch bệnh tham ô, lãng phí thì trước hết phải tẩy sạch bệnh quan liêu",
    "b": "Quan liêu",
    "c": "Kiêu ngạo",
    "d": "Tư túng",
    "ans": "b"
  },
  {
    "num": 190,
    "q": "Theo Hồ Chí Minh, trong xây dựng Đảng cần tuân thủ những nguyên tắc nào?",
    "a": "Cả 3 phương án trên",
    "b": "Tập trung dân chủ",
    "c": "Tự phê bình và phê bình",
    "d": "Tập thể lãnh đạo, cá nhân phụ trách",
    "ans": "a"
  },
  {
    "num": 191,
    "q": "Trong quá trình Đảng lấy chủ nghĩa Mác - Lênin làm “cốt”, theo Hồ Chí Minh cần lưu ý những vấn đề gì?",
    "a": "Đảng phải tuyệt đối tuân thủ các chân lý tuyệt đối của chủ nghĩa Mác - Lênin luôn sáng tạo, vận dụng cho phù hợp với hoàn cảnh, từng lúc, từng nơi, không được phép giáo điều",
    "b": "Không ngừng tổng kết kinh nghiệm của Đảng mình, học tập kinh nghiệm của các Đảng cộng sản anh em",
    "c": "Củng cố lập trường chính trị của Đảng",
    "d": "Củng cố mối quan hệ mật thiết giữa Đảng với dân",
    "ans": "b"
  },
  {
    "num": 192,
    "q": "Tác phẩm “Đường cách mệnh” của Hồ Chí Minh được xuất bản khi nào?",
    "a": "1924",
    "b": "1930",
    "c": "1925",
    "d": "1927",
    "ans": "d"
  },
  {
    "num": 193,
    "q": "Chọn đáp án trả lời đúng nhất:",
    "a": "Cả ba đáp án trên đều sai.",
    "b": "Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam duy nhất cho hành động của Đảng ta.",
    "c": "Chủ nghĩa Mác - Lênin là nền tảng tư tưởng, kim chỉ nam duy nhất cho hành động của Đảng ta.",
    "d": "Cùng với chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng và kim chỉ nam cho hành động cách mạng của Đảng ta. Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "d"
  },
  {
    "num": 194,
    "q": "Luận điểm: “Đảng vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của nhân dân” thuộc nội dung tư tưởng Hồ Chí Minh về?",
    "a": "Bản chất của Đảng cộng sản Việt Nam",
    "b": "Về sự ra đời của Đảng cộng sản Việt Nam",
    "c": "Quan niệm về Đảng cộng sản Việt Nam cầm quyền",
    "d": "Vai trò của Đảng cộng sản Việt Nam",
    "ans": "c"
  },
  {
    "num": 195,
    "q": "Nhà nước dân chủ do Hồ Chí Minh sáng lập ở Việt Nam là nhà nước gì?",
    "a": "Nhà nước Việt Nam dân chủ cộng hòa",
    "b": "Nhà nước dân tộc cách mạng",
    "c": "Nhà nước cộng hòa",
    "d": "Nhà nước chuyên chính vô sản",
    "ans": "a"
  },
  {
    "num": 196,
    "q": "Chọn đáp án trả lời đúng nhất theo tư tưởng Hồ Chí Minh. Nhà nước Việt Nam...",
    "a": "Mang tính dân tộc.",
    "b": "Mang bản chất giai cấp công nhân.",
    "c": "Có sự thống nhất bản chất giai cấp công nhân với tính nhân dân và tính dân tộc.",
    "d": "Có tính dân tộc, tính nhân dân sâu sắc.",
    "ans": "c"
  },
  {
    "num": 197,
    "q": "Theo Hồ Chí Minh, Đảng cộng sản Việt Nam ra đời là sự kết hợp của những nhân tố nào?",
    "a": "Phong trào công nhân và phong trào yêu nước",
    "b": "Chủ nghĩa Mác - Lênin và phong trào yêu nước",
    "c": "Chủ nghĩa Mác – Lênin, phong trào công nhân và phong trào yêu nước",
    "d": "Chủ nghĩa Mác - Lênin và phong trào công nhân",
    "ans": "c"
  },
  {
    "num": 198,
    "q": "Chủ tịch Hồ Chí Minh đã từng khẳng định: chỉ có nhà nước thực sự … tổ chức, xây dựng và kiểm soát mới có thể là nhà nước vì dân. Tìm đáp án đúng điền vào chỗ trống?",
    "a": "Do dân",
    "b": "Của dân, do dân",
    "c": "Của dân",
    "d": "Của giai cấp công nhân",
    "ans": "b"
  },
  {
    "num": 199,
    "q": "Theo Hồ Chí Minh, tiêu chuẩn quan trọng nhất của người cán bộ là?",
    "a": "Hăng hái, thành thạo, giỏi chuyên môn, nghiệp vụ",
    "b": "Dám phụ trách, dám quyết đoán, dám chịu trách nhiệm",
    "c": "Phái có mối liên hệ mật thiết với nhân dân",
    "d": "Tuyệt đối trung thành với cách mạng",
    "ans": "d"
  },
  {
    "num": 200,
    "q": "\"Chế độ ta là chế độ dân chủ, tư tưởng phải được tự do. Tự do là thế nào? Đối với mọi vấn đề, mọi người tự do bày tỏ ý kiến của mình, góp phần tìm ra chân lý. Đó là quyền lợi và nghĩa vụ của mọi người. Khi mọi người đã tìm ra chân lý, lúc đó quyền tự do tư tưởng hóa ra quyền tự do phục tùng chân lý\", trong đoạn trích nêu trên Hồ Chí Minh đề cập tới vấn đề gì trong nguyên tắc xây dựng đảng?",
    "a": "Mối quan hệ giữa tập thể lãnh đạo và cá nhân phụ trách Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "Tự do chân lý",
    "c": "Tự do hành động",
    "d": "Mối quan hệ giữa tập trung và dân chủ",
    "ans": "d"
  },
  {
    "num": 201,
    "q": "Thuật ngữ Đảng cầm quyền được Hồ Chí Minh đưa ra trong tác phẩm nào?",
    "a": "Cương lĩnh chính trị đầu tiên",
    "b": "Đường cách mệnh",
    "c": "Di chúc",
    "d": "Tuyên ngôn độc lập",
    "ans": "c"
  },
  {
    "num": 202,
    "q": "Hồ Chí Minh đã mấy lần tham gia soạn thảo Hiến pháp?",
    "a": "3 lần",
    "b": "2 lần",
    "c": "1 lần",
    "d": "4 lần",
    "ans": "b"
  },
  {
    "num": 203,
    "q": "Theo Hồ Chí Minh, kẻ thù số một của giai cấp nông dân là ai?",
    "a": "Giai cấp tư sản cấu kết với thực dân",
    "b": "Giai cấp tư sản",
    "c": "Đế quốc và tay sai",
    "d": "Giai cấp phong kiến",
    "ans": "c"
  },
  {
    "num": 204,
    "q": "Bản chất của Đảng cộng sản Việt Nam được thể hiện ở những nội dung nào?",
    "a": "Trình độ lý luận của Đảng viên",
    "b": "Số lượng Đảng viên là công nhân",
    "c": "Nền tảng tư tưởng, lý luận của Đảng chủ nghĩa Mác - Lênin",
    "d": "Thành phần xuất thân của Đảng viên",
    "ans": "c"
  },
  {
    "num": 205,
    "q": "Hồ Chí Minh khẳng định Đảng cộng sản Việt Nam ra đời là sự kết hợp của 3 nhân tố: chủ nghĩa Mác - Lênin, phong trào công nhân, phong trào yêu nước trong tác phẩm nào?",
    "a": "Ba mươi năm hoạt động của Đảng",
    "b": "Cương lĩnh chính trị đầu tiên",
    "c": "Đường cách mệnh",
    "d": "Tuyên ngôn độc lập",
    "ans": "a"
  },
  {
    "num": 206,
    "q": "Luận điểm sau của Hồ Chí Minh: “Trong giai đoạn này quyền lợi của giai cấp công nhân và nhân dân lao động và của dân tộc là một. Chính vì Đảng Lao động Việt Nam là Đảng của giai cấp công nhân và nhân dân lao động, cho nên nó phải là Đảng của dân tộc Việt Nam” thể hiện nội dung tư tưởng Hồ Chí Minh về?",
    "a": "Vai trò của Đảng cộng sản Việt Nam",
    "b": "Bản chất của Đảng cộng sản Việt Nam",
    "c": "Sự ra đời của Đảng cộng sản Việt Nam",
    "d": "Quan niệm về Đảng cầm quyền",
    "ans": "b"
  },
  {
    "num": 207,
    "q": "Theo Hồ Chí Minh, Đảng cộng sản Việt Nam ra đời là sự kết hợp của mấy nhân tố?",
    "a": "3 nhân tố Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "5 nhân tố",
    "c": "2 nhân tố",
    "d": "4 nhân tố",
    "ans": "a"
  },
  {
    "num": 208,
    "q": "Theo Hồ Chí Minh, trong nội dung công tác xây dựng Đảng về chính trị, quan trọng nhất là vấn đề gì?",
    "a": "Phát triển hệ tư tưởng chính trị",
    "b": "Bảo vệ chính trị",
    "c": "Củng cố lập trường chính trị",
    "d": "Xây dựng đường lối chính trị",
    "ans": "d"
  },
  {
    "num": 209,
    "q": "Luận điểm: “Trong giai đoạn này, quyền lợi của giai cấp công nhân và nhân dân lao động và của dân tộc là một. Chính vì Đảng Lao động Việt Nam là Đảng của giai cấp công nhân và nhân dân lao động, cho nên nó phải là Đảng của dân tộc Việt Nam”. Luận điểm trên được trích từ Văn kiện nào?",
    "a": "Di chúc",
    "b": "Cương lĩnh chính trị đầu tiên",
    "c": "Đạo đức cách mạng.",
    "d": "Báo cáo chính trị tại đại hội Đảng toàn quốc lần thứ II (2/1951)",
    "ans": "d"
  },
  {
    "num": 210,
    "q": "Theo quan điểm của Hồ Chí Minh thì “Dân chủ” được hiểu như thế nào?",
    "a": "Nhân dân được tự do",
    "b": "Quan chủ",
    "c": "Quyền lực nằm trong tay nhà nước",
    "d": "Dân là chủ, dân làm chủ",
    "ans": "d"
  },
  {
    "num": 211,
    "q": "Tìm cụm từ đúng nhất để điền vào chỗ trống (…) trong câu nói sau của Chủ tịch Hồ Chí Minh “Nghe những lời bình luận không đúng, cũng làm thinh, ... Thậm chí nghe những lời phản cách mạng cũng không báo cáo cho cấp trên biết. Ai nói sao, ai làm gì cũng mặc kệ”.",
    "a": "Không phê bình",
    "b": "Không đấu tranh",
    "c": "Không tìm hiểu",
    "d": "Không biện bác",
    "ans": "d"
  },
  {
    "num": 212,
    "q": "Luận điểm sau đây thuộc tác phẩm nào của Hồ Chí Minh: “Ở nước ta chính quyền là của dân, do nhân dân làm chủ”?",
    "a": "Di chúc",
    "b": "Thường thức chính trị",
    "c": "Cương lĩnh chính trị đầu tiên",
    "d": "Tuyên ngôn độc lập",
    "ans": "b"
  },
  {
    "num": 213,
    "q": "Luận điểm: “Đảng cầm quyền, dân là chủ” thể hiện tư tưởng Hồ Chí Minh về vấn đề gì?",
    "a": "Bản chất của Đảng cộng sản Việt Nam",
    "b": "Vai trò của Đảng cộng sản Việt Nam",
    "c": "Lý tưởng của Đảng cầm quyền",
    "d": "Mối quan hệ giữa Đảng với dân",
    "ans": "d"
  },
  {
    "num": 214,
    "q": "\"Việc gì lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh. Chúng ta phải yêu dân, kính dân thì dân mới yêu ta, kính ta\". Những câu trên trích từ bài viết nào của Hồ Chí Minh? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Bài phát biểu tại kỳ họp đầu tiên của Quốc hội khoá I, năm 1946",
    "b": "Thư gửi các đồng chí tỉnh nhà",
    "c": "Thư gửi ủy ban nhân dân các kỳ, tỉnh, huyện và làng.",
    "d": "Thư gửi các đồng chí Bắc Bộ.",
    "ans": "c"
  },
  {
    "num": 215,
    "q": "Theo Hồ Chí Minh, để tiêu diệt bệnh tham ô, lãng phí, trước hết cần tẩy sạch căn bệnh nào?",
    "a": "Quan liêu",
    "b": "Tư túng",
    "c": "Đặc quyền vậy, đây là bệnh gốc sinh ra các bệnh tham ô, lãng phí; muốn trừ sạch bệnh tham ô, lãng phí thì trước hết phải tẩy sạch bệnh quan liêu",
    "d": "Kiêu ngạo",
    "ans": "a"
  },
  {
    "num": 216,
    "q": "Tư tưởng Hồ Chí Minh về xây dựng Nhà nước trong sạch, vững mạnh, hiệu quả, được thể hiện:",
    "a": "(3) Kiên quyết chống ba thứ “giặc nội xâm” là tham ô, lãng phí, quan liêu;",
    "b": "(2) Tăng cường pháp luật đi đôi với đẩy mạnh giáo dục đạo đức;",
    "c": "Cả (2) và (3)",
    "d": "(1) Phẩm chất đạo đức và tinh thần phục vụ nhân dân phục vụ Tổ quốc của cán bộ, đảng viên;",
    "ans": "c"
  },
  {
    "num": 217,
    "q": "Theo Hồ Chí Minh, công tác gốc của Đảng là?",
    "a": "Công tác cán bộ",
    "b": "Công tác phê bình",
    "c": "Công tác chính trị",
    "d": "Công tác lý luận",
    "ans": "a"
  },
  {
    "num": 218,
    "q": "Theo Hồ Chí Minh, “gốc của mọi công việc” là?",
    "a": "Đạo đức Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "Lãnh đạo",
    "c": "Cán bộ",
    "d": "Tài năng",
    "ans": "c"
  },
  {
    "num": 219,
    "q": "\"Trong mấy triệu người cũng có người thế này, thế khác, nhưng thế này hay thế khác đều dòng dõi tổ tiên ta. Vậy nên ta phải khoan hồng đại độ. Ta phải nhận rằng đã là con Lạc, cháu Hồng thì ai cũng có ít hay nhiều lòng ái quốc....\", trong luận điểm nêu trên Hồ Chí Minh muốn đề cập tới vấn đề gì về đoàn kết dân tộc?",
    "a": "Nguyên tắc tổ chức của Mặt trận dân tộc thống nhất",
    "b": "Điều kiện thực hiện đại đoàn kết dân tộc.",
    "c": "Hình thức tổ chức của khối đại đoàn kết dân tộc",
    "d": "Phương pháp đoàn kết dân tộc.",
    "ans": "b"
  },
  {
    "num": 220,
    "q": "Theo Hồ Chí Minh, đâu là nguyên tắc cốt lõi trong tổ chức và hoạt động của Mặt trận dân tộc thống nhất?",
    "a": "Mặt trận dân tộc thống nhất hoạt động theo nguyên tắc hiệp thương dân chủ, đảm bảo đoàn kết ngày càng rộng rãi và bền vững",
    "b": "Mặt trận dân tộc thống nhất phải được xây dựng trên nền tảng khối liên minh công – nông – trí thức, đặt dưới sự lãnh đạo của Đảng",
    "c": "Mặt trận dân tộc thống nhất hoạt động trên cơ sở bảo đảm lợi ích tối cao của dân tộc, quyền lợi cơ bản củ các tầng lớp nhân dân",
    "d": "Mặt trận dân tộc thống nhất là khối đoàn kết chặt chẽ, lâu dài, đoàn kết thật sự, chân thành, thân ái giúp đỡ nhau cùng tiến bộ",
    "ans": "b"
  },
  {
    "num": 221,
    "q": "Trong các luận điểm sau sau đây của Hồ Chí Minh, luận điểm nào nhấn mạnh yếu tố nhân văn trong đại đoàn kết?",
    "a": "Bất kỳ ai mà thành thật tán thành hòa bình, thống nhất, độc lập, dân chủ thì dù những người đó trước đây chống chúng ta, bây giờ chúng ta cũng thật thà đoàn kết với họ.",
    "b": "Đối với những đồng bào lạc lối lầm đường, ta phải lấy tình thân ái mà cảm hóa họ.",
    "c": "Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân.",
    "d": "Ta đoàn kết để đấu tranh cho thống nhất và độc lập cho Tổ quốc; ta còn phải đoàn kết xây dựng nước nhà",
    "ans": "b"
  },
  {
    "num": 222,
    "q": "Theo Hồ Chí Minh, lực lượng nào là nòng cốt trong các lực lượng quốc tế cần đoàn kết?",
    "a": "Phong trào cộng sản và công nhân thế giới",
    "b": "Với các lực lượng tiến bộ, những người yêu chuộng hòa bình, dân chủ, tự do và công lý",
    "c": "Phong trào chống chủ nghĩa đế quốc",
    "d": "Phong trào giải phóng dân tộc",
    "ans": "a"
  },
  {
    "num": 223,
    "q": "\"Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân ta là Công nhân, nông dân và các tầng lớp lao động khác. Đó là cái gốc của đại đoàn kết. Nó cũng như cái nền của nhà, gốc của cây. Nhưng đã có nền vững, gốc tốt, còn phải đoàn kết các tầng lớp nhân dân khác\", trong đoạn trích nêu trên Hồ Chí Minh muốn đề cập đến vấn đề gì về đại đoàn kết dân tộc?",
    "a": "Điều kiện thực hiện đại đoàn kết dân tộc.",
    "b": "Lực lượng đại đoàn kết dân tộc",
    "c": "Hình thức khối đại đoàn kết dân tộc.",
    "d": "Nguyên tắc xây dựng Mặt trận dân tộc thống nhất",
    "ans": "b"
  },
  {
    "num": 224,
    "q": "Tư tưởng Hồ Chí Minh về đoàn kết là đặt cơ sở cho việc hình thành mấy tầng mặt trận đoàn kết?",
    "a": "4 tầng mặt trận",
    "b": "3 tầng mặt trận",
    "c": "5 tầng mặt trận",
    "d": "6 tầng mặt trận Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "a"
  },
  {
    "num": 225,
    "q": "Mặt trận dân tộc thống nhất đặt dưới sự lãnh đạo của Đảng hoạt dộng theo nguyên tắc nào?",
    "a": "Nguyên tắc tập trung dân chủ",
    "b": "Cả 3 phương án trên",
    "c": "Nguyên tắc dân chủ tập trung",
    "d": "Nguyên tắc hiệp thương dân chủ",
    "ans": "d"
  },
  {
    "num": 226,
    "q": "Quan điểm: Mặt trận dân tộc thống nhất phải được xây dựng trên nền tảng khối liên minh công – nông – trí thức, đặt dưới sự lãnh đạo của Đảng, thể hiện tư tưởng Hồ Chí Minh về nội dung gì?",
    "a": "Chức năng của Mặt trận dân tộc thống nhất",
    "b": "Vai trò của mặt trận dân tộc thống nhất",
    "c": "Nguyên tắc xây dựng và hoạt động của Mặt trận dân tộc thống nhất",
    "d": "Phương thức hoạt động của Mặt trận dân tộc thống nhất",
    "ans": "c"
  },
  {
    "num": 227,
    "q": "Chọn cụm từ đúng nhất với tư tưởng Hồ Chí Minh",
    "a": "Đại đoàn kết dân tộc là nghệ thuật",
    "b": "Đại đoàn kết dân tộc là vấn đề chiến lược",
    "c": "Đại đoàn kết dân tộc là một thủ đoạn chính trị",
    "d": "Đại đoàn kết dân tộc là vấn đề sách lược",
    "ans": "b"
  },
  {
    "num": 228,
    "q": "Theo tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc là…",
    "a": "Vấn đề cơ bản có ý nghĩa chiến lược, quyết định thành công của cách mạng",
    "b": "Vấn đề trước mắt",
    "c": "Vấn đề quyết định thành công trước mắt",
    "d": "Vấn đề cơ bản có ý nghĩa sách lược",
    "ans": "a"
  },
  {
    "num": 229,
    "q": "Theo Hồ Chí Minh, trong cách mạng giải phóng dân tộc, lực lượng nào được coi là “bầu bạn cách mệnh” của công nông?",
    "a": "Cả 3 phương án trên",
    "b": "Giai cấp tư sản dân tộc",
    "c": "Bộ phận địa chủ yêu nước",
    "d": "Tầng lớp tiểu tư sản – trí thức",
    "ans": "a"
  },
  {
    "num": 230,
    "q": "Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế để làm gì?",
    "a": "Thực hiện đoàn kết quốc tế nhằm kết hợp sức mạnh dân tộc với sức mạnh thời đại, tạo sức mạnh tổng hợp cho cách mạng Việt Nam",
    "b": "Thực hiện đoàn kết quốc tế để thu hút vốn đầu tư nước ngoài, tiếp thu thành tựu khoa học kỹ thuật",
    "c": "Cả 3 phương án trên",
    "d": "Thực hiện đoàn kết quốc tế để nhận viện trợ từ quốc tế",
    "ans": "a"
  },
  {
    "num": 231,
    "q": "Theo Hồ Chí Minh, đoàn kết dân tộc là đoàn kết những ai?",
    "a": "Đoàn kết liên minh công – nông – trí",
    "b": "Đoàn kết giai cấp công nhân và giai cấp nông dân",
    "c": "Đoàn kết tất công nhân – nông dân và các tầng lớp nhân dân lao động khác",
    "d": "Đoàn kết những người Việt Nam yêu nước",
    "ans": "d"
  },
  {
    "num": 232,
    "q": "Mặt trận Việt Minh ra đời khi nào? Tài liệu t am khảo môn Triết - Anh Huy",
    "a": "1936",
    "b": "1941",
    "c": "1930",
    "d": "1939",
    "ans": "b"
  },
  {
    "num": 233,
    "q": "Để đoàn kết với phong trào cộng sản và công nhân quốc tế, theo Hồ Chí Minh cần giương cao ngọn cờ gì?",
    "a": "Độc lập, tự do và quyền bình đẳng",
    "b": "Hòa bình trong công lý",
    "c": "Hợp tác hữu nghị",
    "d": "Độc lập dân tộc gắn liền với chủ nghĩa xã hội; thực hiện đoàn kết thống nhất trên nền tảng chủ nghĩa Mác - Lênin và chủ nghĩa quốc tế vô sản có lý, có tình",
    "ans": "d"
  },
  {
    "num": 234,
    "q": "Theo Hồ Chí Minh, đâu là nguyên tắc xây dựng và hoạt động của Mặt trận dân tộc thống nhất?",
    "a": "Mặt trận hoạt động theo nguyên tắc hiệp thương dân chủ, bảo đảm đoàn kết rộng rãi, bền vững.",
    "b": "Mặt trận hoạt động theo nguyên tắc phê bình, tự phê bình.",
    "c": "Mặt trận hoạt động theo nguyên tắc dân chủ tập trung.",
    "d": "Mặt trận phải được xây dựng trên nền tảng đoàn kết toàn dân.",
    "ans": "a"
  },
  {
    "num": 235,
    "q": "Theo Hồ Chí Minh, đại đoàn kết dân tộc có vai trò như thế nào trong sự nghiệp cách mạng?",
    "a": "Là vấn đề có ý nghĩa chiến lược, quyết định thành công của cách mạng",
    "b": "Là chính sách chính trị lâu dài, tạo nên thành công của cách mạng",
    "c": "Là vấn đề có ý nghĩa sách lược, quyết định thành công của cách mạng",
    "d": "Là chính sách chính trị nhất thời, góp phần tạo nên thành công của cách mạng",
    "ans": "a"
  },
  {
    "num": 236,
    "q": "Theo Hồ Chí Minh, hiệp thương dân chủ là nguyên tắc hoạt động của tổ chức nào?",
    "a": "Mặt trận dân tộc thống nhất",
    "b": "Đảng cộng sản",
    "c": "Tổng liên đoàn lao động",
    "d": "Nhà nước",
    "ans": "a"
  },
  {
    "num": 237,
    "q": "Theo Hồ Chí Minh, hiệp thương dân chủ là nguyên tắc hoạt dộng của tổ chức nào?",
    "a": "Đảng cộng sản",
    "b": "Nhà nước",
    "c": "Tổng liên đoàn lao động",
    "d": "Mặt trận dân tộc thống nhất",
    "ans": "d"
  },
  {
    "num": 238,
    "q": "Theo Hồ Chí Minh, điều kiện để thực hiện đại đoàn kết dân tộc là?",
    "a": "Phải kế thừa truyền thống yêu nước – nhân nghĩa – đoàn kết của dân tộc",
    "b": "Cả 3 phương án trên",
    "c": "Phải có niềm tin vào nhân dân",
    "d": "Phải có lòng khoan dung, độ lượng với con người",
    "ans": "b"
  },
  {
    "num": 239,
    "q": "Trong kháng chiến chống đế quốc, thực dân, tư tưởng Hồ Chí Minh định hướng cho việc hình thành bốn tầng mặt trận. Mặt trận nào sau đây nằm trong bốn tầng mặt trận đó?",
    "a": "Mặt trận đoàn kết dân tộc",
    "b": "Mặt trận giải phóng miền Nam Việt Nam",
    "c": "Mặt trận Việt Minh",
    "d": "Măt trận dân chủ Đông Dương Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "a"
  },
  {
    "num": 240,
    "q": "Trong đoàn kết quốc tế, theo Hồ Chí Minh cần phải đoàn kết với những lực lượng nào?",
    "a": "Cả 3 phương án trên",
    "b": "Phong trào giải phóng dân tộc",
    "c": "Phong trào cộng sản và công nhân thế giới",
    "d": "Với các lực lượng tiến bộ, những người yêu chuộng hòa bình, dân chủ, tự do và công lý",
    "ans": "a"
  },
  {
    "num": 241,
    "q": "Hội phản đế đồng minh ra đời khi nào?",
    "a": "1936",
    "b": "1930",
    "c": "1939",
    "d": "1941",
    "ans": "b"
  },
  {
    "num": 242,
    "q": "Để đoàn kết với các dân tộc trên thế giới, theo Hồ Chí Minh cần giương cao ngọn cờ gì?",
    "a": "Hòa bình trong công lý",
    "b": "Hợp tác hữu nghị",
    "c": "Độc lập, tự do và quyền bình đẳng Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Độc lập dân tộc gắn liền với chủ nghĩa xã hội; thực hiện đoàn kết thống nhất trên nền tảng chủ nghĩa Mác - Lênin và chủ nghĩa quốc tế vô sản có lý, có tình",
    "ans": "c"
  },
  {
    "num": 243,
    "q": "Theo tư tưởng Hồ Chí Minh: “Văn hóa … cho quốc dân đi”",
    "a": "Soi đường",
    "b": "Chỉ đường",
    "c": "Dẫn đường",
    "d": "Mở lối",
    "ans": "a"
  },
  {
    "num": 244,
    "q": "Luận điểm của Hồ Chí Minh: “con người vừa là mục tiêu, động lực của cách mạng”, luận điểm đó thể hiện nội dung tư tưởng nào sau đây?",
    "a": "Con người Việt Nam có lòng nồng nàn yêu nước.",
    "b": "Không có gì quý hơn độc lập tự do.",
    "c": "Con người là vốn quý nhất, nhân tố quyết định thắng lợi của cách mạng.",
    "d": "Con người vừa là sản phẩm, vừa là chủ thể của xã hội.",
    "ans": "c"
  },
  {
    "num": 245,
    "q": "Đặc trưng cốt lõi nhất của tư tưởng đạo đức Hồ Chí Minh là gì?",
    "a": "Chủ nghĩa nhân đạo chiến đấu",
    "b": "Sự quan tâm đến con người",
    "c": "Cả 3 phương án trên đều đúng",
    "d": "Lòng thương người",
    "ans": "c"
  },
  {
    "num": 246,
    "q": "Chọn phương án đúng nhất: Con người theo quan niệm của Hồ Chí Minh là…",
    "a": "Vốn quý của cách mạng",
    "b": "Động lực của cách mạng",
    "c": "Vốn quý nhất, nhân tố quan trọng của cách mạng",
    "d": "Vốn quý nhất, nhân tố quyết định đến thành công của cách mạng",
    "ans": "d"
  },
  {
    "num": 247,
    "q": "Nhìn một cách tổng quát thì vai trò của văn hóa theo Hồ Chí Minh được hiểu theo nghĩa nào?",
    "a": "Bồi dưỡng những phẩm chất tốt đẹp",
    "b": "Văn hóa soi đường cho quốc dân đi.",
    "c": "Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp.",
    "d": "Nâng cao dân trí.",
    "ans": "b"
  },
  {
    "num": 248,
    "q": "Chọn cụm từ đúng nhất để điền vào chỗ trống: Theo tư tưởng Hồ Chí Minh, “người cách mạng phải có … thì mới gánh được nặng và đi được xa”",
    "a": "Đạo đức cách mạng",
    "b": "Trí tuệ",
    "c": "Lập trường, tư tưởng cách mạng",
    "d": "Phương pháp cách mạng",
    "ans": "a"
  },
  {
    "num": 249,
    "q": "Theo Hồ Chí Minh, Trung thành với sự nghiệp dựng nước, giữ nước, trung thành với con đường đi lên của đất nước; suốt đời phấn đấu cho Đảng, cách mạng, thuộc phẩm chất đạo đức nào?",
    "a": "Trung với nước, hiếu với dân",
    "b": "Yêu thương con người",
    "c": "Cần, kiệm, liêm, chính, chí công vô tư",
    "d": "Có tinh thần quốc tế trong sáng",
    "ans": "a"
  },
  {
    "num": 250,
    "q": "Theo Hồ Chí Minh, “kiệm” có nghĩa là? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Không bừa bãi",
    "b": "Cả 3 phương án trên",
    "c": "Không xa xỉ",
    "d": "Không hoang phí",
    "ans": "b"
  },
  {
    "num": 251,
    "q": "Luận điểm “Văn hóa soi đường cho quốc dân đi” của Hồ Chí Minh là muốn nói đến vấn đề chung nào của văn hóa?",
    "a": "Vị trí của văn hóa",
    "b": "Chức năng của văn hóa",
    "c": "Tính chất của văn hóa",
    "d": "Vai trò của văn hóa",
    "ans": "d"
  },
  {
    "num": 252,
    "q": "Chủ tịch Hồ Chí Minh định nghĩa về “tiết kiệm” như thế nào?",
    "a": "Nói theo lối khoa học, tiết kiệm là tích cực;",
    "b": "Tiết kiệm không phải là bủn xỉn;",
    "c": "Tiết kiệm là không xa xỉ, không hoang phí, không bừa bãi;",
    "d": "Cả 3 phương án trên đều đúng.",
    "ans": "d"
  },
  {
    "num": 253,
    "q": "Theo Chủ tịch Hồ Chí Minh: Chủ nghĩa cá nhân đẻ ra trăm thứ bệnh nguy hiểm:",
    "a": "Quan liêu, mệnh lệnh, bè phái, chủ quan, tham ô, lãng phí.",
    "b": "Quan liêu, mệnh lệnh, bè phái, chủ quan.",
    "c": "Quan liêu, mệnh lệnh, bè phái.",
    "d": "Quan liêu, mệnh lệnh.",
    "ans": "a"
  },
  {
    "num": 254,
    "q": "Tác phẩm Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân của Chủ tịch Hồ Chí Minh ra đời vào thời gian nào?",
    "a": "01/1969",
    "b": "02/1969",
    "c": "3/1969",
    "d": "4/1969.",
    "ans": "b"
  },
  {
    "num": 255,
    "q": "Vấn đề nào không thuộc Năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc theo tư tưởng Hồ Chí Minh?",
    "a": "Xây dựng chính trị: dân quyền",
    "b": "Xây dựng xã hội: xã hội chủ nghĩa",
    "c": "Xây dựng luân lý: biết hy sinh mình, làm lợi cho quần chúng",
    "d": "Xây dựng tâm lý: tinh thần độc lập tự cường",
    "ans": "b"
  },
  {
    "num": 256,
    "q": "Những căn bệnh nào trong bộ máy nhà nước mà Hồ Chí Minh gọi là \"giặc nội xâm\"?",
    "a": "Trái phép, chia rẽ, kiêu ngạo",
    "b": "Cậy thế, hủ hoá, tư túng",
    "c": "Tham ô, lãng phí, quan liêu",
    "d": "Đặc quyền, đặc lợi Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "c"
  },
  {
    "num": 257,
    "q": "Luận điểm của Hồ Chí Minh: “Cũng như sông có nguồn thì mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân” được trích trong tác phẩm nào?",
    "a": "Đường cách mệnh",
    "b": "Sửa đổi lối làm việc",
    "c": "Di chúc",
    "d": "Đạo đức cách mạng",
    "ans": "b"
  },
  {
    "num": 258,
    "q": "Tác phẩm Đạo đức cách mạng của Chủ tịch Hồ Chí Minh ra đời vào thời gian nào?",
    "a": "9/1958",
    "b": "11/1958",
    "c": "12/1958",
    "d": "10/1958",
    "ans": "c"
  },
  {
    "num": 259,
    "q": "Trong Năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc, Hồ Chí Minh chủ trương xây dựng vấn đề tâm lý với nội dung gì?",
    "a": "Tinh thần độc lập, tự cường",
    "b": "Dân chủ",
    "c": "Dân quyền",
    "d": "Biết hy sinh mình, làm lợi cho quần chúng",
    "ans": "a"
  },
  {
    "num": 260,
    "q": "Định nghĩa văn hóa được Hồ Chí Minh đưa ra khi nào?",
    "a": "8/1943",
    "b": "5/1941",
    "c": "9/1942",
    "d": "12/1944",
    "ans": "a"
  },
  {
    "num": 261,
    "q": "“Hiểu chủ nghĩa Mác-Lênin là phải sống với nhau có tình có nghĩa. Nếu thuộc bao nhiêu sách mà sống không có tình có nghĩa thì sao gọi là hiểu chủ nghĩa Mác Lênin được”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Ý kiến về việc làm và xuất bản loại sách “Người tốt việc tốt”, 1968",
    "b": "Sự nghiệp vĩ đại của Lênin, 1952",
    "c": "Sửa đổi lối làm việc, 1947",
    "d": "Bài nói tại Đại hội anh hùng, chiến sỹ thi đua chống Mỹ, cứu nước, 1966",
    "ans": "a"
  },
  {
    "num": 262,
    "q": "Trong Năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc, Hồ Chí Minh chủ trương xây dựng vấn đề chính trị với nội dung gì?",
    "a": "Dân chủ",
    "b": "Dân quyền",
    "c": "Biết hy sinh mình, làm lợi cho quần chúng",
    "d": "Tinh thần độc lập, tự cường",
    "ans": "b"
  },
  {
    "num": 263,
    "q": "Hồ Chí Minh đã đề cập đến đạo đức trong những quan hệ nào của con người?",
    "a": "Đối với việc Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "Cả 3 phương án trên đều đúng",
    "c": "Đối với người",
    "d": "Đối với mình",
    "ans": "b"
  },
  {
    "num": 264,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2015 là gì?",
    "a": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về trung thực, trách nhiệm; gắn bó với nhân dân; đoàn kết, xây dựng Đảng trong sạch, vững mạnh.",
    "b": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng,chống suy thoái tư tưởng, chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ;.",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "d": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên;",
    "ans": "a"
  },
  {
    "num": 265,
    "q": "Trong quá trình xây dựng nền văn hóa giáo dục ở Việt Nam, Hồ Chí Minh đã đưa ra một hệ thống quan điểm định hướng cho nền giáo dục phát triển đúng hướng. Quan điểm nào dưới đây không phải của Hồ Chí Minh?",
    "a": "Mục tiêu văn hóa giáo dục.",
    "b": "Nội dung giáo dục.",
    "c": "Kết quả giáo dục.",
    "d": "Phương châm, phương pháp giáo dục. triển của xã hội. Với sứ mệnh “Trồng người”, văn hóa giáo dục đào tạo con người mới, cán bộ mới, nguồn nhân lực chất lượng cao cho sự nghiệp cách mạng - Mục tiêu của văn hóa giáo dục là để thực hiện cả ba chức năng của văn hóa thông qua việc dạy và học. Dạy và học là nhằm mở mang dân trí, nâng cao kiến thức; bồi dưỡng những tư tưởng đúng- đắn và tình cảm cao đẹp, những phẩm chất trong sáng và phong cách lành mạnh cho con người, đào tạo con người có ích cho xã hội. Văn hóa giáo dục phải đào tạo được những lớp người có đức. có tài kế tục sự nghiệp cách mạng, làm cho nước ta \"sánh vai cùng các cường quốc năm châu\". Học không phải để lấy bằng cấp mà phải thực học \"học để làm việc, làm người, làm cán bộ” - Nội dung giáo dục phải phù hợp với thực tiễn Việt Nam. Giáo dục phải toàn diện, bao gồm cả văn hóa, chính trị, khoa hoc – kỹ thuật; chuyên môn nghề nghiệp, lao động. Các nội dung này có quan hệ rất chặt chẽ với nhau. Người chỉ rõ, nếu không có trình độ văn hóa thì không tiếp thu được khoa học - kỹ thuật; không học khoa học – kỹ thuật thì không theo kịp được nhu cầu kinh tế nước nhà; song phải chú ý học chính trị, vì nếu chỉ học văn hóa mà không học chính trị thì như người nhắm mắt mà đi. Học chính trị là học chủ nghĩa Mác - Lênin, đường lối, chính sách của Đảng và Nhà nước. Học để nắm vững quan điểm, lập trường có tính nguyên tắc của Đảng, thế giới quan, phương pháp luận của chủ nghĩa Mác - Lênin. Phương pháp học phải sáng tạo, không giáo điều. Xã hội ngày càng phát triển, nhân dân ngày càng tiến bộ nên Người cho rằng phải tiến hành cải cách giáo dục, nhằm xây dựng chương trình, nội dung, phương pháp dạy và học thật khoa học, hợp lý, đáp ứng đòi hỏi của cách mạng. - Phương châm, phương pháp giáo dục: Phương châm học đi đôi với hành, lý luận phải liên hệ với thực tế, học tập phải kết hợp với lao động; phải kết hợp thật chặt chẽ ba khâu: gia đình, nhà trường và xã hội; thực hiện dân chủ bình đẳng trong giáo dục. Học ở mọi nơi, mọi lúc; học mọi người, học suốt đời. Coi trọng việc tự học, tự đào tạo và đào tạo lại. Phương pháp giáo dục phải phù hợp với mục tiêu giáo dục. Cách dạy phải phù hợp với trình độ người học, phù hợp với lứa tuổi dạy từ dễ đến khó; phải kết hợp học tập với vui chơi, giải trí lành mạnh phải dùng biện pháp nêu gương gắn liền với phong trào thi đua... - Về đội ngũ giáo viên: phải quan tâm xây dựng, bồi dưỡng được đội ngũ giáo viên có đạo đức cách mạng, yêu nghề, yên tâm công tác, đoàn kết và hợp tác với đồng nghiệp, giỏi về chuyên môn, thuần thục về phương pháp. Mỗi giáo viên phải là một tấm gương sáng về đạo đức, về học tập, \"Học không biết chán, dạy không biết mỏi\".",
    "ans": "c"
  },
  {
    "num": 266,
    "q": "Luận điểm “nói đi đôi với làm, phải nêu gương về đạo đức” đề cập đến nội dung gì trong tư tưởng Hồ Chí Minh?3",
    "a": "Các nguyên tắc rèn luyện đạo đức",
    "b": "Các chuẩn mực đạo đức mới",
    "c": "Chức năng của đạo đức",
    "d": "Vai trò của đạo đức cách mạng Tài liệu tham khảo mô Triết - Anh Huy",
    "ans": "a"
  },
  {
    "num": 267,
    "q": "“… Đạo đức cách mạng không phải trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hằng ngày mà phát triển và củng cố. Củng như ngọc càng mài càng sáng, vàng càng luyện càng trong”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Sửa đổi lối làm việc (10/1947)",
    "b": "Cần tẩy sạch bệnh quan liêu, mệnh lệnh (9/1951)",
    "c": "Cần, kiệm, liêm, chính (6/1949)",
    "d": "Đạo đức cách mạng (12/1958)",
    "ans": "d"
  },
  {
    "num": 268,
    "q": "Vận dụng tư tưởng Hồ Chí Minh về văn hoá hiện nay cần:",
    "a": "Giữ gìn và phát huy bản sắc văn hoá dân tộc",
    "b": "Chống văn hoá phản tiến bộ",
    "c": "Cả 3 phương án trên",
    "d": "Tiếp thu tinh hoa văn hoá nhân loại",
    "ans": "c"
  },
  {
    "num": 269,
    "q": "Chủ tịch Hồ Chí Minh đã nói như thế nào về hình phạt đối với tệ tham ô, lãng phí tiêu cực…?",
    "a": "Cả (1) và (3).",
    "b": "(3) Pháp luật phải thẳng tay trừng trị những kẻ bất liêm, bất kỳ kẻ ấy ở địa vị nào, làm nghề nghiệp gì.",
    "c": "(1) Cần có những pháp luật để trừng trị tệ tham ô, lãng phí, và phải chấp hành những pháp luật ấy một cách nghiêm chỉnh…",
    "d": "(2) Không xử bắn bọn ăn hối lộ mà xử nhẹ như thế, là một việc xấu hổ cho những người cộng sản, những người cách mạng.",
    "ans": "a"
  },
  {
    "num": 270,
    "q": "“… Chúng ta không sợ sai lầm, chỉ sợ phạm sai lầm mà không quyết tâm sửa chữa. Muốn sửa chữa cho tốt thì phải sẵn sàng nghe quần chúng phê bình và thật thà tự phê bình. Không chịu nghe phê bình và không tự phê bình thì nhất định lạc hậu, thoái bộ. Lạc hậu và thoái bộ thì sẽ bị quần chúng bỏ rơi. Đó là kết quả tất nhiên của chủ nghĩa cá nhân”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Cần tẩy sạch bệnh quan liêu, mệnh lệnh (9/1951)",
    "b": "Thực hành tiết kiệm, chống tham ô, lãng phí, chống bệnh quan liêu (5/1952)",
    "c": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969)",
    "d": "Đạo đức cách mạng (12/1958)",
    "ans": "d"
  },
  {
    "num": 271,
    "q": "Theo Hồ Chí Minh, để văn hóa phát triển tự do thì phải thực hiện cách mạng gì trước?",
    "a": "Cách mạng chính trị",
    "b": "Cách mạng văn hóa",
    "c": "Cách mạng kinh tế",
    "d": "Cách mạng ruộng đất",
    "ans": "a"
  },
  {
    "num": 272,
    "q": "Theo tư tưởng Hồ Chí Minh, yếu tố nào là gốc của người cách mạng",
    "a": "Đạo đức",
    "b": "Tài năng",
    "c": "Kỹ năng",
    "d": "Văn hóa",
    "ans": "a"
  },
  {
    "num": 273,
    "q": "Theo Hồ Chí Minh, giải phóng con người là giải phóng như thế nào?",
    "a": "Giải phóng con người khỏi áp bức, bất công",
    "b": "Giải phóng con người về kinh tế, văn hóa Tài liệu tha khảo môn Triết - Anh Huy",
    "c": "Giải phóng con người về kinh tế, chính trị",
    "d": "Giải phóng con người về chính trị, văn hóa",
    "ans": "a"
  },
  {
    "num": 274,
    "q": "Tấm gương hết lòng, hết sức phụng sự Tổ quốc, phục vụ nhân dân của Chủ tịch Hồ Chí Minh là gì?",
    "a": "“Tổ quốc trên hết”; “Tôi hiến cả đời tôi cho dân tộc tôi”",
    "b": "Cả 3 phương án trên đều đúng",
    "c": "Tất cả vì độc lập, tự do của Tổ quốc; “Không có gì quý hơn độc lập, tự do!”;",
    "d": "Tất cả vì lợi ích của Tổ quốc và nhân dân, không dành riêng cho cá nhân và gia đình;",
    "ans": "b"
  },
  {
    "num": 275,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2010 là gì?",
    "a": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh suốt đời phấn đấu cần, kiệm, liêm, chính, chí công vô tư, làm người công bộc tận tụy, trung thành của nhân dân, đời tư trong sáng, cuộc sống riêng giản dị;",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về phong cách quần chúng, dân chủ, nêu gương; nêu cao trách nhiệm gương mẫu của cán bộ, đảng viên, nhất là cán bộ lãnh đạo chủ chốt các cấp;",
    "c": "Tư tưởng, tấm gương đạo đức Hồ Chí Minh về xây dựng Đảng ta thật sự trong sạch, vững mạnh, \"là đạo đức, là văn minh \".",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm’’;",
    "ans": "c"
  },
  {
    "num": 276,
    "q": "Luận điểm “Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người” Hồ Chí Minh mượn ý của ai?",
    "a": "Hàn Phi Tử",
    "b": "Mạnh Tử.",
    "c": "Quản Trọng.",
    "d": "Khổng Tử.",
    "ans": "c"
  },
  {
    "num": 277,
    "q": "Phẩm chất nào dưới đây là phẩm chất trung tâm của đạo đức cách mạng trong tư tưởng đạo đức của Hồ Chí Minh?",
    "a": "Yêu thương con người, sống có nghĩa, có tình;",
    "b": "Tinh thần quốc tế trong sáng.",
    "c": "Cần, kiệm, liêm, chính, chí công, vô tư;",
    "d": "Trung với nước, hiếu với dân;",
    "ans": "d"
  },
  {
    "num": 278,
    "q": "Theo Hồ Chí Minh, nhân tố tạo nên sức hấp dẫn của chủ nghĩa xã hội là?",
    "a": "Sự giải phóng lực lượng sản xuất.",
    "b": "Đạo đức cách mạng.",
    "c": "Mức sống vật chất dồi dào.",
    "d": "Sự tự do về tư tưởng.",
    "ans": "b"
  },
  {
    "num": 279,
    "q": "Luận điểm: “Văn hóa không thể đứng ngoài mà phải ở trong kinh tế và chính trị, phải phục vụ nhiệm vụ chính trị và thúc đẩy sự phát triển của kinh tế” thể hiện tư tưởng Hồ Chí Minh về vấn đề gì?",
    "a": "Tính chất của văn hóa",
    "b": "Vị trí, vai trò của văn hóa",
    "c": "Cả 3 phương án trên",
    "d": "Chức năng của văn hóa",
    "ans": "b"
  },
  {
    "num": 280,
    "q": "Chuyên đề học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh năm 2018 là gì? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng,chống suy thoái tư tưởng, chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ.",
    "b": "Những nội dung cơ bản của tư tưởng, đạo đức, phong cách Hồ Chí Minh;",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "d": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên;",
    "ans": "d"
  },
  {
    "num": 281,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2009 là gì?",
    "a": "Chấn chỉnh kỷ luật, kỷ cương, nâng cao ý thức trách nhiệm, phát triển kinh tế bền vững.",
    "b": "Học tập tấm gương Chủ tịch Hồ Chí Minh về thực hành tiết kiệm, chống tham nhũng, lãng phí, quan liêu;",
    "c": "Nâng cao ý thức trách nhiệm, hết lòng, hết sức phụng sự Tổ quốc, phục vụ nhân dân;",
    "d": "Nâng cao nhận thức về đạo đức và tấm gương đạo đức Hồ Chí Minh, tổ chức động viên toàn Đảng, toàn xã hội tích cực tham gia Cuộc vận động;",
    "ans": "c"
  },
  {
    "num": 282,
    "q": "Chọn đáp án trả lời đúng nhất: Việc tu dưỡng đạo đức ở mỗi người phải được thực hiện trong:",
    "a": "Trong đời tư và đời công.",
    "b": "Mọi hoạt động thực tiễn",
    "c": "Mọi mối quan hệ xã hội",
    "d": "Mọi hoạt động thực tiễn, mọi mối quan hệ xã hội",
    "ans": "d"
  },
  {
    "num": 283,
    "q": "“Đứng về phía cán bộ mà nói, ăn cắp của công làm của tư. Đục khoét của nhân dân. Ăn bớt của bộ đội. Tiêu ít mà khai nhiều, lợi dụng của chung của Chính phủ để làm quỹ riêng cho địa phương mình, đơn vị mình cũng là tham ô. Đứng về phía nhân dân mà nói, tham ô là: “ăn cắp của công, khai gian, lậu thuế”, “tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ”. Chống loại kẻ địch này khó khăn, phức tạp hơn ngay cả so với đánh giặc ngoại xâm”. Đoạn trích trên trong bài nói chuyện nào của Chủ tịch Hồ Chí Minh?",
    "a": "Bài nói chuyện về thực hành tiết kiệm, chống tham ô, lãng phí, chống bệnh quan liêu",
    "b": "Bài nói chuyện tại lớp đào tạo hướng dẫn viên các trại hè cấp I",
    "c": "Bài nói tại lớp chỉnh Đảng Trung ương khoá 2",
    "d": "Bài nói chuyện với cán bộ tỉnh Thanh Hoá.",
    "ans": "a"
  },
  {
    "num": 284,
    "q": "Theo tư tưởng Hồ Chí Minh, mục tiêu của văn hoá giáo dục là:",
    "a": "Thực hiện cả ba chức năng của văn hoá bằng giáo dục",
    "b": "Nâng cao dân trí",
    "c": "Bồi dưỡng những phẩm chất tốt đẹp, những phong cách lành mạnh",
    "d": "Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp",
    "ans": "a"
  },
  {
    "num": 285,
    "q": "“Mỗi cán bộ, đảng viên phải đặt lợi ích của cách mạng, của Đảng, của nhân dân lên trên hết, trước hết. Phải kiên quyết quét sạch chủ nghĩa cá nhân, nâng cao đạo đức cách mạng, bồi dưỡng tư tưởng tập thể, tinh thần đoàn kết, tính tổ chức và kỷ luật”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969)",
    "b": "Sửa đổi lối làm việc (10/1947)",
    "c": "Bài nói ở lớp huấn luyện đảng viên mới (5/1966)",
    "d": "Diễn văn khai mạc Đại hội Đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam (9/1960)",
    "ans": "a"
  },
  {
    "num": 286,
    "q": "Theo Hồ Chí Minh phẩm chất đạo đức nào gắn liền với hoạt động hàng ngày của mỗi con người? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Có tinh thần quốc tế trong sáng",
    "b": "Cần, kiệm, liêm, chính, chí công vô tư.",
    "c": "Yêu thương con người.",
    "d": "Trung với nước, hiếu với dân.",
    "ans": "b"
  },
  {
    "num": 287,
    "q": "Nguyên tắc xây dựng đạo đức mới theo tư tưởng Hồ Chí Minh là gì?",
    "a": "Cả 3 phương án trên đều đúng",
    "b": "Xây đi đôi với chống;",
    "c": "Nói đi đôi với làm, phải nêu gương về đạo đức;",
    "d": "Phải tu dưỡng đạo đức suốt đời, kiên trì, bền bỉ hằng ngày;",
    "ans": "a"
  },
  {
    "num": 288,
    "q": "Nội dung nào sau đây không thuộc quan điểm Hồ Chí Minh về văn hóa văn nghệ?",
    "a": "Phải có những tác phẩm văn nghệ xứng đáng với thời đại mới.",
    "b": "Ngòi bút và các tác phẩm là vũ khí.",
    "c": "Văn nghệ phải phục vụ cho đại chúng.",
    "d": "Văn hóa văn nghệ là một mặt trận.",
    "ans": "c"
  },
  {
    "num": 289,
    "q": "Trong Năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc, Hồ Chí Minh chủ trương xây dựng vấn đề xã hội với nội dung gì?",
    "a": "Mọi sự nghiệp phúc lợi của nhân dân",
    "b": "Tinh thần độc lập, tự cường",
    "c": "Biết hy sinh mình, làm lợi cho quần chúng",
    "d": "Dân chủ",
    "ans": "a"
  },
  {
    "num": 290,
    "q": "Theo Hồ Chí Minh, vai trò của đạo đức được xác định là:",
    "a": "Vũ khí của người cách mạng",
    "b": "Chỗ dựa của người cách mạng",
    "c": "Hành trang của người cách mạng",
    "d": "Nền tảng của người cách mạng",
    "ans": "d"
  },
  {
    "num": 291,
    "q": "Tác phẩm đầu tiên của Hồ Chí Minh đề cập đến đạo đức cách mạng là tác phẩm nào?",
    "a": "Thường thức chính trị (1953)",
    "b": "Đường cách mệnh (1927)",
    "c": "Bản án chế độ thực dân Pháp (1925)",
    "d": "Đạo đức cách mạng (1958)",
    "ans": "b"
  },
  {
    "num": 292,
    "q": "“…Vì ham danh vọng và địa vị, cho nên khi phụ trách một bộ phận nào, thì lôi người này, kéo người khác, ưa ai thì kéo vào, không ưa thì tìm cách tẩy ra. Thế là chỉ biết có mình, chỉ biết có một bộ phận mà quên cả Đảng. Đó là là một thứ bệnh hẹp hòi, trái hẳn với nguyên tắc tập trung và thống nhất của Đảng”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Diễn văn khai mạc Đại hội Đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam (9/1960)",
    "b": "Sửa đổi lối làm việc (10/1947) Tài liệu t am khảo môn Triết - Anh Huy",
    "c": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969)",
    "d": "Bài nói ở lớp huấn luyện đảng viên mới (5/1966)",
    "ans": "b"
  },
  {
    "num": 293,
    "q": "“Một dân tộc biết cần, kiệm, biết liêm, là một dân tộc giàu về vật chất, mạnh về tinh thần, là một dân tộc văn minh tiến bộ. Dân tộc ta đang kháng chiến và kiến quốc, đang xây dựng một Đời sống mới trong nước Việt Nam mới. Chẳng những chúng ta phải cần, kiệm, chúng ta còn phải thực hành chữ Liêm”. Đoạn trích trên nằm trong tác phẩm nào của Chủ tịch Hồ Chí Minh?",
    "a": "Lời phát biểu trong phiên họp Hội đồng Chính phủ, 11-1950.",
    "b": "Cần Kiệm Liêm Chính, 6-1949",
    "c": "Chớ kiêu ngạo, phải khiêm tốn, ký tên C.B, Báo Nhân Dân, số 194, từ 13 đến 15-6-1954.",
    "d": "Bài nói chuyện với bộ đội, công an và cán bộ trước khi vào tiếp quản Thủ đô, 5-9-1954.",
    "ans": "b"
  },
  {
    "num": 294,
    "q": "Định nghĩa văn hóa được Hồ Chí Minh đưa ra trong tác phẩm nào?",
    "a": "Đời sống mới",
    "b": "Bản án chế độ thực dân Pháp",
    "c": "Đường cách mệnh",
    "d": "Nhật ký trong tù",
    "ans": "d"
  },
  {
    "num": 295,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2008 là gì?",
    "a": "Chấn chỉnh kỷ luật, kỷ cương, nâng cao ý thức trách nhiệm, phát triển kinh tế bền vững.",
    "b": "Nâng cao ý thức trách nhiệm, hết lòng, hết sức phụng sự Tổ quốc, phục vụ nhân dân;",
    "c": "Nâng cao nhận thức về đạo đức và tấm gương đạo đức Hồ Chí Minh, tổ chức động viên toàn Đảng, toàn xã hội tích cực tham gia Cuộc vận động;",
    "d": "Học tập tấm gương Chủ tịch Hồ Chí Minh về thực hành tiết kiệm, chống tham nhũng, lãng phí, quan liêu;",
    "ans": "d"
  },
  {
    "num": 296,
    "q": "Luận điểm của Đảng cộng sản Việt Nam: “Con người là trung tâm của chiến lược phát triển, đồng thời là chủ thể phát triển. Tôn trọng và bảo vệ quyền con người, gắn quyền con người với quyền và lợi ích của dân tộc, đất nước và quyền làm chủ của nhân dân” được đề cập tới trong văn kiện nào?",
    "a": "Nghị quyết Hội nghị lần thứ 5 Ban chấp hành trung ương khóa VIII",
    "b": "Văn kiện Đại hội đại biểu toàn quốc lần thứ XI",
    "c": "Văn kiện Đại hội đại biểu toàn quốc lần thứ XII",
    "d": "Cương lĩnh xây dưng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (bổ sung, phát triển năm 2011.",
    "ans": "d"
  },
  {
    "num": 297,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2007 là gì?",
    "a": "Học tập tấm gương Chủ tịch Hồ Chí Minh về thực hành tiết kiệm, chống tham nhũng, lãng phí, quan liêu;",
    "b": "Nâng cao ý thức trách nhiệm, hết lòng, hết sức phụng sự Tổ quốc, phục vụ nhân dân;",
    "c": "Đẩy mạnh học tập và làm theo tấm gương đạo đức Hồ Chí Minh trong giai đoạn hiện nay;",
    "d": "Chấn chỉnh kỷ luật, kỷ cương, nâng cao ý thức trách nhiệm, phát triển kinh tế bền vững.",
    "ans": "c"
  },
  {
    "num": 298,
    "q": "Chuyên đề học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh năm 2016 là gì?",
    "a": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên",
    "b": "Những nội dung cơ bản của tư tưởng, đạo đức, phong cách Hồ Chí Minh",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "d": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng,chống suy thoái tư tưởng, chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ.",
    "ans": "c"
  },
  {
    "num": 299,
    "q": "Nội dung “bồi dưỡng những phẩm chất, phong cách và lối sống tốt đẹp, lành mạnh, hướng con người đến chân, thiện mỹ để hoàn thiện bản thân” thuộc vấn đề gì của văn hóa?",
    "a": "Chức năng của văn hóa Tài liệu tham khảo mô Triết - Anh Huy",
    "b": "Vai trò của văn hóa",
    "c": "Vị trí của văn hóa",
    "d": "Tính chất của văn hóa",
    "ans": "b"
  },
  {
    "num": 300,
    "q": "Khi nói về đạo đức cách mạng, Chủ tịch Hồ Chí Minh đã nói tóm tắt thành ý nào dưới đây?",
    "a": "Tóm lại, phải đi đúng đường lối quần chúng. Thế là có tinh thần trách nhiệm đối với Đảng, đối với Chính phủ, đối với nhân dân;",
    "b": "Nhận rõ phải, trái. Giữ vững lập trường. Tận trung với nước. Tận hiếu với dân;",
    "c": "Cần, kiệm, liêm, chính, chí công vô tư;",
    "d": "Làm cho dân có ăn. Làm cho dân có mặc. Làm cho dân có chỗ ở. Làm cho dân có học hành.",
    "ans": "b"
  },
  {
    "num": 301,
    "q": "Luận điểm: “Nói chung thì các dân tộc phương Đông đều giàu tình cảm, và đối với họ một tấm gương sống còn giá trị hơn một trăm bài diễn văn tuyên truyền” đề cập đến nội dung gì trong tư tưởng Hồ Chí Minh?",
    "a": "Chức năng của đạo đức",
    "b": "Vai trò của đạo đức cách mạng",
    "c": "Các chuẩn mực đạo đức mới",
    "d": "Các nguyên tắc rèn luyện đạo đức",
    "ans": "d"
  },
  {
    "num": 302,
    "q": "Các câu nói dưới đây, câu nói nào là của Chủ tịch Hồ Chí Minh?",
    "a": "Kiến thiết cần có nhân tài. Nhân tài nước ta dù chưa có nhiều lắm nhưng nếu chúng ta khéo lựa chọn, khéo phân phối, khéo dùng thì nhân tài càng ngày càng phát triển càng thêm nhiều.",
    "b": "Tài to ta dùng làm việc to, tài nhỏ ta cắt làm việc nhỏ, ai có năng lực về việc gì, ta đặt ngay vào việc ấy. Biết dùng người như vậy, ta sẽ không lo gì thiếu cán bộ.",
    "c": "Cả 3 phương án trên.",
    "d": "Phải trọng nhân tài, trọng cán bộ, trọng mỗi một người có ích cho công việc chung của chúng ta.",
    "ans": "c"
  },
  {
    "num": 303,
    "q": "Đâu là những câu nói của Chủ tịch Hồ Chí Minh:",
    "a": "Cả 3 đáp án trên.",
    "b": "Làm việc lối bàn giấy. Thích làm việc bằng giấy tờ thật nhiều. Ngồi một nơi chỉ tay năm ngón không chịu xuống địa phương kiểm tra công tác và để chỉ vạch những kế hoạch thi hành chỉ thị, nghị quyết của đoàn thể cho chu đáo… Cái lối làm việc như vậy rất có hại. Nó làm cho chúng ta không đi sát phong trào, không hiểu rõ được tình hình bên dưới, cho nên phần nhiều chủ trương của chúng ta không thi hành được đến nơi đến chốn.",
    "c": "Bệnh kiêu ngạo - Tự cao, tự đại, ham địa vị, hay lên mặt. Ưa người ta tang bốc mình, khen ngợi mình. Ưa sai khiến người khác. Hễ làm được việc gì hơi thành công thì khoe khoang vênh váo, cho ai cũng không bằng mình. Không thèm học hỏi quần chúng, không muốn cho người ta phê bình. Việc gì cũng làm thầy người khác.",
    "d": "Óc quân phiệt quan liêu. Khi phụ trách ở một vùng nào thì như một ông vua con ở đấy, tha hồ hách dịch, hoạnh họe. Đối với cấp trên thì xem thường, đối với cấp dưới cậy quyền lấn áp. Đối với quần chúng ra vẻ quan cách làm cho quần chúng sợ hãi. Cái đầu óc “ông tướng, bà tướng” ấy đã gây ra bao ác cảm, bao chia rẽ, làm cho cấp trên xa cấp dưới, đoàn thể ra nhân dân.",
    "ans": "a"
  },
  {
    "num": 304,
    "q": "Khái niệm con người trong tư tưởng Hồ Chí Minh để chỉ …",
    "a": "Con người cụ thể gắn với hoàn cảnh lịch sử cụ thể",
    "b": "Một con người cụ thể",
    "c": "Con người nói chung",
    "d": "Một cộng đồng người",
    "ans": "a"
  },
  {
    "num": 305,
    "q": "Chuyên đề học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh năm 2019 là gì? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên;",
    "b": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng,chống suy thoái tư tưởng, chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ.",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "d": "Xây dựng ý thức tôn trọng Nhân dân, phát huy dân chủ, chăm lo đời sống Nhân dân theo tư tưởng, đạo đức, phong cách Hồ Chí Minh;",
    "ans": "d"
  },
  {
    "num": 306,
    "q": "Theo Hồ Chí Minh, “cần” có nghĩa là?",
    "a": "Lao động có kế hoạch",
    "b": "Lao động có hiệu quả",
    "c": "Cả 3 phương án trên",
    "d": "Siêng năng, chăm chỉ",
    "ans": "c"
  },
  {
    "num": 307,
    "q": "Luận điểm: “Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư. Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân” được Hồ Chí Minh đề cập đến trong tác phẩm nào?",
    "a": "Cương lĩnh chính trị đầu tiên",
    "b": "Di chúc",
    "c": "Đạo đức cách mạng",
    "d": "Đường cách mệnh",
    "ans": "b"
  },
  {
    "num": 308,
    "q": "Chuyên đề học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh năm 2017 là gì?",
    "a": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên;",
    "b": "Những nội dung cơ bản của tư tưởng, đạo đức, phong cách Hồ Chí Minh;",
    "c": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng, chống suy thoái tư tưởng chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ;",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "ans": "c"
  },
  {
    "num": 309,
    "q": "Luận điểm: “Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân” thuộc nội dung tư tưởng Hồ Chí Minh về?",
    "a": "Chức năng của đạo đức",
    "b": "Các chuẩn mực đạo đức mới",
    "c": "Vai trò của đạo đức cách mạng",
    "d": "Các nguyên tắc rèn luyện đạo đức",
    "ans": "c"
  },
  {
    "num": 310,
    "q": "Chọn một đáp án đúng điền vào chỗ trống để hoàn thiện câu sau của Hồ Chí Minh: \"Chống …………… và bệnh quan liêu cũng quan trọng và cần kíp như việc đánh giặc trên mặt trận\".",
    "a": "Phá hoại của công",
    "b": "Vi phạm kỷ luật",
    "c": "Tham ô, lãng phí",
    "d": "Lãng phí",
    "ans": "c"
  },
  {
    "num": 311,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2013 là gì? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Tư tưởng, tấm gương đạo đức Hồ Chí Minh về xây dựng Đảng ta thật sự trong sạch, vững mạnh, \"là đạo đức, là văn minh \".",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh suốt đời phấn đấu cần, kiệm, liêm, chính, chí công vô tư, làm người công bộc tận tụy, trung thành của nhân dân, đời tư trong sáng, cuộc sống riêng giản dị;",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về phong cách quần chúng, dân chủ, nêu gương; nêu cao trách nhiệm gương mẫu của cán bộ, đảng viên, nhất là cán bộ lãnh đạo chủ chốt các cấp;",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm’’;",
    "ans": "c"
  },
  {
    "num": 312,
    "q": "Theo Hồ Chí Minh, chuẩn mực đạo đức quan trọng nhất đối với người cách mạng là?",
    "a": "Có tinh thần quốc tế trong sáng",
    "b": "Yêu thương con người",
    "c": "Trung với nước, hiếu với dân",
    "d": "Cần, kiệm, liêm, chính, chí công vô tư",
    "ans": "c"
  },
  {
    "num": 313,
    "q": "Theo Hồ Chí Minh, chuẩn mực đạo đức nào là mới so với quan niệm đạo đức truyền thống của người Việt Nam?",
    "a": "Trung với nước, hiếu với dân",
    "b": "Yêu thương con người",
    "c": "Có tinh thần quốc tế trong sáng",
    "d": "Cần, kiệm, liêm, chính, chí công vô tư",
    "ans": "a"
  },
  {
    "num": 314,
    "q": "Theo Chủ tịch Hồ Chí Minh, Đảng cần làm gì để nâng cao tinh thần trách nhiệm, hết lòng, hết sức phụng sự Tổ quốc, phục vụ nhân dân?",
    "a": "Giáo dục cán bộ, đảng viên và nhân dân nhận thức sâu sắc, toàn diện hơn về Đảng;",
    "b": "Phải xây dựng đội ngũ cán bộ, đảng viên thực sự có đạo đức cách mạng;",
    "c": "Cả 3 phương án trên đều đúng.",
    "d": "Phải giữ nghiêm kỷ luật trong Đảng;",
    "ans": "c"
  },
  {
    "num": 315,
    "q": "Trong quan điểm của Hồ Chí Minh về chiến lược trồng người. Luận điểm nào dưới đây không đúng với tư tưởng Hồ Chí Minh?",
    "a": "Muốn xây dựng chủ nghĩa xã hội, trước hết phải có con người xã hội chủ nghĩa.",
    "b": "Trồng người là yêu cầu khách quan, vừa cấp bách, vừa lâu dài của cách mạng. lược phát triển đất nước, có mối quan hệ chặt chẽ với nhiệm vụ xây dựng chính trị, kinh tế, văn hóa, xã hội",
    "c": "Chiến lược trồng người là một trọng tâm, một bộ phận hợp thành của chiến lược phát triển kinh tế xã hội.",
    "d": "Chiến lược trồng người là yếu tố tiên quyết đối với sự phát triển đất nước.",
    "ans": "c"
  },
  {
    "num": 316,
    "q": "Việc chống những căn bệnh nào trong bộ máy nhà nước được Hồ Chí Minh so sánh giống việc cần kíp như đánh giặc trên mặt trận ?",
    "a": "Đặc quyền, đặc lợi",
    "b": "Tham ô, lãng phí, quan liêu",
    "c": "Tư túng, chia rẽ, kiêu ngạo",
    "d": "Trái phép, cậy thế, hủ hoá",
    "ans": "b"
  },
  {
    "num": 317,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2011-2012 là gì?",
    "a": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh suốt đời phấn đấu cần, kiệm, liêm, chính, chí công vô tư, làm người công bộc tận tụy, trung thành của nhân dân, đời tư trong sáng, cuộc sống riêng giản dị; Tài liệu t am khảo môn Triết - Anh Huy",
    "b": "Tư tưởng, tấm gương đạo đức Hồ Chí Minh về xây dựng Đảng ta thật sự trong sạch, vững mạnh, \"là đạo đức, là văn minh \".",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm’’;",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về phong cách quần chúng, dân chủ, nêu gương; nêu cao trách nhiệm gương mẫu của cán bộ, đảng viên, nhất là cán bộ lãnh đạo chủ chốt các cấp;",
    "ans": "a"
  },
  {
    "num": 318,
    "q": "Chủ tịch Hồ Chí Minh luôn luôn nêu rõ phải kiên quyết chống tham ô, lãng phí, quan liêu, vì sao?",
    "a": "Cả 3 phương án trên đều đúng.",
    "b": "Chống tham ô, lãng phí, quan liêu là dân chủ;",
    "c": "Chống tham ô, lãng phí, quan liêu là cách mạng;",
    "d": "Chống tham ô, lãng phí, quan liêu sẽ giúp cách mạng mau đi tới thắng lợi.",
    "ans": "a"
  },
  {
    "num": 319,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2014 là gì?",
    "a": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh suốt đời phấn đấu cần, kiệm, liêm, chính, chí công vô tư, làm người công bộc tận tụy, trung thành của nhân dân, đời tư trong sáng, cuộc sống riêng giản dị;",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về phong cách quần chúng, dân chủ, nêu gương; nêu cao trách nhiệm gương mẫu của cán bộ, đảng viên, nhất là cán bộ lãnh đạo chủ chốt các cấp;",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm’’;",
    "d": "Tư tưởng, tấm gương đạo đức Hồ Chí Minh về xây dựng Đảng ta thật sự trong sạch, vững mạnh, \"là đạo đức, là văn minh \".",
    "ans": "c"
  },
  {
    "num": 320,
    "q": "Tìm cụm từ đúng nhất để điền vào chỗ trống trong câu nói sau của Chủ tịch Hồ Chí Minh: “Trước mặt quần chúng, không phải ta cứ viết lên trán chữ “…” mà ta được họ yêu mến. Quần chúng chỉ quý mến những người có tư cách, đạo đức. Muốn hướng dẫn nhân dân, mình phải làm mực thước cho người ta bắt chước”.",
    "a": "Cộng sản",
    "b": "Đảng viên",
    "c": "Cán bộ",
    "d": "Quan cách mạng",
    "ans": "a"
  },
  {
    "num": 321,
    "q": "Theo Hồ Chí Minh, “liêm” có nghĩa là?",
    "a": "Không tham lam",
    "b": "Tôn trọng của công, tôn trọng của dân",
    "c": "Cả 3 phương án trên",
    "d": "Trong sạch",
    "ans": "c"
  },
  {
    "num": 322,
    "q": "Trong Năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc, Hồ Chí Minh chủ trương xây dựng vấn đề luân lý với nội dung gì?",
    "a": "Dân chủ",
    "b": "Dân quyền",
    "c": "Biết hy sinh mình, làm lợi cho quần chúng",
    "d": "Tinh thần độc lập, tự cường",
    "ans": "c"
  },
  {
    "num": 323,
    "q": "“… Tiết kiệm không phải là bủn xỉn, không phải là “xem đồng tiền to bằng cái nống”, gặp việc đáng làm cũng không làm, đáng tiêu cũng không tiêu… Nói theo lối khoa học, thì tiết kiệm là tích cực, chứ không phải tiêu cực”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Thực hành tiết kiệm, chống tham ô, lãng phí, chống bệnh quan liêu (5/152)",
    "b": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969)",
    "c": "Cần tẩy sạch bệnh quan liêu, mệnh lệnh (9/1951) Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Cần, kiệm, liêm, chính (6/1949)",
    "ans": "a"
  },
  {
    "num": 324,
    "q": "Chủ tịch Hồ Chí Minh đã ví những đức tính nào của con người như trời có bốn mùa, đất có bốn phương?",
    "a": "Trung với nước, hiếu với dân",
    "b": "Có nghĩa, có tình",
    "c": "Cần, kiệm, liêm, chính",
    "d": "Chí công vô tư",
    "ans": "c"
  },
  {
    "num": 325,
    "q": "Theo Hồ Chí Minh, một trong những chuẩn mực đạo đức cao đẹp nhất của con người là?",
    "a": "Cần, kiệm, liêm, chính, chí công vô tư",
    "b": "Có tinh thần quốc tế trong sáng",
    "c": "Yêu thương con người Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Trung với nước, hiếu với dân",
    "ans": "c"
  },
  {
    "num": 326,
    "q": "Luận điểm của Đảng cộng sản Việt Nam: “Con người là trung tâm của chiến lược phát triển, đồng thời là chủ thể phát triển. Tôn trọng và bảo vệ quyền con người, gắn quyền con người với quyền và lợi ích của dân tộc, đất nước và quyền làm chủ của nhân dân” được đề cập tới trong văn kiện nào?",
    "a": "Văn kiện Đại hội đại biểu toàn quốc lần thứ XI",
    "b": "Nghị quyết Hội nghị lần thứ 5 Ban chấp hành trung ương khóa VIII",
    "c": "Văn kiện Đại hội đại biểu toàn quốc lần thứ XII",
    "d": "Cương lĩnh xây dưng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (bổ sung, phát triển năm 2011.",
    "ans": "d"
  },
  {
    "num": 327,
    "q": "Theo Hồ Chí Minh, lực lượng nào là nòng cốt trong các lực lượng quốc tế cần đoàn kết?",
    "a": "Phong trào giải phóng dân tộc",
    "b": "Với các lực lượng tiến bộ, những người yêu chuộng hòa bình, dân chủ, tự do và công lý",
    "c": "Phong trào chống chủ nghĩa đế quốc",
    "d": "Phong trào cộng sản và công nhân thế giới",
    "ans": "d"
  },
  {
    "num": 328,
    "q": "Đối tượng nghiên cứu của môn học tư tưởng Hồ Chí Minh là:",
    "a": "Là tư tưởng giải phóng dân tộc.",
    "b": "Là hệ thống quan điểm về cách mạng Việt Nam và thế giới.",
    "c": "Là tư tưởng về đấu tranh dân tộc và xây dựng chủ nghĩa xã hội.",
    "d": "Là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam.",
    "ans": "d"
  },
  {
    "num": 329,
    "q": "Ai là người bàn nhiều về cuộc đấu tranh chống chủ nghĩa thực dân?",
    "a": "V.I.Lênin",
    "b": "Ph. Ăngghen",
    "c": "C.Mác",
    "d": "Hồ Chí Minh",
    "ans": "d"
  },
  {
    "num": 330,
    "q": "Khi thực dân Pháp xâm lược Việt Nam, mâu thuẫn cơ bản chi phối đời sống xã hội Việt Nam lúc bấy giờ là?",
    "a": "Mâu thuẫn giữa công nhân, nông dân và thực dân Pháp",
    "b": "Mâu thuẫn giữa công nhân và tư sản",
    "c": "Mâu thuẫn giữa nông dân và địa chủ phong kiến",
    "d": "Mâu thuẫn giữa toàn thể dân tộc Việt Nam và thực dân Pháp xâm lược",
    "ans": "d"
  },
  {
    "num": 331,
    "q": "Phương pháp luận Hồ Chí Minh dựa trên cơ sở nào?",
    "a": "Lấy phương pháp luận chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử Mác – Lênin làm cơ sở, được hình thành và phát triển qua trình hoạt động cách mạng của Người.",
    "b": "d. Lấy phương pháp luận của chủ nghĩa duy vật biện chứng Mác – Lênin làm cơ sở.",
    "c": "Lấy phương pháp luận của chủ nghĩa duy vật lịch sử Mác – Lênin làm cơ sở.",
    "d": "Thực tiễn đấu tranh cách mạng của Hồ Chí Minh.",
    "ans": "a"
  },
  {
    "num": 332,
    "q": "Luận điểm: “Trong giai đoạn này, quyền lợi của giai cấp công nhân và nhân dân lao động và của dân tộc là một. Chính vì Đảng Lao động Việt Nam là Đảng của giai cấp công nhân và nhân dân lao động, cho nên nó phải là Đảng của dân tộc Việt Nam”. Luận điểm trên được trích từ Văn kiện nào?",
    "a": "Di chúc",
    "b": "Đạo đức cách mạng. Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Báo cáo chính trị tại đại hội Đảng toàn quốc lần thứ II (2/1951)",
    "d": "Cương lĩnh chính trị đầu tiên",
    "ans": "c"
  },
  {
    "num": 333,
    "q": "Trong các luận điểm sau về chủ nghĩa xã hội, đâu là luận điểm của Hồ Chí Minh?",
    "a": "Chủ nghĩa xã hội là chính quyền Xô Viết + điện khí hóa toàn quốc",
    "b": "Chủ nghĩa cộng sản là giai cấp công nhân ghi lên lá cờ của mình khẩu hiệu: làm theo năng lực, hưởng theo nhu cầu",
    "c": "Liên hợp tự do của những người lao động, tự do của mỗi người là điều kiện cho sự tự do của mọi người",
    "d": "Chủ nghĩa xã hội là lấy nhà máy, ngân hàng, xe lửa... làm của chung",
    "ans": "d"
  },
  {
    "num": 334,
    "q": "Thuật ngữ tư tưởng trong khái niệm “tư tưởng Hồ Chí Minh” được hiểu theo nghĩa nào?",
    "a": "Tư tưởng là quan điểm, quan niệm của một cá nhân, một cộng đồng.",
    "b": "Tư tưởng là sự phản ánh hiện thực trong ý thức, là biểu hiện của mối quan hệ giữa con người với xung quanh.",
    "c": "Hệ thống những quan niệm, quan điểm, luận điểm được xây dựng trên nền tảng triết học nhất quán, được hình thành trên cơ sở thực tiễn và trở lại chỉ đạo thực tiễn, cái tạo hiện thực.",
    "d": "Tư tưởng là sự phản ánh hiện thực trong ý thức, là biểu hiện của mối quan hệ giữa con người với xung quanh.",
    "ans": "c"
  },
  {
    "num": 335,
    "q": "Trong các thời kỳ hình thành và phát triển tư tưởng Hồ Chí Minh, có thời kỳ ghi nhầm lẫn, đó là?",
    "a": "Thời kỳ trước ngày 5 - 6 - 1911: Hình thành tư tưởng yêu nước và có chí hướng tìm đường cứu nước.",
    "b": "Thời kỳ đầu năm 1930 đến đầu năm 1941: Tư tưởng Hồ Chí Minh tiếp tục phát triển, hoàn thiện, soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta. triển, soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta",
    "c": "Thời kỳ từ giữa năm 1911 đến cuối năm 1920: Dần dần hình thành tư tưởng cứu nước, giải phóng dân tộc Việt Nam theo con đường cách mạng vô sản.",
    "d": "Thời kỳ cuối năm 1920 đến đầu năm 1930: Hình thành những nội dung cơ bản tư tưởng về cách mạng Việt Nam.",
    "ans": "b"
  },
  {
    "num": 336,
    "q": "Đảng cộng sản Việt Nam không lãnh đạo nhà nước bằng những phương thức nào?",
    "a": "Đảng lãnh đạo bằng Hiến pháp, pháp luật",
    "b": "Đảng lãnh đạo bằng hoạt động của các tổ chức đảng và đảng viên của mình trong bộ máy, cơ quan nhà nước.",
    "c": "Đảng lãnh đạo bằng đường lối, chủ trương, quan điểm",
    "d": "Đảng lãnh đạo bằng công tác kiểm tra",
    "ans": "a"
  },
  {
    "num": 337,
    "q": "Đại hội nào là dấu mốc quan trọng đánh dấu sự phát triển nhận thức của Đảng về vai trò của tư tưởng Hồ Chí Minh?",
    "a": "Đại hội Đảng toàn quốc lần thứ VII (1991) tưởng Hồ Chí Minh”",
    "b": "Đại hội Đảng toàn quốc lần thứ VI (1986).",
    "c": "Đại hội Đảng toàn quốc lần thứ IX (2001).",
    "d": "Đại hổi Đảng toàn quốc lần thứ VIII (1996)",
    "ans": "a"
  },
  {
    "num": 338,
    "q": "Trong cương lĩnh chính trị đầu tiên của Đảng cộng sản Việt Nam. Hồ Chí Minh viết: “Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản” thực chất là gì?",
    "a": "Cách mạng giải phóng giai cấp là trung tâm tạo điều kiện giải phóng dân tộc.",
    "b": "Cách mạng giải phóng dân tộc, giành độc lập dân tộc.",
    "c": "Cuộc cách mạng với nội dung dân tộc, dân chủ và chủ nghĩa xã hội.",
    "d": "Giải phóng dân tộc tạo tiền đề để giải phóng giai cấp. ài liệu tham khảo mô Triết - Anh Huy",
    "ans": "c"
  },
  {
    "num": 339,
    "q": "Hồ Chí Minh bỏ phiếu tán thành Quốc tế Cộng sản, tham gia sáng lập Đảng Cộng sản Pháp, trở thành người cộng sản Việt Nam đầu tiên vào thời gian nào?",
    "a": "Từ ngày 25 đến ngày 30 tháng 11 năm 1920.",
    "b": "Từ ngày 25 đến ngày 30 tháng 12 năm 1920.",
    "c": "Từ ngày 25 đến ngày 30 tháng 9 năm 1920.",
    "d": "Từ ngày 25 đến ngày 30 tháng 10 năm 1920.",
    "ans": "b"
  },
  {
    "num": 340,
    "q": "Trong kháng chiến chống đế quốc, thực dân, tư tưởng Hồ Chí Minh định hướng cho việc hình thành bốn tầng mặt trận. Mặt trận nào sau đây nằm trong bốn tầng mặt trận đó?",
    "a": "Mặt trận giải phóng miền Nam Việt Nam",
    "b": "Mặt trận Việt Minh",
    "c": "Mặt trận đoàn kết dân tộc",
    "d": "Măt trận dân chủ Đông Dương",
    "ans": "c"
  },
  {
    "num": 341,
    "q": "Theo Hồ Chí Minh, mâu thuẫn giai cấp trong xã hội thuộc địa, nửa phong kiến Việt Nam thể hiện như thế nào?",
    "a": "Mâu thuẫn gay gắt cần được giải quyết",
    "b": "Mâu thuẫn được giảm thiểu",
    "c": "Mâu thuẫn đối kháng",
    "d": "Mâu thuẫn cơ bản",
    "ans": "b"
  },
  {
    "num": 342,
    "q": "Theo Hồ Chí Minh, bản chất giai cấp công nhân của Nhà nước được thể hiện ở nội dung nào?",
    "a": "Nhà nước bảo vệ nền độc lập của Tổ quốc",
    "b": "Nhà nước bảo vệ lợi ích của nhân dân, lấy lợi ích của giai cấp công nhân làm nền tảng",
    "c": "Nhà nước do Đảng cộng sản lãnh đạo",
    "d": "Nhà nước ra đời là kết quả cuộc đấu tranh lâu dài và gian khổ của nhiều thế hệ người Việt Nam",
    "ans": "c"
  },
  {
    "num": 343,
    "q": "Luận điểm của Hồ Chí Minh: “con người vừa là mục tiêu, động lực của cách mạng”, luận điểm đó thể hiện nội dung tư tưởng nào sau đây?",
    "a": "Con người là vốn quý nhất, nhân tố quyết định thắng lợi của cách mạng.",
    "b": "Con người vừa là sản phẩm, vừa là chủ thể của xã hội.",
    "c": "Không có gì quý hơn độc lập tự do.",
    "d": "Con người Việt Nam có lòng nồngnàn yêu nước.",
    "ans": "a"
  },
  {
    "num": 344,
    "q": "\"Trong mấy triệu người cũng có người thế này, thế khác, nhưng thế này hay thế khác đều dòng dõi tổ tiên ta. Vậy nên ta phải khoan hồng đại độ. Ta phải nhận rằng đã là con Lạc, cháu Hồng thì ai cũng có ít hay nhiều lòng ái quốc....\", trong luận điểm nêu trên Hồ Chí Minh muốn đề cập tới vấn đề gì về đoàn kết dân tộc?",
    "a": "Phương pháp đoàn kết dân tộc.",
    "b": "Điều kiện thực hiện đại đoàn kết dân tộc.",
    "c": "Nguyên tắc tổ chức của Mặt trận dân tộc thống nhất",
    "d": "Hình thức tổ chức của khối đại đoàn kết dân tộc",
    "ans": "b"
  },
  {
    "num": 345,
    "q": "Khái niệm tư tưởng Hồ Chí Minh hiện nay đang được sử dụng được nêu trong Đại hội Đảng toàn quốc lần thứ mấy?",
    "a": "Đại hội Đảng toàn quốc lần thứ VIII (1996).",
    "b": "Đại hội Đảng toàn quốc lần thứ IX (2001)",
    "c": "Đại hổi Đảng toàn quốc lần thứ X (2006)",
    "d": "Đại hội Đảng toàn quốc lần thứ XI (2011). Tài liệu tham khảo môn Triết - Anh Huy như sau: “…”",
    "ans": "d"
  },
  {
    "num": 346,
    "q": "Hồ Chí Minh chú ý kế thừa, đổi mới, phát triển tinh thần nào của Nho giáo?",
    "a": "Tu dưỡng, rèn luyện đạo đức.",
    "b": "Yêu thương con người, có tính thần quốc tế trong sáng.",
    "c": "Xây dựng nhà nước của dân, do dân, vì dân.",
    "d": "Xây dựng xã hội xã hội chủ nghĩa.",
    "ans": "a"
  },
  {
    "num": 347,
    "q": "Tác phẩm Thường thức chính trị được Hồ Chí Minh viết khi nào?",
    "a": "1951",
    "b": "1952",
    "c": "1950",
    "d": "1953",
    "ans": "d"
  },
  {
    "num": 348,
    "q": "Luận điểm “nói đi đôi với làm, phải nêu gương về đạo đức” đề cập đến nội dung gì trong tư tưởng Hồ Chí Minh?3",
    "a": "Vai trò của đạo đức cách mạng",
    "b": "Các nguyên tắc rèn luyện đạo đức",
    "c": "Các chuẩn mực đạo đức mới",
    "d": "Chức năng của đạo đức",
    "ans": "b"
  },
  {
    "num": 349,
    "q": "Luận điểm của Hồ Chí Minh: “Cũng như sông có nguồn thì mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân” được trích trong tác phẩm nào?",
    "a": "Đạo đức cách mạng",
    "b": "Di chúc",
    "c": "Đường cách mệnh",
    "d": "Sửa đổi lối làm việc",
    "ans": "d"
  },
  {
    "num": 350,
    "q": "Theo Hồ Chí Minh, hiệp thương dân chủ là nguyên tắc hoạt dộng của tổ chức nào?",
    "a": "Tổng liên đoàn lao động",
    "b": "Đảng cộng sản",
    "c": "Mặt trận dân tộc thống nhất",
    "d": "Nhà nước",
    "ans": "c"
  },
  {
    "num": 351,
    "q": "Luận điểm của Hồ Chí Minh khẳng định: “Hai thứ Cách mạng tuy có khác nhau, nhưng có mối quan hệ chặt chẽ với nhau”. Người muốn nói về mối quan hệ của cuộc cách mạng nào?",
    "a": "Cách mạng giải phóng dân tộc ở thuộc địa và cách mạng vô sản ở chính quốc",
    "b": "Cách mạng giải phóng giai cấp ở chính quốc và giải phóng con người trong chủ nghĩa tư bản",
    "c": "Cách mạng giải phóng giai cấp và dân tộc trong chủ nghĩa tư bản",
    "d": "Cách mạng giải phóng giai cấp ở thuộc địa và cách mạng tư sản ở chính quốc",
    "ans": "a"
  },
  {
    "num": 352,
    "q": "Tác phẩm nào của Hồ Chí Minh là sự chuẩn bị mọi mặt về chính trị, tư tưởng, tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam?",
    "a": "Đường Cách mệnh năm 1927. sự ra đời của ĐCSVN",
    "b": "Cương lĩnh chính trị đầu tiên năm 1930. Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Bản án chế độ thực dân Pháp năm 1925.",
    "d": "Tuyên ngôn của Hội liên hiệp các dân tộc thuộc địa năm 1921.",
    "ans": "a"
  },
  {
    "num": 353,
    "q": "Theo Hồ Chí Minh, bước đi trong xây dựng Chủ nghĩa xã hội là gì?",
    "a": "Tiến nhanh.",
    "b": "Tiến dần dần từng bước.",
    "c": "Tiến mạnh.",
    "d": "Đẩy mạnh công nghiệp hóa, nhanh chóng đuổi kịp các nước. mau được mà phải làm dần dần”",
    "ans": "b"
  },
  {
    "num": 354,
    "q": "Lựa chọn phương án sai. Vào cuối thế kỷ XIX, đầu thế kỷ XX tình hình thế giới có những biến đổi to lớn:",
    "a": "Sự ra đời của Quốc tế cộng sản II năm 1919",
    "b": "Sự phát triển nhanh chóng của cách mạng khoa học kỹ thuật.",
    "c": "Phong trào đấu tranh của giai cấp công nhân ngày càng sâu rộng",
    "d": "Sự thành công của cách mạng Tháng Mười Nga năm 1917",
    "ans": "a"
  },
  {
    "num": 355,
    "q": "Theo Hồ Chí Minh, chuẩn mực đạo đức nào là mới so với quan niệm đạo đức truyền thống của người Việt Nam?",
    "a": "Cần, kiệm, liêm, chính, chí công vô tư",
    "b": "Yêu thương con người",
    "c": "Trung với nước, hiếu với dân",
    "d": "Có tinh thần quốc tế trong sáng",
    "ans": "d"
  },
  {
    "num": 356,
    "q": "Hồ Chí Minh được UNESCO tôn vinh Anh hùng dân tộc và nhà văn hóa kiệt xuất ở Việt Nam năm nào?",
    "a": "1984.",
    "b": "1988 (11/1987) đã khẳng định: “Chủ tịch Hồ Chí Minh là Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam”",
    "c": "1986.",
    "d": "1987.",
    "ans": "d"
  },
  {
    "num": 357,
    "q": "Câu nói: “Bạo lực là bà đỡ của một chế độ xã hội cũ đang thai nghén một chế độ xã hội mới”, của ai?",
    "a": "Hồ Chí Minh",
    "b": "V.I.Lênin",
    "c": "C.Mác",
    "d": "Ph. Ăngghen",
    "ans": "c"
  },
  {
    "num": 358,
    "q": "Luận điểm: “Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư. Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân” được Hồ Chí Minh đề cập đến trong tác phẩm nào?",
    "a": "Cương lĩnh chính trị đầu tiên",
    "b": "Đường cách mệnh",
    "c": "Di chúc",
    "d": "Đạo đức cách mạng Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "c"
  },
  {
    "num": 359,
    "q": "Luận điểm: “Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân” thuộc nội dung tư tưởng Hồ Chí Minh về?",
    "a": "Các nguyên tắc rèn luyện đạo đức",
    "b": "Chức năng của đạo đức",
    "c": "Vai trò của đạo đức cách mạng",
    "d": "Các chuẩn mực đạo đức mới",
    "ans": "c"
  },
  {
    "num": 360,
    "q": "Ai là người bàn nhiều về cuộc đấu tranh chống chủ nghĩa tư bản?",
    "a": "V.I.Lênin",
    "b": "C.Mác",
    "c": "Ph. Ăngghen",
    "d": "Hồ Chí Minh",
    "ans": "b"
  },
  {
    "num": 361,
    "q": "Theo Hồ Chí Minh, tiêu chuẩn quan trọng nhất của người cán bộ là?",
    "a": "Dám phụ trách, dám quyết đoán, dám chịu trách nhiệm",
    "b": "Tuyệt đối trung thành với cách mạng",
    "c": "Phái có mối liên hệ mật thiết với nhân dân",
    "d": "Hăng hái, thành thạo, giỏi chuyên môn, nghiệp vụ",
    "ans": "b"
  },
  {
    "num": 362,
    "q": "Hội phản đế đồng minh ra đời khi nào?",
    "a": "1939",
    "b": "1941",
    "c": "1930",
    "d": "1936",
    "ans": "c"
  },
  {
    "num": 363,
    "q": "Theo Hồ Chí Minh, nhà nước của dân là nhà nước như nào?",
    "a": "Cả 3 phương án trên",
    "b": "Nhân dân thực hiện quyền giảm sát, kiểm tra hoạt động của nhà nước",
    "c": "Mọi quyền lực trong xã hội đều thuộc về nhân dân",
    "d": "Dân tổ chức nên các cơ quan nhà nước thông qua bầu cử",
    "ans": "c"
  },
  {
    "num": 364,
    "q": "Cuộc Tổng tuyển cử bầu Quốc hội khóa I của Việt Nam diễn ra khi nào?",
    "a": "3/9/1945",
    "b": "6/1/1946",
    "c": "19/12/1946",
    "d": "5/9/1945",
    "ans": "b"
  },
  {
    "num": 365,
    "q": "Trong đoàn kết quốc tế, theo Hồ Chí Minh cần phải đoàn kết với những lực lượng nào?",
    "a": "Với các lực lượng tiến bộ, những người yêu chuộng hòa bình, dân chủ, tự do và công lý Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "Phong trào giải phóng dân tộc",
    "c": "Cả 3 phương án trên",
    "d": "Phong trào cộng sản và công nhân thế giới",
    "ans": "c"
  },
  {
    "num": 366,
    "q": "Lựa chọn phương án sai. Hồ Chí Minh đã tiếp thu tinh hoa văn hóa nhân loại, đó là",
    "a": "Tư tưởng về một xã hội bình đẳng của các nhà Khai sáng Anh",
    "b": "Tư tưởng về một xã hội bình trị, thế giới đại đồng của Nho giáo",
    "c": "Tư tưởng bình đẳng, bác ái của Phật giáo",
    "d": "Tư tưởng về quyền tự do, bình đẳng trong Tuyên ngôn độc lập của Mỹ",
    "ans": "a"
  },
  {
    "num": 367,
    "q": "Câu trích: “Bảy xin hiến pháp ban hành; Trăm đều phải có thần linh pháp quyền” được trích trong tác phẩm nào của Hồ Chí Minh?",
    "a": "Đường cách mệnh",
    "b": "Cương lĩnh chính trị đầu tiên",
    "c": "Bản án chế độ thực dân Pháp",
    "d": "Việt Nam yêu cầu ca",
    "ans": "d"
  },
  {
    "num": 368,
    "q": "Theo Hồ Chí Minh phẩm chất đạo đức nào gắn liền với hoạt động hàng ngày của mỗi con người?",
    "a": "Cần, kiệm, liêm, chính, chí công vô tư.",
    "b": "Trung với nước, hiếu với dân.",
    "c": "Có tinh thần quốc tế trong sáng",
    "d": "Yêu thương con người.",
    "ans": "a"
  },
  {
    "num": 369,
    "q": "Luận điểm của Hồ Chí Minh: “làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản” được đưa ra trong tác phẩm nào?",
    "a": "Bản án chế độ thực dân Pháp năm 1925.",
    "b": "Đường Cách mệnh năm 1927.",
    "c": "Cương lĩnh chính trị đầu tiên năm 1930.",
    "d": "Tuyên ngôn của Hội liên hiệp các dân tộc thuộc địa năm 1921.",
    "ans": "c"
  },
  {
    "num": 370,
    "q": "Vấn đề nào không thể hiện bản chất giai cấp công nhân của Đảng cộng sản Việt Nam?",
    "a": "Nền tảng tư tưởng, lý luận của Đảng chủ nghĩa Mác – Lênin",
    "b": "Mục tiêu của Đảng là chủ nghĩa cộng sản",
    "c": "Đảng tuân thủ những nguyên tắc xây dựng đảng kiểu mới của giai cấp công nhân",
    "d": "Số lượng Đảng viên là công nhân",
    "ans": "d"
  },
  {
    "num": 371,
    "q": "Theo Hồ Chí Minh điểm giống nhau của hai giai đoạn, giai đoạn thấp, tức chủ nghĩa xã hội, giai đoạn cao, tức chủ nghĩa cộng sản là gì?",
    "a": "Sức sản xuất đã phát triển cao; tư liệu sản xuất là của chung.",
    "b": "Sức sản xuất đã phát triển cao",
    "c": "Sức sản xuất đã phát triển cao; tư liệu sản xuất là của chung; thực hiện nguyên tắc phân phối theo lao động.",
    "d": "Sức sản xuất đã phát triển cao; tư liệu sản xuất đều là của chung; không có giai cấp áp bức bóc lột.",
    "ans": "d"
  },
  {
    "num": 372,
    "q": "Luận điểm: “Đảng muốn vững phải có chủ nghĩa làm cốt, trong đảng ai cũng phải hiểu, ai cũng phải theo chủ nghĩa ấy. Đảng mà không có chủ nghĩa cũng giống như người không có trí khôn, tàu không có bàn chỉ nam” thể hiện nội dung tư tưởng Hồ Chí Minh về?",
    "a": "Xây dựng Đảng về chính trị",
    "b": "Xây dựng Đảng về đạo đức Tài liệu t am khảo môn Triết - Anh Huy",
    "c": "Xây dựng Đảng về tư tưởng lý luận",
    "d": "Xây dựng Đảng về tổ chức, bộ máy, công tác cán bộ",
    "ans": "c"
  },
  {
    "num": 373,
    "q": "Giá trị truyền thống nào là cơ sở quan trọng nhất giúp Hồ Chí Minh xây dựng hệ thống quan điểm của mình?",
    "a": "Tinh thần đoàn kết, cố kết cộng đồng",
    "b": "Truyền thống cần cù, yêu lao động HCM ra đi tìm đường cứu nước",
    "c": "Chủ nghĩa yêu nước",
    "d": "Chủ nghĩa nhân văn của dân tộc",
    "ans": "c"
  },
  {
    "num": 374,
    "q": "Luận điểm sau của Hồ Chí Minh: “Bây giờ học thuyết nhiều, chủ nghĩa nhiều, nhưng chủ nghĩa chân chính nhất, chắc chắn nhất, cách mạng nhất là chủ nghĩa Lênin”, được trích trong tác phẩm nào?",
    "a": "Cương lĩnh chính trị đầu tiên (1930)",
    "b": "Con đường dẫn tôi đến với chủ nghĩa Lênin (1960)",
    "c": "Đường cách mệnh (1927)",
    "d": "Bản án chế độ thực dân Pháp (1925)",
    "ans": "c"
  },
  {
    "num": 375,
    "q": "Theo Hồ Chí Minh, kẻ thù số một của giai cấp nông dân là ai?",
    "a": "Giai cấp tư sản cấu kết với thực dân",
    "b": "Đế quốc và tay sai quốc và tay sai",
    "c": "Giai cấp phong kiến",
    "d": "Giai cấp tư sản",
    "ans": "b"
  },
  {
    "num": 376,
    "q": "Theo Hồ Chí Minh, đâu là nguyên tắc xây dựng và hoạt động của Mặt trận dân tộc thống nhất?",
    "a": "Mặt trận hoạt động theo nguyên tắc phê bình, tự phê bình.",
    "b": "Mặt trận hoạt động theo nguyên tắc hiệp thương dân chủ, bảo đảm đoàn kết rộng rãi, bền vững.",
    "c": "Mặt trận phải được xây dựng trên nền tảng đoàn kết toàn dân.",
    "d": "Mặt trận hoạt động theo nguyên tắc dân chủ tập trung.",
    "ans": "b"
  },
  {
    "num": 377,
    "q": "Theo Hồ Chí Minh, khi bước vào thời kỳ quá độ, đặc điểm to nhất của Việt Nam là gì?",
    "a": "Từ một nước nông nghiệp tiến lên chủ nghĩa xã hội",
    "b": "Từ một nước nông nghiệp lạc hậu quá độ lên chủ nghĩa xã hội không phải kinh qua giai đoạn phát triển tư bản chủ nghĩa",
    "c": "Từ một nước thuộc địa nửa phong kiến quá độ lên chủ nghĩa xã hội",
    "d": "Từ một nước lạc hậu quá độ trực tiếp lên chủ nghĩa xã hội",
    "ans": "b"
  },
  {
    "num": 378,
    "q": "Ai là người khẳng định: Sự phát triển của xã hội loài người là quá trình lịch sử tự nhiên?",
    "a": "V.I.Lênin",
    "b": "Hồ Chí Minh",
    "c": "Ph. Ăngghen",
    "d": "C.Mác",
    "ans": "d"
  },
  {
    "num": 379,
    "q": "Để đoàn kết với các dân tộc trên thế giới, theo Hồ Chí Minh cần giương cao ngọn cờ gì?",
    "a": "Hợp tác hữu nghị",
    "b": "Độc lập, tự do và quyền bình đẳng Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Hòa bình trong công lý",
    "d": "Độc lập dân tộc gắn liền với chủ nghĩa xã hội; thực hiện đoàn kết thống nhất trên nền tảng chủ nghĩa Mác - Lênin và chủ nghĩa quốc tế vô sản có lý, có tình",
    "ans": "b"
  },
  {
    "num": 380,
    "q": "BCH Trung ương Đảng tôn vinh Hồ Chí Minh là “Anh hùng dân tộc vĩ đại” năm nào?",
    "a": "1970",
    "b": "1968.",
    "c": "1967.",
    "d": "1969.",
    "ans": "d"
  },
  {
    "num": 381,
    "q": "Lựa chọn phương án đúng điền vào chỗ trống: “Một dân tộc, một đảng, một người, ngày hôm qua là vĩ đại, không nhất định ngày hôm nay và ngày mai vẫn được ca ngợi, nếu lòng dạ không trong sáng nữa, nếu…”",
    "a": "Vị kỷ, cá nhân.",
    "b": "Không nghĩ đến lợi ích dân tộc.",
    "c": "Chạy theo cám dỗ vật chất.",
    "d": "Sa vào chủ nghĩa cá nhân.",
    "ans": "d"
  },
  {
    "num": 382,
    "q": "Theo Hồ Chí Minh, trong cuộc cách mạng giải phóng dân tộc, lực lượng nào “là gốc cách mệnh”?",
    "a": "Giai cấp nông dân.",
    "b": "Giai cấp công nhân.",
    "c": "Giai cấp công nhân và giai cấp nông dân.",
    "d": "Giai cấp tư sản dân tộc.",
    "ans": "c"
  },
  {
    "num": 383,
    "q": "Sự kiện đánh dấu bước chuyển về chất trong tư tưởng của Nguyễn Ái Quốc: Từ chủ nghĩa yêu nước đến với chủ nghĩa Lênin, từ giác ngộ dân tộc đến giác ngộ giai cấp, từ người yêu nước trở thành người cộng sản?",
    "a": "Gửi bản Yêu sách của nhân dân An Nam đến Hội nghị Vecxay",
    "b": "Tham dự Đại hội lần thứ XVIII của Đảng xã hội Pháp",
    "c": "Tổ chức hội nghị hợp nhất các tổ chức cộng sản thành lập Đảng cộng sản Việt Nam",
    "d": "Đọc được Sơ thảo lần T1 những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin yêu nước kết hợp chặt chẽ với lập trường cách mạng vô sản",
    "ans": "b"
  },
  {
    "num": 384,
    "q": "Để đoàn kết với phong trào cộng sản và công nhân quốc tế, theo Hồ Chí Minh cần giương cao ngọn cờ gì?",
    "a": "Độc lập dân tộc gắn liền với chủ nghĩa xã hội; thực hiện đoàn kết thống nhất trên nền tảng chủ nghĩa Mác - Lênin và chủ nghĩa quốc tế vô sản có lý, có tình",
    "b": "Hòa bình trong công lý",
    "c": "Độc lập, tự do và quyền bình đẳng",
    "d": "Hợp tác hữu nghị",
    "ans": "a"
  },
  {
    "num": 385,
    "q": "Lựa chọn cụm từ điền vào chỗ trống: “Chỉ có chủ nghĩa xã hội, chủ nghĩa cộng sản … … và những người lao động trên thế giới khỏi ách nô lệ”.",
    "a": "Mới xóa bỏ áp bức, bóc lột.",
    "b": "Mới giải phóng được các dân tộc bị áp bức.",
    "c": "Mới giải phóng được nhân dân.",
    "d": "Mới giải phóng được giai cấp giai cấp công nhân.",
    "ans": "b"
  },
  {
    "num": 386,
    "q": "Hồ Chí Minh đã mấy lần tham gia soạn thảo Hiến pháp?",
    "a": "1 lần",
    "b": "4 lần",
    "c": "2 lần Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "3 lần",
    "ans": "c"
  },
  {
    "num": 387,
    "q": "Trong các luận điểm sau sau đây của Hồ Chí Minh, luận điểm nào nhấn mạnh yếu tố nhân văn trong đại đoàn kết?",
    "a": "Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân.",
    "b": "Ta đoàn kết để đấu tranh cho thống nhất và độc lập cho Tổ quốc; ta còn phải đoàn kết xây dựng nước nhà",
    "c": "Bất kỳ ai mà thành thật tán thành hòa bình, thống nhất, độc lập, dân chủ thì dù những người đó trước đây chống chúng ta, bây giờ chúng ta cũng thật thà đoàn kết với họ.",
    "d": "Đối với những đồng bào lạc lối lầm đường, ta phải lấy tình thân ái mà cảm hóa họ.",
    "ans": "d"
  },
  {
    "num": 388,
    "q": "Nội dung nào là phương pháp nghiên cứu cụ thể tư tưởng Hồ Chí Minh?",
    "a": "Quan điểm kế thừa và phát triển.",
    "b": "Phương pháp chuyên ngành, liên ngành.",
    "c": "Quan điểm lịch sử - cụ thể.",
    "d": "Quan điểm toàn diện và hệ thống.",
    "ans": "b"
  },
  {
    "num": 389,
    "q": "\"Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân ta là Công nhân, nông dân và các tầng lớp lao động khác. Đó là cái gốc của đại đoàn kết. Nó cũng như cái nền của nhà, gốc của cây. Nhưng đã có nền vững, gốc tốt, còn phải đoàn kết các tầng lớp nhân dân khác\", trong đoạn trích nêu trên Hồ Chí Minh muốn đề cập đến vấn đề gì về đại đoàn kết dân tộc?",
    "a": "Điều kiện thực hiện đại đoàn kết dân tộc.",
    "b": "Nguyên tắc xây dựng Mặt trận dân tộc thống nhất",
    "c": "Hình thức khối đại đoàn kết dân tộc.",
    "d": "Lực lượng đại đoàn kết dân tộc",
    "ans": "d"
  },
  {
    "num": 390,
    "q": "Luận điểm “Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người” Hồ Chí Minh mượn ý của ai?",
    "a": "Mạnh Tử.",
    "b": "Khổng Tử.",
    "c": "Quản Trọng.",
    "d": "Hàn Phi Tử",
    "ans": "c"
  },
  {
    "num": 391,
    "q": "Mặt trận dân tộc thống nhất đặt dưới sự lãnh đạo của Đảng hoạt dộng theo nguyên tắc nào?",
    "a": "Nguyên tắc hiệp thương dân chủ",
    "b": "Nguyên tắc tập trung dân chủ",
    "c": "Cả 3 phương án trên",
    "d": "Nguyên tắc dân chủ tập trung",
    "ans": "a"
  },
  {
    "num": 392,
    "q": "Hồ Chí Minh nhận xét về phong trào nào “đưa hổ cửa trước, rước beo cửa sau”?",
    "a": "Phong trào Cần Vương của Hàm Nghi, Tôn Thất Thuyết",
    "b": "Phong trào Đông Du của Phan Bội Châu Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Phong trào Duy Tân của Phan Châu Trinh",
    "d": "Khởi nghĩa nông dân Yên Thế của Hoàng Hoa Thám",
    "ans": "b"
  },
  {
    "num": 393,
    "q": "Đảng ta khẳng định: Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động tại Đại hội Đảng toàn quốc lần thứ mấy?",
    "a": "Đại hội Đảng toàn quốc lần thứ IX (2001).",
    "b": "Đại hội Đảng toàn quốc lần thứ VII (1991)",
    "c": "Đại hổi Đảng toàn quốc lần thứ VIII (1996)",
    "d": "Đại hội Đảng toàn quốc lần thứ VI (1986).",
    "ans": "b"
  },
  {
    "num": 394,
    "q": "Chủ tịch Hồ Chí Minh coi nguyên tắc tự phê bình và phê bình trong hoạt động của Đảng là việc làm như thế nào? Lựa chọn đáp án đúng",
    "a": "Việc làm thường xuyên",
    "b": "Việc làm hàng tháng",
    "c": "Việc làm có tính định kỳ",
    "d": "Việc làm hàng năm",
    "ans": "a"
  },
  {
    "num": 395,
    "q": "Theo Hồ Chí Minh, trong cách mạng giải phóng dân tộc, lực lượng nào được coi là “bầu bạn cách mệnh” của công nông?",
    "a": "Giai cấp tư sản dân tộc",
    "b": "Cả 3 phương án trên",
    "c": "Tầng lớp tiểu tư sản – trí thức",
    "d": "Bộ phận địa chủ yêu nước",
    "ans": "b"
  },
  {
    "num": 396,
    "q": "Đảng cộng sản Việt Nam lãnh đạo nhà nước bằng những phương thức nào?",
    "a": "Đảng lãnh đạo bằng hệ thống cơ quan của Đảng",
    "b": "Đảng lãnh đạo bằng đường lối",
    "c": "Đảng lãnh đạo bằng hệ thống chính sách",
    "d": "Đảng lãnh đạo bằng Hiến pháp, pháp luật",
    "ans": "b"
  },
  {
    "num": 397,
    "q": "Nhìn một cách tổng quát thì vai trò của văn hóa theo Hồ Chí Minh được hiểu theo nghĩa nào?",
    "a": "Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp.",
    "b": "Bồi dưỡng những phẩm chất tốt đẹp",
    "c": "Văn hóa soi đường cho quốc dân đi.",
    "d": "Nâng cao dân trí.",
    "ans": "c"
  },
  {
    "num": 398,
    "q": "Theo Hồ Chí Minh, nguồn gốc của những đau khổ và áp bức dân tộc là ở đâu?",
    "a": "Ở tại các chính phủ đế quốc",
    "b": "Ở “Chính quốc”, ở các nước đế quốc đang thống trị dân tộc mình.",
    "c": "Ở tại các nước tư bản phát triển.",
    "d": "Tại các nước thuộc địa.",
    "ans": "b"
  },
  {
    "num": 399,
    "q": "Theo Hồ Chí Minh, chủ nghĩa Mác có “ưu điểm” gì?",
    "a": "Học thuyết cách mạng, tiến bộ.",
    "b": "Lý luận về giải phóng con người.",
    "c": "Phương pháp làm việc biện chứng.",
    "d": "Thế giới quan khoa học.",
    "ans": "c"
  },
  {
    "num": 400,
    "q": "Bản chất của Đảng cộng sản Việt Nam được thể hiện ở những nội dung nào? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Thành phần xuất thân của Đảng viên",
    "b": "Số lượng Đảng viên là công nhân",
    "c": "Nền tảng tư tưởng, lý luận của Đảng chủ nghĩa Mác - Lênin",
    "d": "Trình độ lý luận của Đảng viên",
    "ans": "c"
  },
  {
    "num": 401,
    "q": "Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế để làm gì?",
    "a": "Thực hiện đoàn kết quốc tế nhằm kết hợp sức mạnh dân tộc với sức mạnh thời đại, tạo sức mạnh tổng hợp cho cách mạng Việt Nam",
    "b": "Thực hiện đoàn kết quốc tế để thu hút vốn đầu tư nước ngoài, tiếp thu thành tựu khoa học kỹ thuật",
    "c": "Cả 3 phương án trên",
    "d": "Thực hiện đoàn kết quốc tế để nhận viện trợ từ quốc tế",
    "ans": "a"
  },
  {
    "num": 402,
    "q": "Theo Hồ Chí Minh, đại đoàn kết dân tộc có vai trò như thế nào trong sự nghiệp cách mạng?",
    "a": "Là vấn đề có ý nghĩa chiến lược, quyết định thành công của cách mạng",
    "b": "Là chính sách chính trị lâu dài, tạo nên thành công của cách mạng",
    "c": "Là chính sách chính trị nhất thời, góp phần tạo nên thành công của cách mạng",
    "d": "Là vấn đề có ý nghĩa sách lược, quyết định thành công của cách mạng",
    "ans": "a"
  },
  {
    "num": 403,
    "q": "Hồ Chí Minh bắt gặp Sơ thảo lần thứ nhất luận cương về những vấn đề dân tộc và vấn đề thuộc địa khi nào?",
    "a": "12/1920",
    "b": "2/1930",
    "c": "7/1920",
    "d": "6/1923",
    "ans": "c"
  },
  {
    "num": 404,
    "q": "Đâu là ý nghĩa của việc học tập môn học Tư tưởng Hồ Chí Minh?",
    "a": "Góp phần hình thành tri thức về chính trị - xã hội.",
    "b": "Hiểu rõ hơn về lịch sử Việt Nam.",
    "c": "Góp phần hình thành thế giới quan khoa học.",
    "d": "Góp phần nâng cao năng lực tư duy lý luận.",
    "ans": "d"
  },
  {
    "num": 405,
    "q": "Theo Hồ Chí Minh, đâu là nguyên tắc cốt lõi trong tổ chức và hoạt động của Mặt trận dân tộc thống nhất?",
    "a": "Mặt trận dân tộc thống nhất hoạt động trên cơ sở bảo đảm lợi ích tối cao của dân tộc, quyền lợi cơ bản củ các tầng lớp nhân dân",
    "b": "Mặt trận dân tộc thống nhất phải được xây dựng trên nền tảng khối liên minh công – nông – trí thức, đặt dưới sự lãnh đạo của Đảng Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Mặt trận dân tộc thống nhất là khối đoàn kết chặt chẽ, lâu dài, đoàn kết thật sự, chân thành, thân ái giúp đỡ nhau cùng tiến bộ",
    "d": "Mặt trận dân tộc thống nhất hoạt động theo nguyên tắc hiệp thương dân chủ, đảm bảo đoàn kết ngày càng rộng rãi và bền vững",
    "ans": "b"
  },
  {
    "num": 406,
    "q": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn giành được thắng lợi phải…",
    "a": "Thực hiện bằng con đường hòa bình, vận động, thuyết phục",
    "b": "Thực hiện bằng con đường bạo lực, kết hợp với lực lượng chính trị của quần chúng với lực lượng vũ trang của nhân dân",
    "c": "Kết hợp lực lượng chính trị của quần chúng với lực lượng vũ trang của nhân dân",
    "d": "Thực hiện bằng con đường bạo lực",
    "ans": "b"
  },
  {
    "num": 407,
    "q": "Thuật ngữ “tư tưởng Hồ Chí Minh” được dùng theo nghĩa nào?",
    "a": "Là tư tưởng của một lãnh tụ",
    "b": "Là tư tưởng của một giai cấp, một dân tộc",
    "c": "Là tư tưởng của một cá nhân",
    "d": "Là tất cả những vấn đề trên",
    "ans": "b"
  },
  {
    "num": 408,
    "q": "Hồ Chí Minh đã khẳng định chủ nghĩa dân tộc là một động lực lớn ở các nước đang đấu tranh giành độc lập. Đó là chủ nghĩa dân tộc…",
    "a": "Sô vanh nước lớn",
    "b": "Vị tha",
    "c": "Chân chính",
    "d": "Hẹp hòi",
    "ans": "c"
  },
  {
    "num": 409,
    "q": "Một trong những truyền thống tốt đẹp của tư tưởng và văn hóa Việt Nam được Hồ Chí Minh tiếp thu để hình thành tư tưởng của Người là:",
    "a": "Chủ nghĩa yêu nước Việt Nam",
    "b": "Tư tưởng vị tha của Phật Giáo",
    "c": "Cả ba đáp án trên đều sai",
    "d": "Học thuyết chính trị của Nho Giáo",
    "ans": "a"
  },
  {
    "num": 410,
    "q": "Theo tư tưởng Hồ Chí Minh, chế độ chính trị mà chúng ta xây dựng là chế độ do…",
    "a": "Giai cấp công nhân làm chủ",
    "b": "Giai cấp nông dân làm chủ",
    "c": "Nhân dân làm chủ",
    "d": "Trí thức làm chủ chủ",
    "ans": "c"
  },
  {
    "num": 411,
    "q": "Giai đoạn hình thành cơ bản tư tưởng về cách mạng Việt Nam của Hồ Chí Minh được tính từ:",
    "a": "1941 – 1945",
    "b": "1921 – 1930",
    "c": "1911 – 1920",
    "d": "1930 – 1941",
    "ans": "b"
  },
  {
    "num": 412,
    "q": "Giá trị của tư tưởng Hồ Chí Minh đối với dân tộc là?",
    "a": "Tìm ra các giải pháp đấu tranh giải phóng loài người Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "Cổ vũ các dân tộc đấu tranh trong sự nghiệp giải phóng",
    "c": "Phản ánh khát vọng thời đại",
    "d": "Tài sản tinh thần vô giá của dân tộc Việt Nam",
    "ans": "d"
  },
  {
    "num": 413,
    "q": "Hồ Chí Minh đã dung hình tượng nào dưới đây để chỉ chủ nghĩa tư bản?",
    "a": "Con đỉa hai vòi",
    "b": "Con vẹt",
    "c": "Con bạch tuộc",
    "d": "Con chim đại bàng",
    "ans": "a"
  },
  {
    "num": 414,
    "q": "Triết lý hành động, tư tưởng nhập thế, hành đạo, giúp đời là ưu điểm của học thuyết, tôn giáo nào?",
    "a": "Nho giáo",
    "b": "Thiên chúa giáo",
    "c": "Phật giáo",
    "d": "Hồi giáo",
    "ans": "a"
  },
  {
    "num": 415,
    "q": "Trong Tư tưởng HCM, giải phóng con người trước hết là",
    "a": "Giải phóng tư tưởng cho con người",
    "b": "Giải phóng giai cấp công nhân",
    "c": "Giải phóng giai cấp nông dân",
    "d": "Giải phóng quần chúng lao động",
    "ans": "d"
  },
  {
    "num": 416,
    "q": "Theo tư tưởng Hồ Chí Minh, yếu tố nào là gốc của người cách mạng",
    "a": "Tài năng",
    "b": "Kỹ năng",
    "c": "Đạo đức",
    "d": "Văn hóa",
    "ans": "c"
  },
  {
    "num": 417,
    "q": "Theo Hồ Chí Minh, ở đời và làm người thì phải làm gì?",
    "a": "Thương nhân loại bị áp bức",
    "b": "Cả 3 phương án trên đều đúng",
    "c": "Thương dân",
    "d": "Yêu nước",
    "ans": "b"
  },
  {
    "num": 418,
    "q": "Vấn đề nào không thuộc Năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc theo tư tưởng Hồ Chí Minh?",
    "a": "Xây dựng tâm lý: tinh thần độc lập tự cường",
    "b": "Xây dựng xã hội: xã hội chủ nghĩa",
    "c": "Xây dựng chính trị: dân quyền",
    "d": "Xây dựng luân lý: biết hy sinh mình, làm lợi cho quần chúng",
    "ans": "b"
  },
  {
    "num": 419,
    "q": "Luận điểm “công cuộc giải phóng an hem chỉ có thể thực hiện bằng sự nỗ lực của bản than anh em” là của ai?",
    "a": "C. Mác",
    "b": "Hồ Chí Minh",
    "c": "Ph. Ăngghen",
    "d": "Lê Duẩn",
    "ans": "b"
  },
  {
    "num": 420,
    "q": "Tư tưởng vị tha, từ bi bác ái, cứu khổ cứu nạn là ưu điểm của học thuyết, tôn giáo nào?",
    "a": "Thiên chúa giáo",
    "b": "Hồi giáo Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Nho giáo",
    "d": "Phật giáo",
    "ans": "d"
  },
  {
    "num": 421,
    "q": "Văn kiện Đại hội IX quan niệm: “Tư tưởng Hồ Chí Minh là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của  … . . .  là kết quả của sự vận dụng và phát triển sáng tạo  … . . .  vào điều kiện cụ thể của nước ta, đồng thời là kết tinh tinh hoa dân tộc và trí tuệ thời đại nhằm giải phóng dân tộc, giải phóng giai cấp, giải phóng con người.”",
    "a": "Cách mạng Việt Nam; chủ nghĩa Mác-Lênin",
    "b": "Chủ nghĩa Mác- Lênin; cách mạng Việt Nam",
    "c": "Cách mạng xã hội chủ nghĩa; chủ nghĩa Mác- Lênin",
    "d": "Cách mạng vô sản; chủ nghĩa Mác- Lênin",
    "ans": "a"
  },
  {
    "num": 422,
    "q": "Nột dung cốt lõi của tư tưởng Hồ Chí Minh là gì",
    "a": "Dân chủ, dân quyền",
    "b": "Chủ nghĩa xã hội",
    "c": "Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
    "d": "Độc lập dân tộc",
    "ans": "c"
  },
  {
    "num": 423,
    "q": "Luận điểm: “Chỉ có những người cách mạng chân chính mới thu hái được những hiểu biết quý báu của các đời trước để lại” là của ai?",
    "a": "C.Mác",
    "b": "V.I.Lênin",
    "c": "Ph. Ăngghen",
    "d": "Hồ Chí Minh",
    "ans": "b"
  },
  {
    "num": 424,
    "q": "Theo Hồ Chí Minh, nhân tố tạo nên sức hấp dẫn của chủ nghĩa xã hội là?",
    "a": "Đạo đức cách mạng.",
    "b": "Sự tự do về tư tưởng.",
    "c": "Sự giải phóng lực lượng sản xuất.",
    "d": "Mức sống vật chất dồi dào.",
    "ans": "a"
  },
  {
    "num": 425,
    "q": "Nguyễn Ái Quốc đọc “Sơ thảo lần thứ nhất Luận cương về vấn đề dân tộc và vấn đề thuộc địa” của V.I.Lenin vào thời gian nào?",
    "a": "7/1920",
    "b": "7/1919",
    "c": "7/1917",
    "d": "7/1925",
    "ans": "a"
  },
  {
    "num": 426,
    "q": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc trong thời đại mới phải do Đảng Cộng sản lãnh đạo để",
    "a": "Giác ngộ quần chúng",
    "b": "Đoàn kết với giai cấp vô sản và các dân tộc bị áp bức trên thế giới Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Tổ chức, tập hợp quần chúng",
    "d": "Cả 3 phương án trên đều đúng",
    "ans": "d"
  },
  {
    "num": 427,
    "q": "Vào cuối những năm 20 đấu những năm 30 của thế kỷ XX, Quốc tế cộng sản đã bị chi phối nặng nề bởi khuynh hướng “tả”. Khuynh hướng này đã khiến Nguyễn Ái Quốc bị chỉ trích như nào?",
    "a": "Chỉ lo đến cách mạng điền địa, mà quên mất cách mạng giải phóng dân tộc",
    "b": "Chỉ lo đến việc phản phong, mà quên mất lợi ích dân tộc",
    "c": "Chỉ lo cách mạng giải phóng dân tộc, mà quên mất cách mạng xã hội chủ nghĩa",
    "d": "Chỉ lo đến việc phản đế, mà quên mất lợi ích giai cấp đấu tranh",
    "ans": "d"
  },
  {
    "num": 428,
    "q": "Điền từ vào chỗ trống: Theo Hồ Chí Minh: (…) mở ra con đường giải phóng cho các dân tộc loài người, mở đầu một thời đại mới trong lịch sử",
    "a": "Cách mạng Tháng Mười",
    "b": "Cách mạng Tháng Tám",
    "c": "Cách mạng Tân Hợi",
    "d": "Cách mạng tư sản Pháp",
    "ans": "a"
  },
  {
    "num": 429,
    "q": "Theo Hồ Chí Minh, kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội phản ánh…",
    "a": "Mối quan hệ giữa mục tiêu giải phóng dân tộc với giải phóng giai cấp, giải phóng con người",
    "b": "Quy luật khách quan của cách mạng giải phóng dân tộc trong thời đại cách mạng vô sản",
    "c": "Cả 3 phương án trên đều đúng",
    "d": "Mối quan hệ giữa mục tiêu trước mắt và mục tiêu lâu dài",
    "ans": "c"
  },
  {
    "num": 430,
    "q": "Theo tư tưởng Hồ Chí Minh, nền kinh tế mà chúng ta xây dựng phải được tạo lập trên cơ sở…",
    "a": "Chế độ công hữu về tư liệu sản xuất",
    "b": "Nền công nghiệp hiện đại",
    "c": "Chế độ tư hữu về tư liệu sản xuất",
    "d": "Nền nông nghiệp hiện đại",
    "ans": "a"
  },
  {
    "num": 431,
    "q": "Đặc trưng cốt lõi nhất của tư tưởng đạo đức Hồ Chí Minh là gì?",
    "a": "Sự quan tâm đến con người",
    "b": "Chủ nghĩa nhân đạo chiến đấu",
    "c": "Cả 3 phương án trên đều đúng",
    "d": "Lòng thương người",
    "ans": "c"
  },
  {
    "num": 432,
    "q": "Yếu tố nào thuộc nhân tố chủ quan giúp Hồ Chí Minh hình thành nên hệ thống tư tưởng của mình?",
    "a": "Chủ nghĩa Mác – Lênin",
    "b": "Truyền thống dân tộc",
    "c": "Tinh hoa văn hóa nhân loại",
    "d": "Phẩm chất đạo đức và năng lực hoạt động thực tiễn",
    "ans": "d"
  },
  {
    "num": 433,
    "q": "Theo Hồ Chí Minh, đối tượng của cách mạng ở thuộc địa là?",
    "a": "Giai cấp địa chủ",
    "b": "Giai cấp tư sản bản xứ",
    "c": "Chủ nghĩa thực dân và tay sai phản động",
    "d": "Cả 3 phương án trên",
    "ans": "c"
  },
  {
    "num": 434,
    "q": "Theo Hồ Chí Minh, ưu điểm lớn nhất của Tôn giáo Giêxu là gì? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Lòng nhân ái cao cả",
    "b": "Lòng cao thượng",
    "c": "Đức hy sinh",
    "d": "Sự đấu tranh",
    "ans": "a"
  },
  {
    "num": 435,
    "q": "Quốc tế cộng sản thừa nhận và sửa chữa những sai lầm của khuynh hướng “tả” tại Đại hội lần thứ mấy?",
    "a": "Đại hội VI",
    "b": "Đại hội IV",
    "c": "Đại hội V",
    "d": "Đại hội VII",
    "ans": "d"
  },
  {
    "num": 436,
    "q": "Điều mong muốn cuối cùng của Hồ Chí Minh ghi trong Di chúc là gì?",
    "a": "Xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ, giàu mạnh.",
    "b": "Xây dựng một nước Việt Nam dân chủ, công bằng, văn minh",
    "c": "Làm cho mọi người được hạnh phúc",
    "d": "Xây dựng một nước Việt Nam phồn vinh và cường thịnh",
    "ans": "a"
  },
  {
    "num": 437,
    "q": "Theo tư tưởng Hồ Chí Minh, mục tiêu của chủ nghĩa xã hội là gì",
    "a": "Phát triển mạnh mẽ khoa học, kỹ thuật",
    "b": "Mở rộng dân chủ cho mọi giai cấp, tầng lớp",
    "c": "Nền kinh tế nông nghiệp hiện đại",
    "d": "Không ngừng cải thiện và nâng cao đời sống nhân dân lao động",
    "ans": "d"
  },
  {
    "num": 438,
    "q": "Hồ Chí Minh nhận thấy học thuyết, tôn giáo nào trong đó có “những điều thích hợp với điều kiện của nước ta”?",
    "a": "Thiên chúa giáo",
    "b": "Nho giáo",
    "c": "Chủ nghĩa Tam dân",
    "d": "Phật giáo",
    "ans": "c"
  },
  {
    "num": 439,
    "q": "Cuộc cách mạng nào được coi là “mở ra trước mắt họ thời đại cách mạng chống đế quốc, thời đại giải phóng dân tộc”?",
    "a": "Cách mạng Tháng Mười Nga",
    "b": "Đại cách mạng tư sản Pháp",
    "c": "Công xã Pari",
    "d": "Cuộc đấu tranh giành độc lập của Mỹ",
    "ans": "a"
  },
  {
    "num": 440,
    "q": "Chọn phương án trả lời đúng với tư tưởng Hồ Chí Minh:",
    "a": "Cách mạng giải phóng dân tộc giành thắng lợi đồng thời với thắng lợi cách mạng vô sản ở chính quốc",
    "b": "Cách mạng giải phóng dân tộc ở thuộc địa có khả năng giành được thắng lợi trước cách mạng vô sản ở chính quốc",
    "c": "Thắng lợi của cách mạng vô sản tổn tại song song với thắng lợi của các cuộc cách mạng tư sản",
    "d": "Thắng lợi của cách mạng vô sản ở thuộc địa phải phụ thuộc vào thắng lợi của cách mạng vô sản ở chính quốc Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "b"
  },
  {
    "num": 441,
    "q": "Đoạn trích sau đây thuộc tác phẩm nào của Hồ Chí Minh: “Lúc bấy giờ, tôi ủng hộ cách mạng Tháng Mười chỉ là theo cảm tính tự nhiên… Tôi kính yêu Lênin vì Lênin là một người yêu nước vĩ đại đã giải phóng đồng bào mình…”?",
    "a": "Cương lĩnh chính trị đầu tiên",
    "b": "Con đường dẫn tôi đến chủ nghĩa Lênin",
    "c": "Đường cách mệnh",
    "d": "Bản án chế độ thực dân Pháp",
    "ans": "b"
  },
  {
    "num": 442,
    "q": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn giành được thắng lợi phải…",
    "a": "Dựa vào thắng lợi của cách mạng vô sản ở chính quốc",
    "b": "Dựa vào sự thắng lợi của cách mạng ở các nước thuộc địa khác",
    "c": "Phụ thuộc hoàn toàn vào cách mạng tư sản",
    "d": "Tiến hành chủ động và sáng tạo",
    "ans": "d"
  },
  {
    "num": 443,
    "q": "Chọn cụm từ đúng nhất với tư tưởng Hồ Chí Minh",
    "a": "Đại đoàn kết dân tộc là một thủ đoạn chính trị",
    "b": "Đại đoàn kết dân tộc là nghệ thuật",
    "c": "Đại đoàn kết dân tộc là vấn đề chiến lược",
    "d": "Đại đoàn kết dân tộc là vấn đề sách lược",
    "ans": "c"
  },
  {
    "num": 444,
    "q": "Theo tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc là…",
    "a": "Vấn đề trước mắt",
    "b": "Vấn đề quyết định thành công trước mắt",
    "c": "Vấn đề cơ bản có ý nghĩa sách lược",
    "d": "Vấn đề cơ bản có ý nghĩa chiến lược, quyết định thành công của cách mạng",
    "ans": "d"
  },
  {
    "num": 445,
    "q": "Chọn phương án đúng nhất: Con người theo quan niệm của Hồ Chí Minh là…",
    "a": "Vốn quý nhất, nhân tố quan trọng của cách mạng",
    "b": "Vốn quý nhất, nhân tố quyết định đến thành công của cách mạng",
    "c": "Động lực của cách mạng",
    "d": "Vốn quý của cách mạng",
    "ans": "b"
  },
  {
    "num": 446,
    "q": "Một trong những nguồn gốc để hình thành tư tưởng Hồ Chí Minh là Người đã tiếp thu",
    "a": "Tư tưởng xã hội chủ nghĩa không tưởng Pháp",
    "b": "Triết học Hy Lạp cổ đại",
    "c": "Tinh hoa văn hóa nhân loại",
    "d": "Triết học cổ điển Đức",
    "ans": "c"
  },
  {
    "num": 447,
    "q": "Nguyễn Ái Quốc gửi bản “Yêu sách của nhân dân An Nam” tới Hội nghị Vecxay vào ngày tháng năm nào?",
    "a": "18/6/1918",
    "b": "18/6/1920",
    "c": "18/6/1919",
    "d": "18/6/1917",
    "ans": "c"
  },
  {
    "num": 448,
    "q": "Tháng 7 năm 1920, Nguyễn Ái Quốc đã đọc… của V.I.Lênin? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Sáng kiến vĩ đại",
    "b": "Sơ thảo lần thứ nhất Luận cương về các vấn đề dân tộc và vấn đề thuộc địa",
    "c": "Tác phẩm làm gì",
    "d": "Sơ thảo lần thứ nhất Luận cương về các vấn đề dân tộc",
    "ans": "b"
  },
  {
    "num": 449,
    "q": "Theo Hồ Chí Minh, chuẩn mực đạo đức quan trọng nhất đối với người cách mạng là?",
    "a": "Cần, kiệm, liêm, chính, chí công vô tư",
    "b": "Yêu thương con người",
    "c": "Có tinh thần quốc tế trong sáng",
    "d": "Trung với nước, hiếu với dân",
    "ans": "d"
  },
  {
    "num": 450,
    "q": "Luận điểm “Chủ nghĩa tư bản là một con đỉa có 1 cái vòi bám vào giai cấp vô sản ở chính quốc và 1 cái vòi khác bám vào giai cấp vô sản ở các nước thuộc địa. Nếu muốn giết con vật ấy, người ta phải đồng thời cắt cả 2 vòi” của Hồ Chí Minh được trích trong tác phẩm nào?",
    "a": "Bản án chế độ thực dân Pháp",
    "b": "Báo người cùng khổ",
    "c": "Đường cách mệnh",
    "d": "Di chúc",
    "ans": "a"
  },
  {
    "num": 451,
    "q": "Chủ trương cầu ngoại viện, dùng bạo lực để khôi phục độc lập dân tộc là của nhà cách mạng nào?",
    "a": "Hàm Nghi",
    "b": "Tôn Thất Thuyết",
    "c": "Phan Bội Châu",
    "d": "Phan Châu Trinh",
    "ans": "c"
  },
  {
    "num": 452,
    "q": "Theo Hồ Chí Minh, nội dung giải phóng dân tộc theo con đường cách mạng vô sản bao gồm",
    "a": "Lực lượng cách mạng là toàn dân tộc",
    "b": "Cả 3 phương án trên đều đúng",
    "c": "Lực lượng lãnh đạo là giai cấp công nhân",
    "d": "Đi từ giải phóng dân tộc tới xã hội cộng sản",
    "ans": "b"
  },
  {
    "num": 453,
    "q": "Theo tư tưởng Hồ Chí Minh, một nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ là…",
    "a": "Một nhà nước không có tiêu cực, không có đặc quyền, đặc lợi",
    "b": "Một nhà nước hợp hiến",
    "c": "Một nhà nước thống nhất, có quyền quốc gia",
    "d": "Một nhà nước của dân, do dân, vì dân",
    "ans": "b"
  },
  {
    "num": 454,
    "q": "Theo tư tưởng Hồ Chí Minh, độc lập tự do là…",
    "a": "Quyền thiêng liêng của tất cả các dân tộc",
    "b": "Quyền bất khả xâm phạm của tất cả các dân tộc",
    "c": "Quyền bất khả xâm phạm của công dân",
    "d": "Quyền thiêng liêng và bất khả xâm phạm của tất cả các dân tộc",
    "ans": "d"
  },
  {
    "num": 455,
    "q": "Khái niệm tư tưởng Hồ Chí Minh được sử dụng hiện nay được Đảng ta chính thức sử dụng vào thời gian nào?",
    "a": "Năm 1945",
    "b": "Năm 1991",
    "c": "Năm 1930 Tài liệu t am khảo môn Triết - Anh Huy",
    "d": "Năm 1969",
    "ans": "b"
  },
  {
    "num": 456,
    "q": "Theo tư tưởng Hồ Chí Minh, đặc trưng kinh tế nổi bật nhất của chủ nghĩa xã hội là gì?",
    "a": "Khoa học – Kỹ thuật",
    "b": "Chế độ tư hữu về tư liệu sản xuất",
    "c": "Cơ cấu công – nông nghiệp hợp lý",
    "d": "Sở hữu xã hội về tư liệu sản xuất",
    "ans": "d"
  },
  {
    "num": 457,
    "q": "Theo tư tưởng Hồ Chí Minh, muốn xây dựng chủ nghĩa xã hội trước hết cần có…",
    "a": "Con người mới xã hội chủ nghĩa",
    "b": "Khoa học – kỹ thuật",
    "c": "Con người toàn diện",
    "d": "Kinh tế phát triển",
    "ans": "a"
  },
  {
    "num": 458,
    "q": "Theo Hồ Chí Minh, ưu điểm lớn nhất của chủ nghĩa Tam dân của Tôn Trung Sơn là gì?",
    "a": "Đấu tranh vì dân chủ ta”",
    "b": "Phù hợp với điều kiện thực tế ở nước ta",
    "c": "Chống chế độ tư bản chủ nghĩa",
    "d": "Chống chế độ phong kiến",
    "ans": "b"
  },
  {
    "num": 459,
    "q": "Chọn cụm từ đúng nhất để điền vào chỗ trống: Theo tư tưởng Hồ Chí Minh, “người cách mạng phải có … thì mới gánh được nặng và đi được xa”",
    "a": "Trí tuệ",
    "b": "Lập trường, tư tưởng cách mạng",
    "c": "Đạo đức cách mạng",
    "d": "Phương pháp cách mạng",
    "ans": "c"
  },
  {
    "num": 460,
    "q": "Quá trình hình thành và phát triển tư tưởng Hồ Chí Minh được chia thành mấy giai đoạn?",
    "a": "6 giai đoạn",
    "b": "5 giai đoạn",
    "c": "7 giai đoạn",
    "d": "4 giai đoạn",
    "ans": "b"
  },
  {
    "num": 461,
    "q": "Luận điểm: “Trong lúc này quyền lợi của bộ phận, của giai cấp phải đặt dưới sự sinh tử, tồn vong của quốc gia, của dân tộc. Trong lúc này nếu không giải quyết được vấn đề dân tộc giải phóng, không đòi được độc lập, tự do cho toàn thể dân tộc, thì chẳng những toàn thể quốc gia dân tộc còn chịu mãi kiếp ngựa trâu, mà quyền lợi của bộ phận, giai cấp đến vạn năm cũng không đòi lại được” thể hiện tư tưởng Hồ Chí Minh về vấn đề gì?",
    "a": "Giữ vững độc lập của dân tộc mình, đồng thời tôn trọng độc lập của các dân tộc khác",
    "b": "Giải phóng dân tộc là vấn đề trên hết, trước hết, độc lập dân tộc gắn liền với chủ nghĩa xã hội",
    "c": "Vấn đề dân tộc và vấn đề giai cấp có quan hệ chặt chẽ với nhau Tài l ệu tham khảo môn Triết - Anh Huy",
    "d": "Giải phóng dân tộc tạo tiền đề để giải phóng giai cấp",
    "ans": "d"
  },
  {
    "num": 462,
    "q": "“Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy”. Đoạn trên được trích từ bài viết nào của Hồ Chí Minh",
    "a": "Thư gửi đồng bào Nam Bộ",
    "b": "Thư kêu gọi Tổng khởi nghĩa",
    "c": "Lời kêu gọi toàn quốc kháng chiến",
    "d": "Tuyên ngôn độc lập (1945)",
    "ans": "d"
  },
  {
    "num": 463,
    "q": "Tìm đáp án sai Khái niệm tư tưởng Hồ Chí Minh mà Đại hội IX (2001) nêu lên bao gồm:",
    "a": "Bản chất khoa học và cách mạng của tư tưởng Hồ Chí Minh",
    "b": "Nội dung cơ bản của tư tưởng Hồ Chí Minh",
    "c": "Ý nghĩa của tư tưởng Hồ Chí Minh quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng VN. Cơ sở hình thành tư tưởng HCM: chủ nghĩa Mác Lenin. Ý nghĩa của tư tưởng HCM (đến Đại hội X \u0026 XI mới được nêu lên): là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi",
    "d": "Nguồn gốc tư tưởng, lý luận của tư tưởng Hồ Chí Minh",
    "ans": "c"
  },
  {
    "num": 464,
    "q": "Theo tư tưởng Hồ Chí Minh, ưu điểm lớn nhất của học thuyết Khổng Tử là gì?",
    "a": "Sự tu dưỡng đạo đức cá nhân",
    "b": "Giải phóng con người",
    "c": "Quản lý xã hội bằng đạo đức",
    "d": "Tinh thần hiếu học",
    "ans": "a"
  },
  {
    "num": 465,
    "q": "Luận điểm: “Dân ta có một lòng nồng nàn yêu nước. Đó là một truyền thống quý báu của ta. Từ xưa đến nay, mỗi khi Tổ quốc bị xâm lăng, thì tinh thần ấy lại sôi nổi, nó kết thành một làn sóng vô cùng mạnh mẽ, to lớn, nó lướt qua mọi sự nguy hiểm, khó khăn, nó nhấn chìm tất cả lũ bán nước và cướp nước” là của ai?",
    "a": "Phan Châu Trinh",
    "b": "Phan Bội Châu",
    "c": "Hoàng Hoa Thám",
    "d": "Hồ Chí Minh",
    "ans": "d"
  },
  {
    "num": 466,
    "q": "Theo tư tưởng Hồ Chí Minh: “Văn hóa… cho quốc dân đi”",
    "a": "Dẫn đường",
    "b": "Soi đường",
    "c": "Mở lối",
    "d": "Chỉ đường",
    "ans": "b"
  },
  {
    "num": 467,
    "q": "Theo Hồ Chí Minh, một trong những chuẩn mực đạo đức cao đẹp nhất của con người là?",
    "a": "Có tinh thần quốc tế trong sáng",
    "b": "Cần, kiệm, liêm, chính, chí công vô tư",
    "c": "Yêu thương con người",
    "d": "Trung với nước, hiếu với dân",
    "ans": "c"
  },
  {
    "num": 468,
    "q": "Mục đích của tư tưởng Hồ Chí Minh là gì",
    "a": "Giải phóng dân tộc",
    "b": "Giải phóng giai cấp và giải phóng con người Tài liệu tham khảo môn Triết - Anh Huy Nam mà còn ở tầm thế giới: Giải phóng dân tộc, giải phóng xã hội, giải phóng giai cấp, giải phóng con người",
    "c": "Giải phóng dân tộc, giải phóng giai cấp và giải phóng con người",
    "d": "Giải phóng các dân tộc thuộc địa",
    "ans": "c"
  },
  {
    "num": 469,
    "q": "Chủ trương “ỷ pháp cầu tiến bộ”, khai thông dân trí, nâng cao dân khí trên cơ sở đó mà tính chuyện giải phóng dân tộc là quan điểm của nhà cách mạng nào?",
    "a": "Hàm Nghi",
    "b": "Phan Bội Châu",
    "c": "Tôn Thất Thuyết",
    "d": "Phan Châu Trinh",
    "ans": "d"
  },
  {
    "num": 470,
    "q": "Đoạn trích sau được trích trong tác phẩm nào của Hồ Chí Minh: “Nước Việt Nam có quyền hướng tự do và độc lập, và sự thật đã thành một nước tự do độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy”?",
    "a": "Tuyên ngôn độc lập",
    "b": "Di chúc",
    "c": "Đường cách mệnh",
    "d": "Bản án chế độ thực dân Pháp",
    "ans": "a"
  },
  {
    "num": 471,
    "q": "Thực chất vấn đề dân tộc thuộc địa trong tư tưởng Hồ Chí Minh là",
    "a": "Đòi bình đằng dân tộc",
    "b": "Đấu tranh giải phóng dân tộc khỏi sự áp bức, thống trị của nước ngoài, giành độc lập dân tộc, thành lập nhà nước dân tộc độc lập và đưa đất nước phát triển theo xu thế thời đại",
    "c": "Đòi quyền tự do dân chủ tối thiểu cho nhân dân",
    "d": "Đòi quyền dân tộc tự quyết",
    "ans": "b"
  },
  {
    "num": 472,
    "q": "Cách mạng Tháng Mười Nga nổ ra vào năm nào?",
    "a": "1917",
    "b": "1918",
    "c": "1916",
    "d": "1915",
    "ans": "a"
  },
  {
    "num": 473,
    "q": "Theo tư tưởng Hồ Chí Minh, nền tảng tư tưởng của Đảng phải dựa trên…",
    "a": "Nho giáo",
    "b": "Phật giáo nam cho hành động",
    "c": "Chủ nghĩa Mác – Lenin",
    "d": "Chủ nghĩa Tam dân",
    "ans": "c"
  },
  {
    "num": 474,
    "q": "Khái niệm con người trong tư tưởng Hồ Chí Minh để chỉ …",
    "a": "Con người cụ thể gắn với hoàn cảnh lịch sử cụ thể",
    "b": "Con người nói chung",
    "c": "Một con người cụ thể",
    "d": "Một cộng đồng người",
    "ans": "a"
  },
  {
    "num": 475,
    "q": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc là sự nghiệm đoàn kết của…",
    "a": "Giai cấp công nhân",
    "b": "Giai cấp tư sản và nông dân",
    "c": "Toàn dân tộc trên cơ sở liên minh công – nông",
    "d": "Giai cấp công nhân và giai cấp nông dân Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "c"
  },
  {
    "num": 476,
    "q": "Vấn đề dân tộc trong tư tưởng Hồ Chí Minh trong thời đại cách mạng vô sản là vấn đề…",
    "a": "Dân tộc thuộc địa",
    "b": "Dân tộc nói chung",
    "c": "Dân tộc tư sản",
    "d": "Dân tộc – tộc người",
    "ans": "a"
  },
  {
    "num": 477,
    "q": "Yếu tố nào thuộc nhân tố chủ quan giúp Hồ Chí Minh hình thành nên hệ thống tư tưởng của mình?",
    "a": "Tinh hoa văn hóa nhân loại",
    "b": "Khả năng tư duy và trí tuệ của Hồ Chí Minh",
    "c": "Truyền thống dân tộc",
    "d": "Chủ nghĩa Mác – Lênin",
    "ans": "b"
  },
  {
    "num": 478,
    "q": "Hồ Chí Minh trở về nước sau 30 năm hoạt động khi nào?",
    "a": "9/1943",
    "b": "10/1938",
    "c": "8/1942",
    "d": "1/1941",
    "ans": "d"
  },
  {
    "num": 479,
    "q": "Theo Hồ Chí Minh, để văn hóa phát triển tự do thì phải thực hiện cách mạng gì trước?",
    "a": "Cách mạng kinh tế",
    "b": "Cách mạng chính trị",
    "c": "Cách mạng ruộng đất",
    "d": "Cách mạng văn hóa",
    "ans": "b"
  },
  {
    "num": 480,
    "q": "Vấn đề nào mà giáo trình tư tưởng Hồ Chí Minh chưa nêu khi nói về ý nghĩa học tập môn học này đối với sinh viên?",
    "a": "Bồi dưỡng phẩm chất đạo đức cách mạng và rèn luyện bản lĩnh chính trị",
    "b": "Nâng cao năng lực tư duy lý luận và phương pháp công tác",
    "c": "Bồi dưỡng tình yêu thiên nhiên, ý thức bảo vệ môi trường.",
    "d": "Nâng cao lòng tự hào dân tộc, tự hào về Bác Hồ kính yêu",
    "ans": "c"
  },
  {
    "num": 481,
    "q": "“Tất cả sinh lực của chủ nghĩa tư bản quốc tế đều lấy ở các nước xứ thuộc địa. Đó là nơi chủ nghĩa tư bản lấy nguyên liệu cho các nhà máy của nó, nơi nó đầu tư, tiêu thụ hàng, mộ nhân công rẻ mạt cho đạo quân lao động của nó, và nhất là binh lính bản xứ cho các đạo quân phản cách mạng của nó... nhân dân xứ thuộc địa là những người bị bóc lột tàn tệ nhất”. Câu trích nêu trên Hồ Chí Minh muốn đề cập đến vấn đề gì trong quan điểm về cách mạng giải phóng dân tộc?",
    "a": "Khả năng giành thắng lợi của cách mạng thuộc địa trước cách mạng vô sản chính quốc",
    "b": "Tính chủ động của cách mạng thuộc địa",
    "c": "Khả năng giành thắng lợi của cách mạng vô sản chính quốc.",
    "d": "Mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản chính quốc",
    "ans": "a"
  },
  {
    "num": 482,
    "q": "Luận điểm “Chủ nghĩa dân tộc là động lực lớn của đất nước” của Hồ Chí Minh được trích từ tác phẩm nào? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Đường cách mệnh",
    "b": "Bản án chế độ thực dân Pháp",
    "c": "Báo người cùng khổ",
    "d": "Báo cáo về Bắc kỳ, trung kỳ và nam kỳ",
    "ans": "d"
  },
  {
    "num": 483,
    "q": "Hồ Chí Minh đã đề cập đến đạo đức trong những quan hệ nào của con người?",
    "a": "Đối với người",
    "b": "Cả 3 phương án trên đều đúng",
    "c": "Đối với mình",
    "d": "Đối với việc",
    "ans": "b"
  },
  {
    "num": 484,
    "q": "Tư tưởng Hồ Chí Minh có vị trí như thế nào trong hệ thống tư tưởng Đảng Cộng sản Việt Nam?",
    "a": "Là bộ phận quan trọng trong hệ thống tư tưởng của Đảng",
    "b": "Là bộ phận rất quan trọng trong hệ thống tư tưởng của Đảng",
    "c": "Là bộ phận nền tảng, kim chỉ nam cho hành động của Đảng",
    "d": "Là một bộ phận trong hệ thống tư tưởng của Đảng",
    "ans": "c"
  },
  {
    "num": 485,
    "q": "Theo Hồ Chí Minh, nhiệm vụ hàng đầu, trên hết trước hết của cách mạng Việt Nam là…",
    "a": "Giải phóng dân tộc",
    "b": "Giải phóng giai cấp",
    "c": "Giải phóng phụ nữ Tài liệu t am khảo môn Triết - Anh Huy",
    "d": "Giải phóng con người",
    "ans": "a"
  },
  {
    "num": 486,
    "q": "Theo Hồ Chí Minh, trong nội dung công tác xây dựng Đảng về chính trị, quan trọng nhất là vấn đề gì?",
    "a": "Xây dựng đường lối chính trị",
    "b": "Bảo vệ chính trị",
    "c": "Củng cố lập trường chính trị",
    "d": "Phát triển hệ tư tưởng chính trị",
    "ans": "a"
  },
  {
    "num": 487,
    "q": "Theo Hồ Chí Minh, trong cách mạng giải phóng dân tộc, lực lượng nào được coi là “bầu bạn cách mệnh” của công nông?",
    "a": "Cả 3 phương án trên",
    "b": "Bộ phận địa chủ yêu nước",
    "c": "Giai cấp tư sản dân tộc",
    "d": "Tầng lớp tiểu tư sản – trí thức",
    "ans": "a"
  },
  {
    "num": 488,
    "q": "Định nghĩa văn hóa được Hồ Chí Minh đưa ra khi nào?",
    "a": "9/1942",
    "b": "12/1944",
    "c": "8/1943",
    "d": "5/1941",
    "ans": "c"
  },
  {
    "num": 489,
    "q": "Trong Năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc, Hồ Chí Minh chủ trương xây dựng vấn đề luân lý với nội dung gì?",
    "a": "Dân quyền",
    "b": "Dân chủ",
    "c": "Tinh thần độc lập, tự cường",
    "d": "Biết hy sinh mình, làm lợi cho quần chúng",
    "ans": "d"
  },
  {
    "num": 490,
    "q": "Quan điểm: Mặt trận dân tộc thống nhất phải được xây dựng trên nền tảng khối liên minh công – nông – trí thức, đặt dưới sự lãnh đạo của Đảng, thể hiện tư tưởng Hồ Chí Minh về nội dung gì?",
    "a": "Nguyên tắc xây dựng và hoạt động của Mặt trận dân tộc thống nhất",
    "b": "Phương thức hoạt động của Mặt trận dân tộc thống nhất",
    "c": "Vai trò của mặt trận dân tộc thống nhất",
    "d": "Chức năng của Mặt trận dân tộc thống nhất",
    "ans": "a"
  },
  {
    "num": 491,
    "q": "Hồ Chí Minh tham gia sáng lập hội liên hiệp thuộc địa vào năm nào?",
    "a": "1923",
    "b": "1922",
    "c": "1921",
    "d": "1924",
    "ans": "c"
  },
  {
    "num": 492,
    "q": "Hồ Chí Minh khẳng định: “…Nọc độc và sức sống của con rắn độc Tư bản chủ nghĩa đang tập trung ở thuộc địa…đánh rắn thì phải đánh ở đằng đầu”. Câu trích nêu trên Hồ Chí Minh muốn đề cập đến vấn đề gì trong quan điểm về vấn đề dân tộc?",
    "a": "Tính sáng tạo của cách mạng thuộc địa",
    "b": "Khả năng chủ động và giành thắng lợi của cách mạng thuộc địa so với cách mạng vô sản chính quốc",
    "c": "Phương pháp thực hiện cách mạng ở các nước thuộc địa",
    "d": "Động lực của cách mạng thuộc địa",
    "ans": "b"
  },
  {
    "num": 493,
    "q": "Ai là người bàn nhiều về cuộc đấu tranh chống chủ nghĩa đế quốc?",
    "a": "Ph. Ăngghen",
    "b": "V.I.Lênin",
    "c": "Hồ Chí Minh",
    "d": "C.Mác",
    "ans": "b"
  },
  {
    "num": 494,
    "q": "Trong quá trình xây dựng nền văn hóa giáo dục ở Việt Nam, Hồ Chí Minh đã đưa ra một hệ thống quan điểm định hướng cho nền giáo dục phát triển đúng hướng. Quan điểm nào dưới đây không phải của Hồ Chí Minh?",
    "a": "Kết quả giáo dục.",
    "b": "Mục tiêu văn hóa giáo dục.",
    "c": "Phương châm, phương pháp giáo dục. triển của xã hội. Với sứ mệnh “Trồng người”, văn hóa giáo dục đào tạo con người mới, cán bộ mới, nguồn nhân lực chất lượng cao cho sự nghiệp cách mạng",
    "d": "Nội dung giáo dục.",
    "ans": "a"
  },
  {
    "num": 495,
    "q": "Trong Năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc, Hồ Chí Minh chủ trương xây dựng vấn đề xã hội với nội dung gì?",
    "a": "Biết hy sinh mình, làm lợi cho quần chúng",
    "b": "Tinh thần độc lập, tự cường",
    "c": "Mọi sự nghiệp phúc lợi của nhân dân",
    "d": "Dân chủ",
    "ans": "c"
  },
  {
    "num": 496,
    "q": "Đảng cộng sản Việt Nam trở thành Đảng cầm quyền khi nào?",
    "a": "1930",
    "b": "1945",
    "c": "1954",
    "d": "1975 lái con thuyền cách mạng Việt Nam ngay từ khi ra đời đã trở thành đảng cầm quyền",
    "ans": "b"
  },
  {
    "num": 497,
    "q": "Theo Hồ Chí Minh, đoàn kết dân tộc là đoàn kết những ai?",
    "a": "Đoàn kết tất công nhân – nông dân và các tầng lớp nhân dân lao động khác",
    "b": "Đoàn kết những người Việt Nam yêu nước",
    "c": "Đoàn kết giai cấp công nhân và giai cấp nông dân",
    "d": "Đoàn kết liên minh công – nông – trí",
    "ans": "b"
  },
  {
    "num": 498,
    "q": "Hồ Chí Minh viết: “Trong cuộc đấu tranh gian khổ chống kẻ thù của giai cấp và của dân tộc, cần phải dùng Bạo lực cách mạng chống lại bạo lực phản cách mạng, giành lấy chính quyền và bảo vệ chính quyền”. Câu trích nêu trên Hồ Chí Minh muốn đề cập tới vấn đề gì trong quan điểm về Cách mạng giải phóng dân tộc?",
    "a": "Bạo lực cách mạng là phương thức phổ biến Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "Cách thức thể hiện của bạo lực cách mạng",
    "c": "Hình thái của bạo lực cách mạng",
    "d": "Tính tất yếu của bạo lực cách mạng",
    "ans": "d"
  },
  {
    "num": 499,
    "q": "Đại hội VI Quốc tế cộng sản đã thông qua “Những luận cương về phong trào cách mạng trong các nước thuộc địa và nửa thuộc địa” vào năm nào?",
    "a": "1926",
    "b": "1928",
    "c": "1927",
    "d": "1929",
    "ans": "b"
  },
  {
    "num": 500,
    "q": "Luận điểm sau của Hồ Chí Minh nhằm đề cập đến vấn đề gì trong cách mạng giải phóng dân tộc: “Làm cho các dân tộc thuộc địa, từ trước đến nay vẫn cách biệt nhau, hiểu biết nhau hơn và đoàn kết lại để đặt cơ sở cho một Liên minh phương Đông tương lai, khối liên minh này sẽ là một trong những cái cánh của cách mạng vô sản”?",
    "a": "Cách mạng giải phóng muốn thắng lợi phải đi theo con đường cách mạng vô sản",
    "b": "Cách mạng giải phóng dân tộc cần được tiến hành chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc",
    "c": "Cách mạng giải phóng dân tộc trong thời đại mới phải do Đảng cộng sản lãnh đạo",
    "d": "Cách mạng giải phóng phải được thực hiện bằng con đường bạo lực cách mạng phóng dân tộc dẫn tới phá tan hệ thống thuộc địa của chủ nghĩa thực dân, được thế giới tôn vinh là anh hung giải phóng dân tộc trong thời đại ngày nay",
    "ans": "b"
  },
  {
    "num": 501,
    "q": "Thuật ngữ Đảng cầm quyền được Hồ Chí Minh đưa ra trong tác phẩm nào?",
    "a": "Di chúc",
    "b": "Đường cách mệnh",
    "c": "Tuyên ngôn độc lập",
    "d": "Cương lĩnh chính trị đầu tiên",
    "ans": "a"
  },
  {
    "num": 502,
    "q": "Trong Năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc, Hồ Chí Minh chủ trương xây dựng vấn đề chính trị với nội dung gì?",
    "a": "Dân quyền",
    "b": "Dân chủ",
    "c": "Biết hy sinh mình, làm lợi cho quần chúng",
    "d": "Tinh thần độc lập, tự cường",
    "ans": "a"
  },
  {
    "num": 503,
    "q": "Luận điểm: “Văn hóa không thể đứng ngoài mà phải ở trong kinh tế và chính trị, phải phục vụ nhiệm vụ chính trị và thúc đẩy sự phát triển của kinh tế” thể hiện tư tưởng Hồ Chí Minh về vấn đề gì?",
    "a": "Cả 3 phương án trên",
    "b": "Chức năng của văn hóa",
    "c": "Tính chất của văn hóa",
    "d": "Vị trí, vai trò của văn hóa",
    "ans": "d"
  },
  {
    "num": 504,
    "q": "Trong quan điểm của Hồ Chí Minh về chiến lược trồng người. Luận điểm nào dưới đây không đúng với tư tưởng Hồ Chí Minh?",
    "a": "Trồng người là yêu cầu khách quan, vừa cấp bách, vừa lâu dài của cách mạng. chiến lược phát triển kinh tế xã hội",
    "b": "Chiến lược trồng người là yếu tố tiên quyết đối với sự phát triển đất nước.",
    "c": "Chiến lược trồng người là một trọng tâm, một bộ phận hợp thành của chiến lược phát triển kinh tế xã hội.",
    "d": "Muốn xây dựng chủ nghĩa xã hội, trước hết phải có con người xã hội chủ nghĩa. Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "c"
  },
  {
    "num": 505,
    "q": "Theo Hồ Chí Minh, “liêm” có nghĩa là?",
    "a": "Không tham lam",
    "b": "Cả 3 phương án trên",
    "c": "Trong sạch",
    "d": "Tôn trọng của công, tôn trọng của dân",
    "ans": "b"
  },
  {
    "num": 506,
    "q": "Trong quá trình tìm tòi con đường cứu nước, tại sao Hồ Chí Minh không lựa chọn đi theo con đường cách mạng của các nước Anh, Pháp, Mỹ?",
    "a": "Các cuộc cách mạng này diễn ra ở phương Tây nên không phù hợp với xã hội phương Đông",
    "b": "Đây là các cuộc cách mạng dưới sự lãnh đạo của giai cấp tư sản",
    "c": "Đây là các cuộc cách mạng không tiên tiến",
    "d": "Đây là những cuộc cách mạng không đến nơi không đến nơi,…",
    "ans": "d"
  },
  {
    "num": 507,
    "q": "Theo Hồ Chí Minh, điều kiện để thực hiện đại đoàn kết dân tộc là?",
    "a": "Phải có lòng khoan dung, độ lượng với con người",
    "b": "Phải có niềm tin vào nhân dân",
    "c": "Phải kế thừa truyền thống yêu nước – nhân nghĩa – đoàn kết của dân tộc",
    "d": "Cả 3 phương án trên",
    "ans": "d"
  },
  {
    "num": 508,
    "q": "Luận điểm: “Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộn sản” được trích trong tác phẩm nào của Hồ Chí Minh?",
    "a": "Di chúc",
    "b": "Cương lĩnh chính trị đầu tiên",
    "c": "Bản án chế độ thực dân Pháp",
    "d": "Đường cách mệnh cách mạng VN:…",
    "ans": "b"
  },
  {
    "num": 509,
    "q": "Trong Năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc, Hồ Chí Minh chủ trương xây dựng vấn đề tâm lý với nội dung gì?",
    "a": "Dân quyền",
    "b": "Dân chủ",
    "c": "Biết hy sinh mình, làm lợi cho quần chúng",
    "d": "Tinh thần độc lập, tự cường",
    "ans": "d"
  },
  {
    "num": 510,
    "q": "Đảng ta khẳng định: Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động tại Đại hội Đảng toàn quốc lần thứ mấy?",
    "a": "Đại hội Đảng toàn quốc lần thứ VIII (1996) Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "Đại hội Đảng toàn quốc lần thứ VII (1991)",
    "c": "Đại hội Đảng toàn quốc lần thứ IX (2001).",
    "d": "Đại hội Đảng toàn quốc lần thứ VI (1986).",
    "ans": "b"
  },
  {
    "num": 511,
    "q": "Luận điểm “Văn hóa soi đường cho quốc dân đi”của Hồ Chí Minh là muốn nói đến vấn đề chung nào của văn hóa?",
    "a": "Tính chất của văn hóa",
    "b": "Vai trò của văn hóa",
    "c": "Vị trí của văn hóa",
    "d": "Chức năng của văn hóa",
    "ans": "b"
  },
  {
    "num": 512,
    "q": "“Công nông là tay không, chân không rồi, nếu thua thì chỉ mất một kiếp khổ, nếu được thì được cả thế giới, cho nên họ gan góc”. Câu trích nêu trên Hồ Chí Minh muốn đề cập đến vấn đề gì trong quan điểm về cách mạng giải phóng dân tộc?",
    "a": "Tinh thần cách mạng triệt để của giai cấp công nhân, nông dân ở Việt Nam",
    "b": "Nguồn gốc của giai cấp công nhân.",
    "c": "Ý thức tự giác cách mạng của công nông",
    "d": "Công nông là lực lượng cách mạng đông đảo nhất.",
    "ans": "a"
  },
  {
    "num": 513,
    "q": "Thực chất của vấn đề dân tộc thuộc địa trong tư tưởng Hồ Chí Minh là gì?",
    "a": "Đấu tranh chống lại giai cấp tư sản ở thuộc địa",
    "b": "Lật đổ sự thống trị của giai cấp địa chủ phong kiến, mang lại ruộng đất cho dân cày",
    "c": "Đấu tranh chống chủ nghĩa thực dân, giải phóng dân tộc",
    "d": "Đấu tranh giải phóng giai cấp, mang lại tự do thực sự cho giai cấp công nhân",
    "ans": "c"
  },
  {
    "num": 514,
    "q": "Hồ Chí Minh khẳng định: \"Lực lượng của giai cấp công nhân và nhân dân lao động là to lớn, vô cùng, vô tận, nhưng lực lượng ấy cần có Đảng mới thắng lợi\". Câu này thể hiện quan điểm nào của Hồ Chí Minh về Đảng?",
    "a": "Đảng cộng sản lấy chủ nghĩa Mác – Lênin làm \"cốt\".",
    "b": "ĐCSVN – Đảng của giai cấp công nhân, nhân dân lao động và của cả dân tộc.",
    "c": "Đảng cộng sản là nhân tố hàng đầu đưa tới thắng lợi của cách mạng Việt Nam.",
    "d": "Tăng cường củng cố mối quan hệ bền chặt giữa Đảng và dân.",
    "ans": "c"
  },
  {
    "num": 515,
    "q": "Trong các luận điểm sau đây, luận điểm nào của Hồ Chí Minh?",
    "a": "“Tất cả dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do”.",
    "b": "“Quyền tự nhiên của con người là quyền sống, quyền tự do, quyền tư hữu “",
    "c": "“Người ta sinh ra tự do và bình đẳng về quyền lợi và phải luôn luôn được tự do và bình đẳng về quyền lợi”.",
    "d": "“Tất cả mọi người đều sinh ra có quyền bình đẳng.Tạo hóa cho họ những quyền không ai có thể xâm phạm được:trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc”.",
    "ans": "a"
  },
  {
    "num": 516,
    "q": "Luận điểm: “Sự giải phóng của giai cấp công nhân phải là sự nghiệp của bản thân giai cấp công nhân” là của ai?",
    "a": "Hồ Chí Minh",
    "b": "Ph. Ănghen",
    "c": "V.I. Lênin",
    "d": "C.Mác",
    "ans": "d"
  },
  {
    "num": 517,
    "q": "Luận điểm sau được trích trong tác phẩm nào của Hồ Chí Minh: “Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thì thuyền mới chạy”?",
    "a": "Di chúc",
    "b": "Bản án chế độ thực dân Pháp Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Đường cách mệnh",
    "d": "Tuyên ngôn độc lập",
    "ans": "c"
  },
  {
    "num": 518,
    "q": "Mặt trận Việt Minh ra đời khi nào?",
    "a": "1936",
    "b": "1941",
    "c": "1930",
    "d": "1939",
    "ans": "b"
  },
  {
    "num": 519,
    "q": "Luận điểm sau của Hồ Chí Minh: “Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh,để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững cách mệnh mới thành công cũng như người cầm lái có vững thuyền mới chạy” được trích trong tác phẩm nào?",
    "a": "Tuyên ngôn độc lập",
    "b": "Đường cách mệnh",
    "c": "Ba mươi năm hoạt động của Đảng",
    "d": "Cương lĩnh chính trị đầu tiên",
    "ans": "b"
  },
  {
    "num": 520,
    "q": "Theo Hồ Chí Minh, “gốc của mọi công việc” là?",
    "a": "Đạo đức",
    "b": "Cán bộ",
    "c": "Tài năng",
    "d": "Lãnh đạo",
    "ans": "b"
  },
  {
    "num": 521,
    "q": "Nguyên tắc tập trung dân chủ là nguyên tắc gì của Đảng cộng sản?",
    "a": "Nguyên tắc tổ chức",
    "b": "Nguyên tắc sinh hoạt",
    "c": "Nguyên tắc lãnh đạo",
    "d": "Nguyên tắc phê bình",
    "ans": "a"
  },
  {
    "num": 522,
    "q": "Theo Hồ Chí Minh, để tiêu diệt bệnh tham ô, lãng phí, trước hết cần tẩy sạch căn bệnh nào?",
    "a": "Đặc quyền vậy, đây là bệnh gốc sinh ra các bệnh tham ô, lãng phí; muốn trừ sạch bệnh tham ô, lãng phí thì trước hết phải tẩy sạch bệnh quan liêu",
    "b": "Quan liêu",
    "c": "Tư túng",
    "d": "Kiêu ngạo",
    "ans": "b"
  },
  {
    "num": 523,
    "q": "Luận điểm: “Nói chung thì các dân tộc phương Đông đều giàu tình cảm, và đối với họ một tấm gương sống còn giá trị hơn một trăm bài diễn văn tuyên truyền” đề cập đến nội dung gì trong tư tưởng Hồ Chí Minh?",
    "a": "Các nguyên tắc rèn luyện đạo đức",
    "b": "Vai trò của đạo đức cách mạng Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Chức năng của đạo đức",
    "d": "Các chuẩn mực đạo đức mới",
    "ans": "a"
  },
  {
    "num": 524,
    "q": "Luận điểm sau của Hồ Chí Minh: “Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh,để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững cách mệnh mới thành công cũng như người cầm lái có vững thuyền mới chạy” thể hiện nội dung tư tưởng Hồ Chí Minh về?",
    "a": "Quan niệm về Đảng cầm quyền",
    "b": "Vai trò của Đảng cộng sản Việt Nam",
    "c": "Bản chất của Đảng cộng sản Việt Nam",
    "d": "Sự ra đời của Đảng cộng sản Việt Nam",
    "ans": "b"
  },
  {
    "num": 525,
    "q": "Theo Hồ Chí Minh, căn bệnh nào là căn bệnh gốc sinh ra bệnh tham ô, lãng phí?",
    "a": "Tư túng",
    "b": "Kiêu ngạo",
    "c": "Quan liêu",
    "d": "Đặc quyền vậy, đây là bệnh gốc sinh ra các bệnh tham ô, lãng phí; muốn trừ sạch bệnh tham ô, lãng phí thì trước hết phải tẩy sạch bệnh quan liêu",
    "ans": "c"
  },
  {
    "num": 526,
    "q": "Theo quan điểm của Hồ Chí Minh thì “Dân chủ” được hiểu như thế nào?",
    "a": "Quan chủ",
    "b": "Quyền lực nằm trong tay nhà nước",
    "c": "Dân là chủ, dân làm chủ",
    "d": "Nhân dân được tự do",
    "ans": "c"
  },
  {
    "num": 527,
    "q": "Theo Hồ Chí Minh ở Việt Nam và các nước thuộc địa cần tiến hành cuộc cách mạng nào trước?",
    "a": "Cách mạng giải phóng con người một cách toàn diện",
    "b": "Cách mạng giải phóng dân tộc",
    "c": "Cách mạng giải phóng giai cấp",
    "d": "Cách mạng xã hội chủ nghĩa",
    "ans": "b"
  },
  {
    "num": 528,
    "q": "Theo Hồ Chí Minh, “kiệm” có nghĩa là?",
    "a": "Cả 3 phương án trên",
    "b": "Không bừa bãi",
    "c": "Không xa xỉ",
    "d": "Không hoang phí",
    "ans": "a"
  },
  {
    "num": 529,
    "q": "Theo Hồ Chí Minh, hiệp thương dân chủ là nguyên tắc hoạt động của tổ chức nào?",
    "a": "Mặt trận dân tộc thống nhất",
    "b": "Nhà nước",
    "c": "Đảng cộng sản",
    "d": "Tổng liên đoàn lao động",
    "ans": "a"
  },
  {
    "num": 530,
    "q": "Theo Hồ Chí Minh, trong xây dựng Đảng cần tuân thủ những nguyên tắc nào?",
    "a": "Tập trung dân chủ",
    "b": "Tập thể lãnh đạo, cá nhân phụ trách",
    "c": "Cả 3 phương án trên",
    "d": "Tự phê bình và phê bình Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "c"
  },
  {
    "num": 531,
    "q": "Luận điểm: “Đảng cầm quyền, dân là chủ” thể hiện tư tưởng Hồ Chí Minh về vấn đề gì?",
    "a": "Lý tưởng của Đảng cầm quyền",
    "b": "Mối quan hệ giữa Đảng với dân",
    "c": "Vai trò của Đảng cộng sản Việt Nam",
    "d": "Bản chất của Đảng cộng sản Việt Nam",
    "ans": "b"
  },
  {
    "num": 532,
    "q": "Mâu thuẫn chủ yếu trong xã hội thuộc địa phương Đông là mâu thuẫn gì?",
    "a": "Mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản",
    "b": "Mâu thuẫn giữa dân tộc bị áp bức với giai cấp tư sản bản xứ",
    "c": "Mâu thuẫn giữa dân tộc bị áp bức với chủ nghĩa thực dân",
    "d": "Mâu thuẫn giữa giai cấp nông dân và giai cấp địa chủ",
    "ans": "c"
  },
  {
    "num": 533,
    "q": "Luận điểm: “Đảng vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của nhân dân” thuộc nội dung tư tưởng Hồ Chí Minh về?",
    "a": "Bản chất của Đảng cộng sản Việt Nam",
    "b": "Về sự ra đời của Đảng cộng sản Việt Nam",
    "c": "Quan niệm về Đảng cộng sản Việt Nam cầm quyền",
    "d": "Vai trò của Đảng cộng sản Việt Nam",
    "ans": "c"
  },
  {
    "num": 534,
    "q": "Theo Hồ Chí Minh, Đảng cộng sản Việt Nam ra đời là sự kết hợp của những nhân tố nào?",
    "a": "Chủ nghĩa Mác - Lênin và phong trào yêu nước",
    "b": "Chủ nghĩa Mác – Lênin, phong trào công nhân và phong trào yêu nước",
    "c": "Phong trào công nhân và phong trào yêu nước",
    "d": "Chủ nghĩa Mác - Lênin và phong trào công nhân",
    "ans": "b"
  },
  {
    "num": 535,
    "q": "Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam. Những vấn đề đó thuộc phạm vi nào?",
    "a": "Trong cách mạng xã hội chủ nghĩa.",
    "b": "Cả trong cách mạng dân tộc dân chủ nhân dân và cách mạng xã hội chủ nghĩa.",
    "c": "Trong thế kỷ XX",
    "d": "Trong cách mạng dân tộc dân chủ nhân dân.",
    "ans": "b"
  },
  {
    "num": 536,
    "q": "Định nghĩa văn hóa được Hồ Chí Minh đưa ra trong tác phẩm nào?",
    "a": "Bản án chế độ thực dân Pháp",
    "b": "Đời sống mới",
    "c": "Đường cách mệnh",
    "d": "Nhật ký trong tù",
    "ans": "d"
  },
  {
    "num": 537,
    "q": "Hồ Chí Minh khẳng định Đảng cộng sản Việt Nam ra đời là sự kết hợp của 3 nhân tố: chủ nghĩa Mác - Lênin, phong trào công nhân, phong trào yêu nước trong tác phẩm nào?",
    "a": "Ba mươi năm hoạt động của Đảng",
    "b": "Cương lĩnh chính trị đầu tiên",
    "c": "Tuyên ngôn độc lập",
    "d": "Đường cách mệnh Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "a"
  },
  {
    "num": 538,
    "q": "Trong quá trình Đảng lấy chủ nghĩa Mác - Lênin làm “cốt”, theo Hồ Chí Minh cần lưu ý những vấn đề gì?",
    "a": "Củng cố lập trường chính trị của Đảng",
    "b": "Không ngừng tổng kết kinh nghiệm của Đảng mình, học tập kinh nghiệm của các Đảng cộng sản anh em",
    "c": "Đảng phải tuyệt đối tuân thủ các chân lý tuyệt đối của chủ nghĩa Mác - Lênin luôn sáng tạo, vận dụng cho phù hợp với hoàn cảnh, từng lúc, từng nơi, không được phép giáo điều",
    "d": "Củng cố mối quan hệ mật thiết giữa Đảng với dân",
    "ans": "b"
  },
  {
    "num": 539,
    "q": "Luận điểm sau đây thuộc tác phẩm nào của Hồ Chí Minh: “Ở nước ta chính quyền là của dân, do nhân dân làm chủ”?",
    "a": "Di chúc",
    "b": "Thường thức chính trị",
    "c": "Tuyên ngôn độc lập",
    "d": "Cương lĩnh chính trị đầu tiên",
    "ans": "b"
  },
  {
    "num": 540,
    "q": "Luận điểm của Hồ Chí Minh khẳng định: “Hai thứ Cách mạng tuy có khác nhau, nhưng có mối quan hệ chặt chẽ với nhau”. Người muốn nói về mối quan hệ của cuộc cách mạng nào?",
    "a": "Cách mạng giải phóng dân tộc ở thuộc địa và cách mạng vô sản ở chính quốc",
    "b": "Cách mạng giải phóng giai cấp ở chính quốc và giải phóng con người trong chủ nghĩa tư bản",
    "c": "Cách mạng giải phóng giai cấp và dân tộc trong chủ nghĩa tư bản",
    "d": "Cách mạng giải phóng giai cấp ở thuộc địa và cách mạng tư sản ở chính quốc",
    "ans": "a"
  },
  {
    "num": 541,
    "q": "“Không! Chúng ta thà hi sinh tất cả chứ không chịu mất nước, chứ không chịu làm nô lệ”. Đoạn trên được trích từ bài viết nào của Hồ Chí Minh",
    "a": "Lời kêu gọi toàn quốc kháng chiến",
    "b": "Tuyên ngôn độc lập (1945)",
    "c": "Thư kêu gọi Tổng khởi nghĩa",
    "d": "Thư gửi đồng bào Nam Bộ",
    "ans": "a"
  },
  {
    "num": 542,
    "q": "Theo Hồ Chí Minh, Đảng cộng sản Việt Nam ra đời là sự kết hợp của mấy nhân tố?",
    "a": "5 nhân tố",
    "b": "2 nhân tố",
    "c": "4 nhân tố",
    "d": "3 nhân tố",
    "ans": "d"
  },
  {
    "num": 543,
    "q": "\"Chế độ ta là chế độ dân chủ, tư tưởng phải được tự do. Tự do là thế nào? Đối với mọi vấn đề, mọi người tự do bày tỏ ý kiến của mình, góp phần tìm ra chân lý. Đó là quyền lợi và nghĩa vụ của mọi người. Khi mọi người đã tìm ra chân lý, lúc đó quyền tự do tư tưởng hóa ra quyền tự do phục tùng chân lý\", trong đoạn trích nêu trên Hồ Chí Minh đề cập tới vấn đề gì trong nguyên tắc xây dựng đảng?",
    "a": "Tự do hành động",
    "b": "Tự do chân lý",
    "c": "Mối quan hệ giữa tập thể lãnh đạo và cá nhân phụ trách",
    "d": "Mối quan hệ giữa tập trung và dân chủ",
    "ans": "d"
  },
  {
    "num": 544,
    "q": "Theo Hồ Chí Minh, hiệp thương dân chủ là nguyên tắc hoạt động của tổ chức nào?",
    "a": "Nhà nước",
    "b": "Mặt trận dân tộc thống nhất",
    "c": "Đảng cộng sản",
    "d": "Tổng liên đoàn lao động Tài liệu t am khảo môn Triết - Anh Huy",
    "ans": "b"
  },
  {
    "num": 545,
    "q": "Luận điểm: “Dù phải hy sinh tới đâu, dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập” được Hồ Chí Minh đưa ra khi nào?",
    "a": "8/1945",
    "b": "5/1941",
    "c": "12/1944",
    "d": "1/1941",
    "ans": "a"
  },
  {
    "num": 546,
    "q": "Nhà nước dân chủ do Hồ Chí Minh sáng lập ở Việt Nam là nhà nước gì?",
    "a": "Nhà nước Việt Nam dân chủ cộng hòa",
    "b": "Nhà nước cộng hòa",
    "c": "Nhà nước dân tộc cách mạng",
    "d": "Nhà nước chuyên chính vô sản",
    "ans": "a"
  },
  {
    "num": 547,
    "q": "Luận điểm: “Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do” được trích trong tác phẩm nào của Hồ Chí Minh?",
    "a": "Bản án chế độ thực dân Pháp",
    "b": "Tuyên ngôn độc lập",
    "c": "Đường cách mệnh",
    "d": "Di chúc",
    "ans": "b"
  },
  {
    "num": 548,
    "q": "Theo Hồ Chí Minh, công tác gốc của Đảng là?",
    "a": "Công tác chính trị",
    "b": "Công tác phê bình",
    "c": "Công tác lý luận",
    "d": "Công tác cán bộ",
    "ans": "d"
  },
  {
    "num": 549,
    "q": "Nội dung “bồi dưỡng những phẩm chất, phong cách và lối sống tốt đẹp, lành mạnh, hướng con người đến chân, thiện mỹ để hoàn thiện bản thân” thuộc vấn đề gì của văn hóa?",
    "a": "Tính chất của văn hóa",
    "b": "Vai trò của văn hóa",
    "c": "Vị trí của văn hóa",
    "d": "Chức năng của văn hóa",
    "ans": "d"
  },
  {
    "num": 550,
    "q": "Trong tác phẩm Đường cách mệnh, Hồ Chí Minh cho rằng muốn làm cách mạng thì trước hết phải có?",
    "a": "Phương pháp cách mạng",
    "b": "Cả 3 phương án trên",
    "c": "Lực lượng cách mạng",
    "d": "Đảng cách mạng liên lạc với các dân tộc bị áp bức và vô sản giai cấp mọi nơi",
    "ans": "d"
  },
  {
    "num": 551,
    "q": "Tư tưởng Hồ Chí Minh về đoàn kết là đặt cơ sở cho việc hình thành mấy tầng mặt trận đoàn kết?",
    "a": "5 tầng mặt trận Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "6 tầng mặt trận",
    "c": "4 tầng mặt trận",
    "d": "3 tầng mặt trận",
    "ans": "c"
  },
  {
    "num": 552,
    "q": "Tư tưởng về xây dựng một nhà nước mới ở Việt Nam là một nhà nước do nhân dân lao động làm chủ là của ai?",
    "a": "Huỳnh Thúc Kháng",
    "b": "Phan Bội Châu",
    "c": "Hồ Chí Minh",
    "d": "Phan Chu Trinh",
    "ans": "c"
  },
  {
    "num": 553,
    "q": "Nội dung nào sau đây không thuộc quan điểm Hồ Chí Minh về văn hóa văn nghệ?",
    "a": "Phải có những tác phẩm văn nghệ xứng đáng với thời đại mới.",
    "b": "Ngòi bút và các tác phẩm là vũ khí.",
    "c": "Văn nghệ phải phục vụ cho đại chúng.",
    "d": "Văn hóa văn nghệ là một mặt trận.",
    "ans": "a"
  },
  {
    "num": 554,
    "q": "Hồ Chí Minh coi những căn bệnh nào là “bạn đồng minh của thực dân và phong kiến”?",
    "a": "Tham ô, lãng phí, quan liêu",
    "b": "Tư túng, kiêu ngạo, chia rẽ",
    "c": "Đặc quyền, đặc lợi",
    "d": "Cả 3 phương án trên",
    "ans": "a"
  },
  {
    "num": 555,
    "q": "Tác phẩm “Đường cách mệnh” của Hồ Chí Minh được xuất bản khi nào?",
    "a": "1924",
    "b": "1927",
    "c": "1930",
    "d": "1925",
    "ans": "b"
  },
  {
    "num": 556,
    "q": "Trong cách mạng giải phóng dân tộc, Hồ Chí Minh coi giai cấp nào đóng vai trò động lực cách mạng?",
    "a": "Giai cấp tư sản dân tộc",
    "b": "Giai cấp công nhân",
    "c": "Giai cấp nông dân",
    "d": "Giai cấp công nhân và giai cấp nông dân",
    "ans": "d"
  },
  {
    "num": 557,
    "q": "“Đồng bào Nam Bộ là dân nước Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi”. Đoạn trên được trích từ bài viết nào của Hồ Chí Minh",
    "a": "Lời kêu gọi toàn quốc kháng chiến",
    "b": "Thư gửi đồng bào Nam Bộ",
    "c": "Tuyên ngôn độc lập (1945)",
    "d": "Thư kêu gọi Tổng khởi nghĩa",
    "ans": "b"
  },
  {
    "num": 558,
    "q": "Theo Hồ Chí Minh, “cần” có nghĩa là?",
    "a": "Siêng năng, chăm chỉ Tài li u tham khảo môn Triết - Anh Huy",
    "b": "Cả 3 phương án trên",
    "c": "Lao động có kế hoạch",
    "d": "Lao động có hiệu quả",
    "ans": "b"
  },
  {
    "num": 559,
    "q": "Truyền thống quý báu nhất của dân tộc Việt Nam được Chủ tịch Hồ Chí Minh kế thừa và phát triển là gì?",
    "a": "Chủ nghĩa yêu nước",
    "b": "Lòng nhân ái",
    "c": "Cần cù lao động.",
    "d": "Tinh thần hiếu học",
    "ans": "a"
  },
  {
    "num": 560,
    "q": "Theo Hồ Chí Minh, Trung thành với sự nghiệp dựng nước, giữ nước, trung thành với con đường đi lên của đất nước; suốt đời phấn đấu cho Đảng, cách mạng, thuộc phẩm chất đạo đức nào?",
    "a": "Cần, kiệm, liêm, chính, chí công vô tư",
    "b": "Yêu thương con người",
    "c": "Có tinh thần quốc tế trong sáng",
    "d": "Trung với nước, hiếu với dân",
    "ans": "d"
  },
  {
    "num": 561,
    "q": "Hội nghị lần thứ tám Ban Chấp hành Trung ương Đảng do Nguyễn Ái Quốc chủ trì diễn ra khi nào?",
    "a": "8/1945",
    "b": "5/1941",
    "c": "1/1941",
    "d": "12/1944",
    "ans": "b"
  },
  {
    "num": 562,
    "q": "Luận điểm sau của Hồ Chí Minh: “Trong giai đoạn này quyền lợi của giai cấp công nhân và nhân dân lao động và của dân tộc là một. Chính vì Đảng Lao động Việt Nam là Đảng của giai cấp công nhân và nhân dân lao động, cho nên nó phải là Đảng của dân tộc Việt Nam” thể hiện nội dung tư tưởng Hồ Chí Minh về?",
    "a": "Sự ra đời của Đảng cộng sản Việt Nam",
    "b": "Bản chất của Đảng cộng sản Việt Nam",
    "c": "Quan niệm về Đảng cầm quyền",
    "d": "Vai trò của Đảng cộng sản Việt Nam",
    "ans": "b"
  },
  {
    "num": 563,
    "q": "Theo Hồ Chí Minh, Đảng cộng sản Việt Nam phải lấy chủ nghĩa Mác - Lênin làm “cốt” có nghĩa là?",
    "a": "Đảng cộng sản phải thường xuyên nâng cao nhận thức chủ nghĩa Mác – Lênin",
    "b": "Đảng phải lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng",
    "c": "Đảng cộng sản phải lấy chủ nghĩa Mác - Lênin làm học thuyết của Đảng",
    "d": "Đảng cộng sản phải lấy chủ nghĩa Mác - Lênin làm chủ trương, đường lối",
    "ans": "b"
  },
  {
    "num": 564,
    "q": "Theo Hồ Chí Minh, giải phóng con người là giải phóng như thế nào?",
    "a": "Giải phóng con người về kinh tế, chính trị",
    "b": "Giải phóng con người khỏi áp bức, bất công",
    "c": "Giải phóng con người về chính trị, văn hóa",
    "d": "Giải phóng con người về kinh tế, văn hóa Tài liệu th m khảo môn Triết - Anh Huy",
    "ans": "b"
  },
  {
    "num": 565,
    "q": "Hồ Chí Minh được UNESCO tôn vinh Anh hùng dân tộc và nhà văn hóa kiệt xuất ở Việt Nam năm nào?",
    "a": "1986.",
    "b": "1984.",
    "c": "1987.",
    "d": "1988 (11/1987) đã khẳng định: “Chủ tịch Hồ Chí Minh là Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam”",
    "ans": "c"
  },
  {
    "num": 566,
    "q": "“… Tiết kiệm không phải là bủn xỉn, không phải là “xem đồng tiền to bằng cái nống”, gặp việc đáng làm cũng không làm, đáng tiêu cũng không tiêu… Nói theo lối khoa học, thì tiết kiệm là tích cực, chứ không phải tiêu cực”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Thực hành tiết kiệm, chống tham ô, lãng phí, chống bệnh quan liêu (5/152)",
    "b": "Cần, kiệm, liêm, chính (6/1949)",
    "c": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969)",
    "d": "Cần tẩy sạch bệnh quan liêu, mệnh lệnh (9/1951)",
    "ans": "a"
  },
  {
    "num": 567,
    "q": "Theo tư tưởng Hồ chí Minh: “lực lượng chủ yếu trong khối đại đoàn kết dân tộc là công nông, cho nên liên minh công nông là nền tảng của mặt trận dân tộc thống nhất”. Vì:",
    "a": "c. Chống lại khuynh hướng chỉ coi trọng cũng cố khối liên minh công nông mà không thấy vai trò và sự cần thiết phải mở rộng đoàn kết với các tầng lớp khác.",
    "b": "Cả a, b, và c.",
    "c": "b. Họ đông hơn hết, mà cũng bị áp bức bóc lột nặng nề hơn hết, chí khí cách mạng của họ chắc chắn, bền bỉ hơn mọi tầng lớp khác.",
    "d": "a. Họ là người trực tiếp sản xuất ra tất cả mọi tài phú (của cải vật chất) làm cho xã hội sống",
    "ans": "b"
  },
  {
    "num": 568,
    "q": "Những căn bệnh nào trong bộ máy nhà nước mà Hồ Chí Minh gọi là \"giặc nội xâm\"?",
    "a": "Cậy thế, hủ hoá, tư túng",
    "b": "Đặc quyền, đặc lợi",
    "c": "Tham ô, lãng phí, quan liêu",
    "d": "Trái phép, chia rẽ, kiêu ngạo",
    "ans": "c"
  },
  {
    "num": 569,
    "q": "“…Vì ham danh vọng và địa vị, cho nên khi phụ trách một bộ phận nào, thì lôi người này, kéo người khác, ưa ai thì kéo vào, không ưa thì tìm cách tẩy ra. Thế là chỉ biết có mình, chỉ biết có một bộ phận mà quên cả Đảng. Đó là là một thứ bệnh hẹp hòi, trái hẳn với nguyên tắc tập trung và thống nhất của Đảng”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969)",
    "b": "Diễn văn khai mạc Đại hội Đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam (9/1960)",
    "c": "Bài nói ở lớp huấn luyện đảng viên mới (5/1966)",
    "d": "Sửa đổi lối làm việc (10/1947)",
    "ans": "d"
  },
  {
    "num": 570,
    "q": "“… Chúng ta không sợ sai lầm, chỉ sợ phạm sai lầm mà không quyết tâm sửa chữa. Muốn sửa chữa cho tốt thì phải sẵn sàng nghe quần chúng phê bình và thật thà tự phê bình. Không chịu nghe phê bình và không tự phê bình thì nhất định lạc hậu, thoái bộ. Lạc hậu và thoái bộ thì sẽ bị quần chúng bỏ rơi. Đó là kết quả tất nhiên của chủ nghĩa cá nhân”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969)",
    "b": "Cần tẩy sạch bệnh quan liêu, mệnh lệnh (9/1951)",
    "c": "Đạo đức cách mạng (12/1958) Tài li u tham khảo môn Triết - Anh Huy",
    "d": "Thực hành tiết kiệm, chống tham ô, lãng phí, chống bệnh quan liêu (5/1952)",
    "ans": "c"
  },
  {
    "num": 571,
    "q": "Đảng ta khẳng định: Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động tại Đại hội Đảng toàn quốc lần thứ mấy?",
    "a": "Đại hổi Đảng toàn quốc lần thứ VIII (1996)",
    "b": "Đại hội Đảng toàn quốc lần thứ IX (2001).",
    "c": "Đại hội Đảng toàn quốc lần thứ VII (1991)",
    "d": "Đại hội Đảng toàn quốc lần thứ VI (1986).",
    "ans": "c"
  },
  {
    "num": 572,
    "q": "“Đứng về phía cán bộ mà nói, ăn cắp của công làm của tư. Đục khoét của nhân dân. Ăn bớt của bộ đội. Tiêu ít mà khai nhiều, lợi dụng của chung của Chính phủ để làm quỹ riêng cho địa phương mình, đơn vị mình cũng là tham ô. Đứng về phía nhân dân mà nói, tham ô là: “ăn cắp của công, khai gian, lậu thuế”, “tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ”. Chống loại kẻ địch này khó khăn, phức tạp hơn ngay cả so với đánh giặc ngoại xâm”. Đoạn trích trên trong bài nói chuyện nào của Chủ tịch Hồ Chí Minh?",
    "a": "Bài nói chuyện về thực hành tiết kiệm, chống tham ô, lãng phí, chống bệnh quan liêu",
    "b": "Bài nói tại lớp chỉnh Đảng Trung ương khoá 2",
    "c": "Bài nói chuyện tại lớp đào tạo hướng dẫn viên các trại hè cấp I",
    "d": "Bài nói chuyện với cán bộ tỉnh Thanh Hoá.",
    "ans": "a"
  },
  {
    "num": 573,
    "q": "Việc chống những căn bệnh nào trong bộ máy nhà nước được Hồ Chí Minh so sánh giống việc cần kíp như đánh giặc trên mặt trận ?",
    "a": "Trái phép, cậy thế, hủ hoá",
    "b": "Đặc quyền, đặc lợi",
    "c": "Tham ô, lãng phí, quan liêu",
    "d": "Tư túng, chia rẽ, kiêu ngạo",
    "ans": "c"
  },
  {
    "num": 574,
    "q": "Thuật ngữ tư tưởng trong khái niệm “tư tưởng Hồ Chí Minh” được hiểu theo nghĩa nào?",
    "a": "Hệ thống những quan niệm, quan điểm, luận điểm được xây dựng trên nền tảng triết học nhất quán, được hình thành trên cơ sở thực tiễn và trở lại chỉ đạo thực tiễn, cái tạo hiện thực.",
    "b": "Tư tưởng là quan điểm, quan niệm của một cá nhân, một cộng đồng.",
    "c": "Tư tưởng là sự phản ánh hiện thực trong ý thức, là biểu hiện của mối quan hệ giữa con người với xung quanh.",
    "d": "Tư tưởng là sự phản ánh hiện thực trong ý thức, là biểu hiện của mối quan hệ giữa con người với xung quanh.",
    "ans": "a"
  },
  {
    "num": 575,
    "q": "Đâu là những câu nói của Chủ tịch Hồ Chí Minh:",
    "a": "Óc quân phiệt quan liêu. Khi phụ trách ở một vùng nào thì như một ông vua con ở đấy, tha hồ hách dịch, hoạnh họe. Đối với cấp trên thì xem thường, đối với cấp dưới cậy quyền lấn áp. Đối với quần chúng ra vẻ quan cách làm cho quần chúng sợ hãi. Cái đầu óc “ông tướng, bà tướng” ấy đã gây ra bao ác cảm, bao chia rẽ, làm cho cấp trên xa cấp dưới, đoàn thể ra nhân dân.",
    "b": "Làm việc lối bàn giấy. Thích làm việc bằng giấy tờ thật nhiều. Ngồi một nơi chỉ tay năm ngón không chịu xuống địa phương kiểm tra công tác và để chỉ vạch những kế hoạch thi hành chỉ thị, nghị quyết của đoàn thể cho chu đáo… Cái lối làm việc như vậy rất có hại. Nó làm cho chúng ta không đi sát phong trào, không hiểu rõ được tình hình bên dưới, cho nên phần nhiều chủ trương của chúng ta không thi hành được đến nơi đến chốn.",
    "c": "Cả 3 đáp án trên.",
    "d": "Bệnh kiêu ngạo - Tự cao, tự đại, ham địa vị, hay lên mặt. Ưa người ta tang bốc mình, khen ngợi mình. Ưa sai khiến người khác. Hễ làm được việc gì hơi thành công thì khoe khoang vênh váo, cho ai cũng không bằng mình. Không thèm học hỏi quần chúng, không muốn cho người ta phê bình. Việc gì cũng làm thầy người khác.",
    "ans": "c"
  },
  {
    "num": 576,
    "q": "Quan điểm \"kiên định làm theo chủ nghĩa MLN, tư tưởng Hồ Chí Minh, vận dụng sáng tạo...\" được nêu lên trong đại hội nào? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Đại hội XI",
    "b": "Đại hội X",
    "c": "Đại hội XIII",
    "d": "Đại hội XII",
    "ans": "c"
  },
  {
    "num": 577,
    "q": "Nội dung nào là phương pháp nghiên cứu cụ thể tư tưởng Hồ Chí Minh?",
    "a": "Quan điểm toàn diện và hệ thống.",
    "b": "Quan điểm kế thừa và phát triển.",
    "c": "Phương pháp chuyên ngành, liên ngành.",
    "d": "Quan điểm lịch sử - cụ thể.",
    "ans": "c"
  },
  {
    "num": 578,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2010 là gì?",
    "a": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh suốt đời phấn đấu cần, kiệm, liêm, chính, chí công vô tư, làm người công bộc tận tụy, trung thành của nhân dân, đời tư trong sáng, cuộc sống riêng giản dị;",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm’’;",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về phong cách quần chúng, dân chủ, nêu gương; nêu cao trách nhiệm gương mẫu của cán bộ, đảng viên, nhất là cán bộ lãnh đạo chủ chốt các cấp;",
    "d": "Tư tưởng, tấm gương đạo đức Hồ Chí Minh về xây dựng Đảng ta thật sự trong sạch, vững mạnh, \"là đạo đức, là văn minh \".",
    "ans": "d"
  },
  {
    "num": 579,
    "q": "Đâu là ý nghĩa của việc học tập môn học Tư tưởng Hồ Chí Minh?",
    "a": "Góp phần hình thành tri thức về chính trị - xã hội.",
    "b": "Góp phần hình thành thế giới quan khoa học.",
    "c": "Góp phần nâng cao năng lực tư duy lý luận.",
    "d": "Hiểu rõ hơn về lịch sử Việt Nam.",
    "ans": "c"
  },
  {
    "num": 580,
    "q": "Chủ tịch Hồ Chí Minh đã nói như thế nào về hình phạt đối với tệ tham ô, lãng phí tiêu cực…?",
    "a": "(2) Không xử bắn bọn ăn hối lộ mà xử nhẹ như thế, là một việc xấu hổ cho những người cộng sản, những người cách mạng.",
    "b": "Cả (1) và (3).",
    "c": "(1) Cần có những pháp luật để trừng trị tệ tham ô, lãng phí, và phải chấp hành những pháp luật ấy một cách nghiêm chỉnh…",
    "d": "(3) Pháp luật phải thẳng tay trừng trị những kẻ bất liêm, bất kỳ kẻ ấy ở địa vị nào, làm nghề nghiệp gì.",
    "ans": "b"
  },
  {
    "num": 581,
    "q": "BCH Trung ương Đảng tôn vinh Hồ Chí Minh là “Anh hùng dân tộc vĩ đại” năm nào?",
    "a": "1969.",
    "b": "1968.",
    "c": "1970",
    "d": "1967.",
    "ans": "a"
  },
  {
    "num": 582,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2013 là gì?",
    "a": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm’’;",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về phong cách quần chúng, dân chủ, nêu gương; nêu cao trách nhiệm gương mẫu của cán bộ, đảng viên, nhất là cán bộ lãnh đạo chủ chốt các cấp; Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh suốt đời phấn đấu cần, kiệm, liêm, chính, chí công vô tư, làm người công bộc tận tụy, trung thành của nhân dân, đời tư trong sáng, cuộc sống riêng giản dị;",
    "d": "Tư tưởng, tấm gương đạo đức Hồ Chí Minh về xây dựng Đảng ta thật sự trong sạch, vững mạnh, \"là đạo đức, là văn minh \".",
    "ans": "b"
  },
  {
    "num": 583,
    "q": "Chuyên đề học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh năm 2017 là gì?",
    "a": "Những nội dung cơ bản của tư tưởng, đạo đức, phong cách Hồ Chí Minh;",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "c": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên;",
    "d": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng, chống suy thoái tư tưởng chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ;",
    "ans": "d"
  },
  {
    "num": 584,
    "q": "Đại hội nào là dấu mốc quan trọng đánh dấu sự phát triển nhận thức của Đảng về vai trò của tư tưởng Hồ Chí Minh?",
    "a": "Đại hội Đảng toàn quốc lần thứ IX (2001).",
    "b": "Đại hội Đảng toàn quốc lần thứ VI (1986).",
    "c": "Đại hội Đảng toàn quốc lần thứ VII (1991) Hồ Chí Minh”",
    "d": "Đại hổi Đảng toàn quốc lần thứ VIII (1996)",
    "ans": "c"
  },
  {
    "num": 585,
    "q": "Theo Chủ tịch Hồ Chí Minh: Chủ nghĩa cá nhân đẻ ra trăm thứ bệnh nguy hiểm:",
    "a": "Quan liêu, mệnh lệnh.",
    "b": "Quan liêu, mệnh lệnh, bè phái, chủ quan.",
    "c": "Quan liêu, mệnh lệnh, bè phái.",
    "d": "Quan liêu, mệnh lệnh, bè phái, chủ quan, tham ô, lãng phí.",
    "ans": "d"
  },
  {
    "num": 586,
    "q": "Khái niệm tư tưởng Hồ Chí Minh được nêu trong Đại hội Đảng toàn quốc lần thứ mấy?",
    "a": "Đại hổi Đảng toàn quốc lần thứ X (2006)",
    "b": "Đại hội Đảng toàn quốc lần thứ VIII (1996).",
    "c": "Đại hội Đảng toàn quốc lần thứ IX (2001)",
    "d": "Đại hội Đảng toàn quốc lần thứ XI (2011). như sau: “…”",
    "ans": "d"
  },
  {
    "num": 587,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2011-2012 là gì?",
    "a": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về phong cách quần chúng, dân chủ, nêu gương; nêu cao trách nhiệm gương mẫu của cán bộ, đảng viên, nhất là cán bộ lãnh đạo chủ chốt các cấp;",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh suốt đời phấn đấu cần, kiệm, liêm, chính, chí công vô tư, làm người công bộc tận tụy, trung thành của nhân dân, đời tư trong sáng, cuộc sống riêng giản dị;",
    "c": "Tư tưởng, tấm gương đạo đức Hồ Chí Minh về xây dựng Đảng ta thật sự trong sạch, vững mạnh, \"là đạo đức, là văn minh \".",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm’’;",
    "ans": "b"
  },
  {
    "num": 588,
    "q": "Đối tượng nghiên cứu của môn học tư tưởng Hồ Chí Minh là:",
    "a": "Là hệ thống quan điểm về cách mạng Việt Nam và thế giới.",
    "b": "Là tư tưởng giải phóng dân tộc.",
    "c": "Là tư tưởng về đấu tranh dân tộc và xây dựng chủ nghĩa xã hội. Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam.",
    "ans": "d"
  },
  {
    "num": 589,
    "q": "“… Đạo đức cách mạng không phải trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hằng ngày mà phát triển và củng cố. Củng như ngọc càng mài càng sáng, vàng càng luyện càng trong”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Đạo đức cách mạng (12/1958)",
    "b": "Cần, kiệm, liêm, chính (6/1949)",
    "c": "Sửa đổi lối làm việc (10/1947)",
    "d": "Cần tẩy sạch bệnh quan liêu, mệnh lệnh (9/1951)",
    "ans": "a"
  },
  {
    "num": 590,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2015 là gì?",
    "a": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về trung thực, trách nhiệm; gắn bó với nhân dân; đoàn kết, xây dựng Đảng trong sạch, vững mạnh.",
    "b": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng,chống suy thoái tư tưởng, chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ;.",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "d": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên;",
    "ans": "a"
  },
  {
    "num": 591,
    "q": "Chuyên đề học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh năm 2016 là gì?",
    "a": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng,chống suy thoái tư tưởng, chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ.",
    "b": "Những nội dung cơ bản của tư tưởng, đạo đức, phong cách Hồ Chí Minh",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "d": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên",
    "ans": "c"
  },
  {
    "num": 592,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2014 là gì?",
    "a": "Tư tưởng, tấm gương đạo đức Hồ Chí Minh về xây dựng Đảng ta thật sự trong sạch, vững mạnh, \"là đạo đức, là văn minh \".",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh suốt đời phấn đấu cần, kiệm, liêm, chính, chí công vô tư, làm người công bộc tận tụy, trung thành của nhân dân, đời tư trong sáng, cuộc sống riêng giản dị;",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm’’;",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về phong cách quần chúng, dân chủ, nêu gương; nêu cao trách nhiệm gương mẫu của cán bộ, đảng viên, nhất là cán bộ lãnh đạo chủ chốt các cấp;",
    "ans": "c"
  },
  {
    "num": 593,
    "q": "Tư tưởng sẵn sàng là bạn\" ở đại hội mấy ?",
    "a": "Đại hội IX",
    "b": "Đại hội VII",
    "c": "Đại hội VI",
    "d": "Đại hội VIII",
    "ans": "d"
  },
  {
    "num": 594,
    "q": "“Một dân tộc biết cần, kiệm, biết liêm, là một dân tộc giàu về vật chất, mạnh về tinh thần, là một dân tộc văn minh tiến bộ. Dân tộc ta đang kháng chiến và kiến quốc, đang xây dựng một Đời sống mới trong nước Việt Nam mới. Chẳng những chúng ta phải cần, kiệm, chúng ta còn phải thực hành chữ Liêm”. Đoạn trích trên nằm trong tác phẩm nào của Chủ tịch Hồ Chí Minh? Tài liệ tham khảo môn Triết - Anh Huy",
    "a": "Bài nói chuyện với bộ đội, công an và cán bộ trước khi vào tiếp quản Thủ đô, 5-9-1954.",
    "b": "Cần Kiệm Liêm Chính, 6-1949",
    "c": "Lời phát biểu trong phiên họp Hội đồng Chính phủ, 11-1950.",
    "d": "Chớ kiêu ngạo, phải khiêm tốn, ký tên C.B, Báo Nhân Dân, số 194, từ 13 đến 15-6-1954.",
    "ans": "b"
  },
  {
    "num": 595,
    "q": "Chuyên đề học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh năm 2018 là gì?",
    "a": "Những nội dung cơ bản của tư tưởng, đạo đức, phong cách Hồ Chí Minh;",
    "b": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng,chống suy thoái tư tưởng, chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ.",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "d": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên;",
    "ans": "d"
  },
  {
    "num": 596,
    "q": "Phương pháp luận Hồ Chí Minh dựa trên cơ sở nào?",
    "a": "Lấy phương pháp luận của chủ nghĩa duy vật lịch sử Mác – Lênin làm cơ sở.",
    "b": "Lấy phương pháp luận chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử Mác – Lênin làm cơ sở, được hình thành và phát triển qua trình hoạt động cách mạng của Người.",
    "c": "(Gtr 12)",
    "d": "Thực tiễn đấu tranh cách mạng của Hồ Chí Minh. E. d. Lấy phương pháp luận của chủ nghĩa duy vật biện chứng Mác – Lênin làm cơ sở.",
    "ans": "b"
  },
  {
    "num": 597,
    "q": "“Hiểu chủ nghĩa Mác-Lênin là phải sống với nhau có tình có nghĩa. Nếu thuộc bao nhiêu sách mà sống không có tình có nghĩa thì sao gọi là hiểu chủ nghĩa Mác Lênin được”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Sửa đổi lối làm việc, 1947",
    "b": "Ý kiến về việc làm và xuất bản loại sách “Người tốt việc tốt”, 1968",
    "c": "Sự nghiệp vĩ đại của Lênin, 1952",
    "d": "Bài nói tại Đại hội anh hùng, chiến sỹ thi đua chống Mỹ, cứu nước, 1966",
    "ans": "b"
  },
  {
    "num": 598,
    "q": "Quyền dân chủ ở VN lần đầu tiên được ghi chính thức trong?",
    "a": "Cương lĩnh chính trị 1991",
    "b": "Hiến pháp",
    "c": "Lời tuyên ngôn độc lập (1945) Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Chương lĩnh chính trị 2011",
    "ans": "b"
  },
  {
    "num": 599,
    "q": "“… Tôi chỉ có một ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Bài nói chuyện tại lớp nghiên cứu chính trị khoá I, Trường Đại học nhân dân Việt Nam (7/1956)",
    "b": "Trả lời các nhà báo nước ngoài (1/1946).",
    "c": "Diễn văn khai mạc Đại hội Đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam (9/1960)",
    "d": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969)",
    "ans": "b"
  },
  {
    "num": 600,
    "q": "\"Chiến tranh có thể kéo dài 5 năm, 10 năm, 20 năm hoặc lâu hơn nữa..., song nhân dân Việt Nam quyết không sợ? Không có gì quý hơn độc lập tự do. Đến ngày thắng lợi nhân dân ta sẽ xây dựng lại đất nước ta đàng hoàng hơn, to đẹp hơn\". Câu nói trên của Chủ tịch Hồ Chí Minh vào thời gian nào?",
    "a": "Lời kêu gọi của Hồ Chí Minh ngày 17/7/1966",
    "b": "Lời kêu gọi của Hồ Chí Minh ngày 19/12/1946",
    "c": "Thư chúc tết đầu Xuân 1969",
    "d": "Bản Di chúc của Hồ Chí Minh được công bố tại lễ truy điệu Người ngày 9/9/1969",
    "ans": "a"
  },
  {
    "num": 601,
    "q": "Kiên trì con đường Chủ tịch Hồ Chí Minh đã lựa chọn nghĩa là:",
    "a": "Thực hiện mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
    "b": "Hội nhập với nền kinh tế thế giới.",
    "c": "Giữ vững nền độc lập dân tộc.",
    "d": "Thực hiện triệt để cuộc cách mạng dân tộc dân chủ nhân dân.",
    "ans": "a"
  },
  {
    "num": 602,
    "q": "Cơ sở hình thành tư tưởng Hồ Chí Minh về sức mạnh của nhân dân, của khối đại đoàn kết dân tộc là gì?",
    "a": "Truyền thống dân tộc;",
    "b": "Cả 3 phương án trên đều đúng.",
    "c": "Từ tổng kết những kinh nghiệm của phong trào cách mạng Việt Nam; nghiên cứu thực tiễn và kinh nghiệm của cách mạng thế giới;",
    "d": "Chủ nghĩa Mác-Lênin;",
    "ans": "b"
  },
  {
    "num": 603,
    "q": "Trước lúc đi xa, Chủ tịch Hồ Chí Minh đã để lại những lời tâm huyết, căn dặn toàn Đảng: “Việc cần phải làm trước tiên là... , làm cho mỗi đảng viên, mỗi đoàn viên, mỗi chi bộ đều ra sức làm tròn nhiệm vụ Đảng giao phó cho mình, toàn tâm, toàn ý phục vụ nhân dân”, tìm đáp án đúng điền vào chỗ để trống?",
    "a": "Chỉnh đốn lại Đảng",
    "b": "Phát triển Đảng",
    "c": "Xây dựng Đảng",
    "d": "Đoàn kết trong Đảng",
    "ans": "a"
  },
  {
    "num": 604,
    "q": "Vận dụng tư tưởng Hồ Chí Minh về văn hoá hiện nay cần:",
    "a": "Tiếp thu tinh hoa văn hoá nhân loại",
    "b": "Giữ gìn và phát huy bản sắc văn hoá dân tộc",
    "c": "Chống văn hoá phản tiến bộ",
    "d": "Cả 3 phương án trên",
    "ans": "d"
  },
  {
    "num": 605,
    "q": "Tấm gương hết lòng, hết sức phụng sự Tổ quốc, phục vụ nhân dân của Chủ tịch Hồ Chí Minh là gì?",
    "a": "“Tổ quốc trên hết”; “Tôi hiến cả đời tôi cho dân tộc tôi” Tài liệu tham khảo ôn Triết - Anh Huy",
    "b": "Cả 3 phương án trên đều đúng",
    "c": "Tất cả vì lợi ích của Tổ quốc và nhân dân, không dành riêng cho cá nhân và gia đình;",
    "d": "Tất cả vì độc lập, tự do của Tổ quốc; “Không có gì quý hơn độc lập, tự do!”;",
    "ans": "b"
  },
  {
    "num": 606,
    "q": "Nguyên tắc xây dựng đạo đức mới theo tư tưởng Hồ Chí Minh là gì?",
    "a": "Cả 3 phương án trên đều đúng",
    "b": "Phải tu dưỡng đạo đức suốt đời, kiên trì, bền bỉ hằng ngày;",
    "c": "Nói đi đôi với làm, phải nêu gương về đạo đức;",
    "d": "Xây đi đôi với chống;",
    "ans": "a"
  },
  {
    "num": 607,
    "q": "“… Đạo đức cách mạng không phải trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hằng ngày mà phát triển và củng cố. Củng như ngọc càng mài càng sáng, vàng càng luyện càng trong”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Sửa đổi lối làm việc (10/1947)",
    "b": "Cần, kiệm, liêm, chính (6/1949)",
    "c": "Đạo đức cách mạng (12/1958)",
    "d": "Cần tẩy sạch bệnh quan liêu, mệnh lệnh (9/1951)",
    "ans": "c"
  },
  {
    "num": 608,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2008 là gì?",
    "a": "Học tập tấm gương Chủ tịch Hồ Chí Minh về thực hành tiết kiệm, chống tham nhũng, lãng phí, quan liêu;",
    "b": "Nâng cao ý thức trách nhiệm, hết lòng, hết sức phụng sự Tổ quốc, phục vụ nhân dân;",
    "c": "Chấn chỉnh kỷ luật, kỷ cương, nâng cao ý thức trách nhiệm, phát triển kinh tế bền vững.",
    "d": "Nâng cao nhận thức về đạo đức và tấm gương đạo đức Hồ Chí Minh, tổ chức động viên toàn Đảng, toàn xã hội tích cực tham gia Cuộc vận động;",
    "ans": "a"
  },
  {
    "num": 609,
    "q": "Theo Chủ tịch Hồ Chí Minh: Chủ nghĩa cá nhân đẻ ra trăm thứ bệnh nguy hiểm:",
    "a": "Quan liêu, mệnh lệnh, bè phái.",
    "b": "Quan liêu, mệnh lệnh, bè phái, chủ quan, tham ô, lãng phí.",
    "c": "Quan liêu, mệnh lệnh, bè phái, chủ quan.",
    "d": "Quan liêu, mệnh lệnh.",
    "ans": "b"
  },
  {
    "num": 610,
    "q": "Chọn đáp án trả lời đúng nhất về tư tưởng Hồ Chí Minh.",
    "a": "Tư tưởng Hồ Chí Minh là kết quả của sự phát triển sáng tạo chủ nghĩa Mác -Lênin vào điều kiện thực tế của nước ta.",
    "b": "Tư tưởng Hồ Chí Minh là kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta.",
    "c": "Tư tưởng Hồ Chí Minh là kết quả của sự vận dụng sáng tạo chủ nghĩa Mác -Lênin vào điều kiện thực tế của nước ta.",
    "d": "Tư tưởng Hồ Chí Minh là chủ nghĩa Mác - Lênin ở Việt Nam.",
    "ans": "b"
  },
  {
    "num": 611,
    "q": "Chuyên đề học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh năm 2018 là gì?",
    "a": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng,chống suy thoái tư tưởng, chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ.",
    "b": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên;",
    "c": "Những nội dung cơ bản của tư tưởng, đạo đức, phong cách Hồ Chí Minh; Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "ans": "b"
  },
  {
    "num": 612,
    "q": "Chuyên đề học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh năm 2017 là gì?",
    "a": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên;",
    "b": "Những nội dung cơ bản của tư tưởng, đạo đức, phong cách Hồ Chí Minh;",
    "c": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng, chống suy thoái tư tưởng chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ;",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "ans": "c"
  },
  {
    "num": 613,
    "q": "Trong Di chúc, Chủ tịch Hồ Chí Minh đã dặn lại: “Đảng cần phải có kế hoạch thật tốt để phát triển kinh tế và văn hoá, không ngừng nâng cao đời sống của…”, tìm đáp án đúng để điền vào chỗ để trống?",
    "a": "Cả 3 phương án trên đều sai",
    "b": "Nhân dân",
    "c": "Cán bộ, đảng viên",
    "d": "Các tầng lớp nhân dân",
    "ans": "b"
  },
  {
    "num": 614,
    "q": "Đâu là những câu nói của Chủ tịch Hồ Chí Minh:",
    "a": "Bệnh kiêu ngạo - Tự cao, tự đại, ham địa vị, hay lên mặt. Ưa người ta tang bốc mình, khen ngợi mình. Ưa sai khiến người khác. Hễ làm được việc gì hơi thành công thì khoe khoang vênh váo, cho ai cũng không bằng mình. Không thèm học hỏi quần chúng, không muốn cho người ta phê bình. Việc gì cũng làm thầy người khác.",
    "b": "Cả 3 đáp án trên.",
    "c": "Óc quân phiệt quan liêu. Khi phụ trách ở một vùng nào thì như một ông vua con ở đấy, tha hồ hách dịch, hoạnh họe. Đối với cấp trên thì xem thường, đối với cấp dưới cậy quyền lấn áp. Đối với quần chúng ra vẻ quan cách làm cho quần chúng sợ hãi. Cái đầu óc “ông tướng, bà tướng” ấy đã gây ra bao ác cảm, bao chia rẽ, làm cho cấp trên xa cấp dưới, đoàn thể ra nhân dân.",
    "d": "Làm việc lối bàn giấy. Thích làm việc bằng giấy tờ thật nhiều. Ngồi một nơi chỉ tay năm ngón không chịu xuống địa phương kiểm tra công tác và để chỉ vạch những kế hoạch thi hành chỉ thị, nghị quyết của đoàn thể cho chu đáo… Cái lối làm việc như vậy rất có hại. Nó làm cho chúng ta không đi sát phong trào, không hiểu rõ được tình hình bên dưới, cho nên phần nhiều chủ trương của chúng ta không thi hành được đến nơi đến chốn.",
    "ans": "b"
  },
  {
    "num": 615,
    "q": "Theo tư tưởng Hồ Chí Minh, mục tiêu của văn hoá giáo dục là:",
    "a": "Bồi dưỡng những phẩm chất tốt đẹp, những phong cách lành mạnh",
    "b": "Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp",
    "c": "Nâng cao dân trí",
    "d": "Thực hiện cả ba chức năng của văn hoá bằng giáo dục",
    "ans": "d"
  },
  {
    "num": 616,
    "q": "\"Việc gì lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh. Chúng ta phải yêu dân, kính dân thì dân mới yêu ta, kính ta\". Những câu trên trích từ bài viết nào của Hồ Chí Minh?",
    "a": "Thư gửi ủy ban nhân dân các kỳ, tỉnh, huyện và làng.",
    "b": "Thư gửi các đồng chí tỉnh nhà",
    "c": "Bài phát biểu tại kỳ họp đầu tiên của Quốc hội khoá I, năm 1946",
    "d": "Thư gửi các đồng chí Bắc Bộ.",
    "ans": "a"
  },
  {
    "num": 617,
    "q": "“Mỗi cán bộ, đảng viên phải đặt lợi ích của cách mạng, của Đảng, của nhân dân lên trên hết, trước hết. Phải kiên quyết quét sạch chủ nghĩa cá nhân, nâng cao đạo đức cách mạng, bồi dưỡng tư tưởng tập thể, tinh thần đoàn kết, tính tổ chức và kỷ luật”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Bài nói ở lớp huấn luyện đảng viên mới (5/1966)",
    "b": "Diễn văn khai mạc Đại hội Đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam (9/1960)",
    "c": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969) Tài liệu th m khảo mô Triết - Anh Huy",
    "d": "Sửa đổi lối làm việc (10/1947)",
    "ans": "c"
  },
  {
    "num": 618,
    "q": "Chọn một đáp án đúng điền vào chỗ trống để hoàn thiện câu sau của Hồ Chí Minh: \"Chống …………… và bệnh quan liêu cũng quan trọng và cần kíp như việc đánh giặc trên mặt trận\".",
    "a": "Tham ô, lãng phí",
    "b": "Lãng phí",
    "c": "Phá hoại của công",
    "d": "Vi phạm kỷ luật",
    "ans": "a"
  },
  {
    "num": 619,
    "q": "\"Chúng ta thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ\". Câu nói trên của Hồ Chí Minh vào thời gian nào?",
    "a": "Tháng 12 năm 1946",
    "b": "Tháng 6 năm 1966",
    "c": "Tháng 8 năm 1945",
    "d": "Tháng 9 năm 1945",
    "ans": "a"
  },
  {
    "num": 620,
    "q": "Theo tư tưởng Hồ Chí Minh, việc đổi mới, chỉnh đốn Đảng được hiểu là:",
    "a": "Khi cách mạng ở vào thời kỳ khó khan",
    "b": "Khi Đảng không còn vững mạnh",
    "c": "Việc làm thường xuyên của Đảng",
    "d": "Một giải pháp tình thế",
    "ans": "c"
  },
  {
    "num": 621,
    "q": "“Đứng về phía cán bộ mà nói, ăn cắp của công làm của tư. Đục khoét của nhân dân. Ăn bớt của bộ đội. Tiêu ít mà khai nhiều, lợi dụng của chung của Chính phủ để làm quỹ riêng cho địa phương mình, đơn vị mình cũng là tham ô. Đứng về phía nhân dân mà nói, tham ô là: “ăn cắp của công, khai gian, lậu thuế”, “tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ”. Chống loại kẻ địch này khó khăn, phức tạp hơn ngay cả so với đánh giặc ngoại xâm”. Đoạn trích trên trong bài nói chuyện nào của Chủ tịch Hồ Chí Minh?",
    "a": "Bài nói tại lớp chỉnh Đảng Trung ương khoá 2",
    "b": "Bài nói chuyện về thực hành tiết kiệm, chống tham ô, lãng phí, chống bệnh quan liêu",
    "c": "Bài nói chuyện tại lớp đào tạo hướng dẫn viên các trại hè cấp I",
    "d": "Bài nói chuyện với cán bộ tỉnh Thanh Hoá.",
    "ans": "b"
  },
  {
    "num": 622,
    "q": "Hồ Chí Minh quan niệm dân chủ nghĩa là:",
    "a": "Dân là chủ và dân làm chủ",
    "b": "Quyền lực thuộc về nhân dân.",
    "c": "Dân là chủ",
    "d": "Dân làm chủ",
    "ans": "a"
  },
  {
    "num": 623,
    "q": "“Hỡi đồng bào bị đoạ đầy đau khổ! Đây là cái cần thiết cho chúng ta!”. Câu nói này được Chủ tịch Hồ Chí Minh nói khi đọc tài liệu nào?",
    "a": "Tuyên ngôn độc lập 1776 của nước Mỹ Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "Luận cương của Lênin",
    "c": "Lịch sử Đại cách mạng Pháp năm 1789.",
    "d": "Chủ nghĩa Tam dân của Tôn Trung Sơn",
    "ans": "b"
  },
  {
    "num": 624,
    "q": "Để xây dựng những phẩm chất đạo đức tốt đẹp và chống lại những cái vô đạo đức có kết quả, theo quan điểm của Hồ Chí Minh phải:",
    "a": "Bắt buộc từng cá nhân thực hiện",
    "b": "Tạo thành phong trào quần chúng rộng rãi",
    "c": "Chống chủ nghĩa cá nhân",
    "d": "Động viên từng cá nhân thực hiện",
    "ans": "b"
  },
  {
    "num": 625,
    "q": "“Chủ nghĩa xã hội là nhằm nâng cao đời sống vật chất và văn hoá của nhân dân và do nhân dân tự xây dựng lấy. Muốn đạt mục đích đó, thì nhân dân ta phải ra sức thi đua tăng gia sản xuất và thực hành tiết kiệm; mỗi người phải cố gắng trở thành lao động tiên tiến, chiến sĩ thi đua, anh hùng lao động, mỗi người phải nâng cao tinh thần làm chủ nước nhà”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Bài nói chuyện tại lớp nghiên cứu chính trị khoá I, Trường Đại học nhân dân Việt Nam (7/1956)",
    "b": "Bài nói chuyện tại Đại hội lần thứ III của Đoàn Thanh niên Lao động Việt Nam (3/1961).",
    "c": "Bài nói chuyện với cán bộ tỉnh Hà Tây (2/1967).",
    "d": "Lời khai mạc Đại hội liên hoan anh hùng, chiến sĩ thi đua toàn quốc lần thứ III (5/1962)",
    "ans": "d"
  },
  {
    "num": 626,
    "q": "Chọn đáp án trả lời đúng nhất:",
    "a": "Chủ nghĩa Mác - Lênin là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng ta.",
    "b": "Cả ba đáp án trên đều đúng.",
    "c": "Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng ta.",
    "d": "Cùng với chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng và kim chỉ nam cho hành động cách mạng của Đảng ta.",
    "ans": "d"
  },
  {
    "num": 627,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2014 là gì?",
    "a": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm’’;",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh suốt đời phấn đấu cần, kiệm, liêm, chính, chí công vô tư, làm người công bộc tận tụy, trung thành của nhân dân, đời tư trong sáng, cuộc sống riêng giản dị;",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về phong cách quần chúng, dân chủ, nêu gương; nêu cao trách nhiệm gương mẫu của cán bộ, đảng viên, nhất là cán bộ lãnh đạo chủ chốt các cấp;",
    "d": "Tư tưởng, tấm gương đạo đức Hồ Chí Minh về xây dựng Đảng ta thật sự trong sạch, vững mạnh, \"là đạo đức, là văn minh \".",
    "ans": "a"
  },
  {
    "num": 628,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2007 là gì?",
    "a": "Chấn chỉnh kỷ luật, kỷ cương, nâng cao ý thức trách nhiệm, phát triển kinh tế bền vững.",
    "b": "Nâng cao ý thức trách nhiệm, hết lòng, hết sức phụng sự Tổ quốc, phục vụ nhân dân;",
    "c": "Học tập tấm gương Chủ tịch Hồ Chí Minh về thực hành tiết kiệm, chống tham nhũng, lãng phí, quan liêu;",
    "d": "Đẩy mạnh học tập và làm theo tấm gương đạo đức Hồ Chí Minh trong giai đoạn hiện nay;",
    "ans": "d"
  },
  {
    "num": 629,
    "q": "Chủ tịch Hồ Chí Minh đã nói như thế nào về hình phạt đối với tệ tham ô, lãng phí tiêu cực…?",
    "a": "Cả (1) và (3). Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "(2) Không xử bắn bọn ăn hối lộ mà xử nhẹ như thế, là một việc xấu hổ cho những người cộng sản, những người cách mạng.",
    "c": "(1) Cần có những pháp luật để trừng trị tệ tham ô, lãng phí, và phải chấp hành những pháp luật ấy một cách nghiêm chỉnh…",
    "d": "(3) Pháp luật phải thẳng tay trừng trị những kẻ bất liêm, bất kỳ kẻ ấy ở địa vị nào, làm nghề nghiệp gì.",
    "ans": "a"
  },
  {
    "num": 630,
    "q": "Theo Hồ Chí Minh, vai trò lãnh đạo của giai cấp công nhân trong cách mạng Việt Nam do yếu tố nào quy định?",
    "a": "Do số lượng giai cấp công nhân.",
    "b": "Do ý muốn của Đảng Cộng sản.",
    "c": "Do đặc điểm của thời đại mới. thể, có tổ chức, kỷ luật. Công nhân là giai cấp tiền tiến nhất trong sức sản xuất, có trách nhiệm đánh đổ chế độ tư bản và đế quốc, xây dựng một xã hội mới. Vì những lẽ đó, giai cấp công nhân có thể lĩnh hội và thấm nhuần một tư tưởng cách mạng nhất: chủ nghĩa Marx Lenin. Đồng thời, tinh thần đấu tranh của họ ảnh hưởng và làm gương cho các tầng lớp khác. Do đó, về mặt chính trị, tư tưởng, tổ chức và hành động, giai cấp công nhân đều giữ vai trò lãnh đạo)",
    "d": "Do đặc tính của giai cấp công nhân.",
    "ans": "d"
  },
  {
    "num": 631,
    "q": "Truyền thống quý báu nhất của dân tộc Việt Nam được Chủ tịch Hồ Chí Minh kế thừa và phát triển là gì?",
    "a": "Tinh thần hiếu học",
    "b": "Cần cù lao động.",
    "c": "Chủ nghĩa yêu nước",
    "d": "Lòng nhân ái",
    "ans": "c"
  },
  {
    "num": 632,
    "q": "Khi nói về đạo đức cách mạng, Chủ tịch Hồ Chí Minh đã nói tóm tắt thành ý nào dưới đây?",
    "a": "Làm cho dân có ăn. Làm cho dân có mặc. Làm cho dân có chỗ ở. Làm cho dân có học hành.",
    "b": "Cần, kiệm, liêm, chính, chí công vô tư;",
    "c": "Nhận rõ phải, trái. Giữ vững lập trường. Tận trung với nước. Tận hiếu với dân;",
    "d": "Tóm lại, phải đi đúng đường lối quần chúng. Thế là có tinh thần trách nhiệm đối với Đảng, đối với Chính phủ, đối với nhân dân;",
    "ans": "c"
  },
  {
    "num": 633,
    "q": "Phẩm chất nào dưới đây là phẩm chất trung tâm của đạo đức cách mạng trong tư tưởng đạo đức của Hồ Chí Minh?",
    "a": "Cần, kiệm, liêm, chính, chí công, vô tư;",
    "b": "Trung với nước, hiếu với dân;",
    "c": "Yêu thương con người, sống có nghĩa, có tình;",
    "d": "Tinh thần quốc tế trong sáng.",
    "ans": "b"
  },
  {
    "num": 634,
    "q": "Hãy lựa chọn câu trả lời đúng nhất:",
    "a": "Hồ Chí Minh là anh hùng giải phóng dân tộc và là nhà văn hóa lớn.",
    "b": "Hồ Chí Minh là anh hùng giải phóng dân tộc và là nhà văn hóa kiệt xuất của Việt Nam .",
    "c": "Hồ Chí Minh là anh hùng giải phóng của dân tộc Việt Nam và là danh nhân văn hóa kiệt xuất của thế giới.",
    "d": "Hồ Chí Minh là anh hùng giải phóng dân tộc của dân tộc Việt Nam và là nhà văn hoá lỗi lạc.",
    "ans": "b"
  },
  {
    "num": 635,
    "q": "“Hiểu chủ nghĩa Mác-Lênin là phải sống với nhau có tình có nghĩa. Nếu thuộc bao nhiêu sách mà sống không có tình có nghĩa thì sao gọi là hiểu chủ nghĩa Mác Lênin được”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Ý kiến về việc làm và xuất bản loại sách “Người tốt việc tốt”, 1968",
    "b": "Bài nói tại Đại hội anh hùng, chiến sỹ thi đua chống Mỹ, cứu nước, 1966",
    "c": "Sự nghiệp vĩ đại của Lênin, 1952",
    "d": "Sửa đổi lối làm việc, 1947",
    "ans": "a"
  },
  {
    "num": 636,
    "q": "Chủ tịch Hồ Chí Minh nói câu: \"Không có gì quý hơn độc lập, tự do” vào thời gian nào? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "1954",
    "b": "1945",
    "c": "1966",
    "d": "1960",
    "ans": "c"
  },
  {
    "num": 637,
    "q": "Trong những câu dưới đây, câu nào không phải là của Chủ tịch Hồ Chí Minh?",
    "a": "Không có gì quý hơn độc lập, tự do",
    "b": "Không có gì quý bằng độc lập, tự do",
    "c": "Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.",
    "d": "Cay đắng chi bằng mất tự do.",
    "ans": "b"
  },
  {
    "num": 638,
    "q": "Chủ tịch Hồ Chí Minh đã từng khẳng định: chỉ có nhà nước thực sự … tổ chức, xây dựng và kiểm soát mới có thể là nhà nước vì dân. Tìm đáp án đúng điền vào chỗ trống?",
    "a": "Do dân",
    "b": "Của giai cấp công nhân",
    "c": "Của dân",
    "d": "Của dân, do dân",
    "ans": "d"
  },
  {
    "num": 639,
    "q": "Chủ tịch Hồ Chí Minh định nghĩa về “tiết kiệm” như thế nào?",
    "a": "Cả 3 phương án trên đều đúng.",
    "b": "Tiết kiệm là không xa xỉ, không hoang phí, không bừa bãi;",
    "c": "Nói theo lối khoa học, tiết kiệm là tích cực;",
    "d": "Tiết kiệm không phải là bủn xỉn;",
    "ans": "a"
  },
  {
    "num": 640,
    "q": "Tìm cụm từ đúng nhất để điền vào chỗ trống trong câu nói sau của Chủ tịch Hồ Chí Minh: “Trước mặt quần chúng, không phải ta cứ viết lên trán chữ “…” mà ta được họ yêu mến. Quần chúng chỉ quý mến những người có tư cách, đạo đức. Muốn hướng dẫn nhân dân, mình phải làm mực thước cho người ta bắt chước”.",
    "a": "Quan cách mạng",
    "b": "Cộng sản",
    "c": "Đảng viên",
    "d": "Cán bộ",
    "ans": "b"
  },
  {
    "num": 641,
    "q": "Chủ tịch Hồ Chí Minh đã ví những đức tính nào của con người như trời có bốn mùa, đất có bốn phương?",
    "a": "Có nghĩa, có tình",
    "b": "Chí công vô tư",
    "c": "Cần, kiệm, liêm, chính",
    "d": "Trung với nước, hiếu với dân",
    "ans": "c"
  },
  {
    "num": 642,
    "q": "Chọn đáp án trả lời đúng nhất theo tư tưởng Hồ Chí Minh. Nhà nước Việt Nam...",
    "a": "Mang tính dân tộc.",
    "b": "Mang bản chất giai cấp công nhân.",
    "c": "Có sự thống nhất bản chất giai cấp công nhân với tính nhân dân và tính dân tộc.",
    "d": "Có tính dân tộc, tính nhân dân sâu sắc.",
    "ans": "c"
  },
  {
    "num": 643,
    "q": "Quan điểm: \"Đảng ta là một Đảng cầm quyền” được Hồ Chí Minh trình bày trong văn kiện nào? Tài liệu tham khảo môn Triết - Anh Huy",
    "a": "Diễn văn khai mạc Đại hội đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam",
    "b": "Chánh cương vắn tắt của Đảng",
    "c": "Báo cáo chính trị tại Đại hội lần thứ II của Đảng",
    "d": "Di chúc",
    "ans": "d"
  },
  {
    "num": 644,
    "q": "Chuyên đề học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh năm 2016 là gì?",
    "a": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên;",
    "b": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng,chống suy thoái tư tưởng, chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ.",
    "c": "Những nội dung cơ bản của tư tưởng, đạo đức, phong cách Hồ Chí Minh;",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "ans": "d"
  },
  {
    "num": 645,
    "q": "Việc chống những căn bệnh nào trong bộ máy nhà nước được Hồ Chí Minh so sánh giống việc cần kíp như đánh giặc trên mặt trận ?",
    "a": "Tư túng, chia rẽ, kiêu ngạo",
    "b": "Trái phép, cậy thế, hủ hoá",
    "c": "Tham ô, lãng phí, quan liêu",
    "d": "Đặc quyền, đặc lợi",
    "ans": "c"
  },
  {
    "num": 646,
    "q": "Tìm cụm từ đúng nhất để điền vào chỗ trống (…) trong câu nói sau của Chủ tịch Hồ Chí Minh “Nghe những lời bình luận không đúng, cũng làm thinh, ... Thậm chí nghe những lời phản cách mạng cũng không báo cáo cho cấp trên biết. Ai nói sao, ai làm gì cũng mặc kệ”.",
    "a": "Không biện bác",
    "b": "Không đấu tranh",
    "c": "Không tìm hiểu",
    "d": "Không phê bình",
    "ans": "a"
  },
  {
    "num": 647,
    "q": "Trong bản \"Yêu sách của nhân dân An Nam\" gửi đến Hội nghị Véc xây, lúc đó Hồ Chí Minh mang tên là gì?",
    "a": "Nguyễn Ái Quốc",
    "b": "Nguyễn Tất Thành",
    "c": "Trần Vương",
    "d": "Văn Ba",
    "ans": "a"
  },
  {
    "num": 648,
    "q": "\"Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư. Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân”. Câu viết trên của Hồ Chí Minh ở trong tác phẩm nào của Người?",
    "a": "Đạo đức cách mạng",
    "b": "Sửa đổi lối làm việc",
    "c": "Di chúc",
    "d": "Đường cách mệnh",
    "ans": "c"
  },
  {
    "num": 649,
    "q": "Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam. Những vấn đề đó thuộc phạm vi nào?",
    "a": "Trong cách mạng dân tộc dân chủ nhân dân.",
    "b": "Cả trong cách mạng dân tộc dân chủ nhân dân và cách mạng xã hội chủ nghĩa. Tài liệu tham khảo ôn Triết - Anh Huy",
    "c": "Trong cách mạng xã hội chủ nghĩa.",
    "d": "Trong thế kỷ XX",
    "ans": "b"
  },
  {
    "num": 650,
    "q": "“… Tiết kiệm không phải là bủn xỉn, không phải là “xem đồng tiền to bằng cái nống”, gặp việc đáng làm cũng không làm, đáng tiêu cũng không tiêu… Nói theo lối khoa học, thì tiết kiệm là tích cực, chứ không phải tiêu cực”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969)",
    "b": "Cần tẩy sạch bệnh quan liêu, mệnh lệnh (9/1951)",
    "c": "Thực hành tiết kiệm, chống tham ô, lãng phí, chống bệnh quan liêu (5/152)",
    "d": "Cần, kiệm, liêm, chính (6/1949)",
    "ans": "c"
  },
  {
    "num": 651,
    "q": "Thay mặt Hội những người yêu nước Việt Nam tại Pháp, Nguyễn Tất Thành đã gửi đến Hội nghị Vécxây tài liệu gì?",
    "a": "Vấn đề bản xứ",
    "b": "Tâm địa thực dân",
    "c": "Bản Yêu sách của nhân dân An Nam",
    "d": "Những người bị áp bức",
    "ans": "c"
  },
  {
    "num": 652,
    "q": "\"Dân tộc ta, nhân dân ta, non sông đất nước ta đã sinh ra Hồ Chủ tịch, người anh hùng dân tộc vĩ đại, và chính Người đã làm rạng rỡ dân tộc ta, nhân dân ta và non sông đất nước ta\". Câu nói trên ở trong văn kiện nào?",
    "a": "Điếu văn của Ban Chấp hành Trung ương Đảng lao động Việt Nam đọc tại lễ truy diệu Chủ tịch Hồ Chí Minh ngày 9/9/1969.",
    "b": "Diễn văn của Ban Chấp hành Trung ương Đảng CSVN đọc tại lễ kỷ niệm 100 năm ngày sinh của Hồ Chí Minh.",
    "c": "Diễn văn của Ban Chấp hành Trung ương Đảng LĐVN đọc tại lễ kỷ niệm 80 năm ngày sinh của Hồ Chí Minh.",
    "d": "Lời kêu gọi Ban chấp hành Trung ương Đảng lao động Việt Nam ngày 3/9/1969",
    "ans": "a"
  },
  {
    "num": 653,
    "q": "Quan điểm : \"Đảng ta là đạo đức, là văn minh\" được Hồ Chí Minh trình bày trong tác phẩm nào?",
    "a": "Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ II của Đảng",
    "b": "Sách lược vắn tắt của Đảng",
    "c": "Diễn văn đọc tại lễ kỷ niệm 30 năm ngày thành lập Đảng",
    "d": "Diễn văn khai mạc Đại hội đại biểu toàn quốc lần thứ III của Đảng",
    "ans": "c"
  },
  {
    "num": 654,
    "q": "Chủ tịch Hồ Chí Minh luôn luôn nêu rõ phải kiên quyết chống tham ô, lãng phí, quan liêu, vì sao?",
    "a": "Chống tham ô, lãng phí, quan liêu là dân chủ;",
    "b": "Chống tham ô, lãng phí, quan liêu là cách mạng;",
    "c": "Cả 3 phương án trên đều đúng.",
    "d": "Chống tham ô, lãng phí, quan liêu sẽ giúp cách mạng mau đi tới thắng lợi.",
    "ans": "c"
  },
  {
    "num": 655,
    "q": "Những căn bệnh nào trong bộ máy nhà nước mà Hồ Chí Minh gọi là \"giặc nội xâm\"?",
    "a": "Đặc quyền, đặc lợi Tài liệu tham khảo môn Triết - Anh Huy",
    "b": "Trái phép, chia rẽ, kiêu ngạo",
    "c": "Tham ô, lãng phí, quan liêu",
    "d": "Cậy thế, hủ hoá, tư túng",
    "ans": "c"
  },
  {
    "num": 656,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2015 là gì?",
    "a": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về phòng,chống suy thoái tư tưởng, chính trị, đạo đức, lối sống, “tự diễn biến”, “tự chuyển hóa” trong nội bộ;.",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về trung thực, trách nhiệm; gắn bó với nhân dân; đoàn kết, xây dựng Đảng trong sạch, vững mạnh.",
    "c": "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về xây dựng phong cách, tác phong công tác của người đứng đầu, của cán bộ, đảng viên;",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, phong cách gương mẫu, nói đi đôi với làm.",
    "ans": "b"
  },
  {
    "num": 657,
    "q": "“… Chúng ta không sợ sai lầm, chỉ sợ phạm sai lầm mà không quyết tâm sửa chữa. Muốn sửa chữa cho tốt thì phải sẵn sàng nghe quần chúng phê bình và thật thà tự phê bình. Không chịu nghe phê bình và không tự phê bình thì nhất định lạc hậu, thoái bộ. Lạc hậu và thoái bộ thì sẽ bị quần chúng bỏ rơi. Đó là kết quả tất nhiên của chủ nghĩa cá nhân”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969)",
    "b": "Thực hành tiết kiệm, chống tham ô, lãng phí, chống bệnh quan liêu (5/1952)",
    "c": "Cần tẩy sạch bệnh quan liêu, mệnh lệnh (9/1951)",
    "d": "Đạo đức cách mạng (12/1958)",
    "ans": "d"
  },
  {
    "num": 658,
    "q": "Tư tưởng Hồ Chí Minh về xây dựng Nhà nước trong sạch, vững mạnh, hiệu quả, được thể hiện:",
    "a": "(2) Tăng cường pháp luật đi đôi với đẩy mạnh giáo dục đạo đức;",
    "b": "(3) Kiên quyết chống ba thứ “giặc nội xâm” là tham ô, lãng phí, quan liêu;",
    "c": "(1) Phẩm chất đạo đức và tinh thần phục vụ nhân dân phục vụ Tổ quốc của cán bộ, đảng viên;",
    "d": "Cả (2) và (3)",
    "ans": "d"
  },
  {
    "num": 659,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2009 là gì?",
    "a": "Chấn chỉnh kỷ luật, kỷ cương, nâng cao ý thức trách nhiệm, phát triển kinh tế bền vững.",
    "b": "Nâng cao nhận thức về đạo đức và tấm gương đạo đức Hồ Chí Minh, tổ chức động viên toàn Đảng, toàn xã hội tích cực tham gia Cuộc vận động;",
    "c": "Học tập tấm gương Chủ tịch Hồ Chí Minh về thực hành tiết kiệm, chống tham nhũng, lãng phí, quan liêu;",
    "d": "Nâng cao ý thức trách nhiệm, hết lòng, hết sức phụng sự Tổ quốc, phục vụ nhân dân;",
    "ans": "d"
  },
  {
    "num": 660,
    "q": "Bác Hồ bắt đầu viết Di chúc vào năm nào?",
    "a": "Năm 1967",
    "b": "Năm 1965",
    "c": "Năm 1966",
    "d": "Năm 1969",
    "ans": "b"
  },
  {
    "num": 661,
    "q": "Theo Chủ tịch Hồ Chí Minh, Đảng cần làm gì để nâng cao tinh thần trách nhiệm, hết lòng, hết sức phụng sự Tổ quốc, phục vụ nhân dân?",
    "a": "Phải xây dựng đội ngũ cán bộ, đảng viên thực sự có đạo đức cách mạng;",
    "b": "Phải giữ nghiêm kỷ luật trong Đảng;",
    "c": "Giáo dục cán bộ, đảng viên và nhân dân nhận thức sâu sắc, toàn diện hơn về Đảng;",
    "d": "Cả 3 phương án trên đều đúng.",
    "ans": "d"
  },
  {
    "num": 662,
    "q": "Tìm một điểm nhầm lẫn trong đoạn viết sau đây: Một trong những nguồn gốc của tư tưởng Hồ Chí Minh là tiếp văn hóa phương Đông. Cụ thể là: Tài liệ tham khảo môn Triết - Anh Huy",
    "a": "Tư tưởng vị tha của Phật giáo.",
    "b": "Tư tưởng của Khổng Tử về một xã hội bình yên không bao giờ thay đổi.",
    "c": "Những mặt tích cực của Nho giáo.",
    "d": "Tư tưởng Tam dân của Tôn Trung Sơn.",
    "ans": "b"
  },
  {
    "num": 663,
    "q": "\"Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy\". Đoạn văn trên trích từ bài viết nào của Chủ tịch Hồ Chí Minh?",
    "a": "Tuyên ngôn Độc lập.",
    "b": "Thư kêu gọi Tổng khởi nghĩa.",
    "c": "Thư gửi đồng bào Nam bộ.",
    "d": "Lời kêu gọi Toàn quốc kháng chiến.",
    "ans": "a"
  },
  {
    "num": 664,
    "q": "Chọn luận điểm đúng với tư tưởng Hồ Chí Minh:",
    "a": "Muốn tiến lên chủ nghĩa xã hội thì phải phát triển kinh tế và văn hoá",
    "b": "Muốn tiến lên chủ nghĩa xã hội thì phải phát triển văn hoá",
    "c": "Muốn tiến lên chủ nghĩa xã hội thì phải phát triển kinh tế",
    "d": "Muốn tiến lên chủ nghĩa xã hội thì phải phát triển văn hoá và kinh tế",
    "ans": "a"
  },
  {
    "num": 665,
    "q": "Chọn cụm từ đúng điền vào chỗ trống trong câu viết sau đây của Hồ Chí Minh: \"Toàn thể dân tộc Việt Nam quyết đem để giữ vững quyền tự do, độc lập ấy\".",
    "a": "Tất cả tinh thần và lực lượng.",
    "b": "Toàn bộ sức lực.",
    "c": "Lòng dũng cảm và sự hy sinh",
    "d": "Tất cả tinh thần và lực lượng, tính mạng và của cải.",
    "ans": "d"
  },
  {
    "num": 666,
    "q": "Theo Hồ Chí Minh, vai trò của đạo đức được xác định là:",
    "a": "Hành trang của người cách mạng",
    "b": "Nền tảng của người cách mạng",
    "c": "Vũ khí của người cách mạng",
    "d": "Chỗ dựa của người cách mạng",
    "ans": "b"
  },
  {
    "num": 667,
    "q": "Sự thống nhất trong tư tưởng Hồ Chí Minh về giải phóng dân tộc, giải phóng giai cấp, giải phóng con người là gì?",
    "a": "(3) Chủ nghĩa yêu nước và tinh thần dân tộc;",
    "b": "(2) Kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước và chủ nghĩa quốc tế;",
    "c": "Cả (1) và (2).",
    "d": "(1) Không có gì quý hơn độc lập, tự do;",
    "ans": "c"
  },
  {
    "num": 668,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2013 là gì?",
    "a": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh suốt đời phấn đấu cần, kiệm, liêm, chính, chí công vô tư, làm người công bộc tận tụy, trung thành của nhân dân, đời tư trong sáng, cuộc sống riêng giản dị;",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về phong cách quần chúng, dân chủ, nêu gương; nêu cao trách nhiệm gương mẫu của cán bộ, đảng viên, nhất là cán bộ lãnh đạo chủ chốt các cấp;",
    "c": "Tư tưởng, tấm gương đạo đức Hồ Chí Minh về xây dựng Đảng ta thật sự trong sạch, vững mạnh, \"là đạo đức, là văn minh \". Tài liệu tham khảo môn Triết - Anh Huy",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm’’;",
    "ans": "b"
  },
  {
    "num": 669,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2010 là gì?",
    "a": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm’’;",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh suốt đời phấn đấu cần, kiệm, liêm, chính, chí công vô tư, làm người công bộc tận tụy, trung thành của nhân dân, đời tư trong sáng, cuộc sống riêng giản dị;",
    "c": "Tư tưởng, tấm gương đạo đức Hồ Chí Minh về xây dựng Đảng ta thật sự trong sạch, vững mạnh, \"là đạo đức, là văn minh \".",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về phong cách quần chúng, dân chủ, nêu gương; nêu cao trách nhiệm gương mẫu của cán bộ, đảng viên, nhất là cán bộ lãnh đạo chủ chốt các cấp;",
    "ans": "c"
  },
  {
    "num": 670,
    "q": "“Một dân tộc biết cần, kiệm, biết liêm, là một dân tộc giàu về vật chất, mạnh về tinh thần, là một dân tộc văn minh tiến bộ. Dân tộc ta đang kháng chiến và kiến quốc, đang xây dựng một Đời sống mới trong nước Việt Nam mới. Chẳng những chúng ta phải cần, kiệm, chúng ta còn phải thực hành chữ Liêm”. Đoạn trích trên nằm trong tác phẩm nào của Chủ tịch Hồ Chí Minh?",
    "a": "Cần Kiệm Liêm Chính, 6-1949",
    "b": "Bài nói chuyện với bộ đội, công an và cán bộ trước khi vào tiếp quản Thủ đô, 5-9-1954.",
    "c": "Lời phát biểu trong phiên họp Hội đồng Chính phủ, 11-1950.",
    "d": "Chớ kiêu ngạo, phải khiêm tốn, ký tên C.B, Báo Nhân Dân, số 194, từ 13 đến 15-6-1954.",
    "ans": "a"
  },
  {
    "num": 671,
    "q": "Hồ Chí Minh khẳng định chủ nghĩa dân tộc là một động lực lớn ở các nước đang đấu tranh giành độc lập. Đó là chủ nghĩa dân tộc nào?",
    "a": "Chủ nghĩa nhân đạo cộng sản",
    "b": "Chủ nghĩa dân tộc chân chính.",
    "c": "Chủ nghĩa sô vanh, nước lớn.",
    "d": "Chủ nghĩa dân tộc vị kỷ.",
    "ans": "b"
  },
  {
    "num": 672,
    "q": "Các câu nói dưới đây, câu nói nào là của Chủ tịch Hồ Chí Minh?",
    "a": "Kiến thiết cần có nhân tài. Nhân tài nước ta dù chưa có nhiều lắm nhưng nếu chúng ta khéo lựa chọn, khéo phân phối, khéo dùng thì nhân tài càng ngày càng phát triển càng thêm nhiều.",
    "b": "Tài to ta dùng làm việc to, tài nhỏ ta cắt làm việc nhỏ, ai có năng lực về việc gì, ta đặt ngay vào việc ấy. Biết dùng người như vậy, ta sẽ không lo gì thiếu cán bộ.",
    "c": "Phải trọng nhân tài, trọng cán bộ, trọng mỗi một người có ích cho công việc chung của chúng ta.",
    "d": "Cả 3 phương án trên.",
    "ans": "d"
  },
  {
    "num": 673,
    "q": "Những tác phẩm dưới đây, tác phẩm nào không phải là của Hồ Chí Minh?",
    "a": "Tuyên ngôn của Đảng Cộng sản.",
    "b": "Tuyên ngôn Độc lập.",
    "c": "Bản án chế độ thực dân Pháp",
    "d": "Đường cách mệnh.",
    "ans": "a"
  },
  {
    "num": 674,
    "q": "“Tư tưởng và đạo đức Hồ Chí Minh là sự kết tinh những truyền thống tốt đẹp của dân tộc ta và tinh hoa văn hoá của nhân loại, là tài sản tinh thần vô giá của Đảng và nhân dân ta; là tấm gương sáng để mọi người Việt Nam học tập và noi theo”. Nhận định trên được trích trong văn bản nào của Đảng?",
    "a": "Chỉ thị số 06-CT/TW (khoá X)",
    "b": "Nghị quyết Đại hội X của Đảng Tài liệu tham khảo môn Triết - Anh Huy",
    "c": "Chỉ thị số 23-CT/TW (khoá IX)",
    "d": "Nghị quyết Đại hội IX của Đảng",
    "ans": "a"
  },
  {
    "num": 675,
    "q": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn giành được thắng lợi cần phải:",
    "a": "Có Đảng cộng sản lãnh đạo.",
    "b": "Cả ba đáp án trên đều đúng.",
    "c": "Đi theo con đường cách mạng vô sản",
    "d": "Tiến hành bằng bạo lực cách mạng.",
    "ans": "b"
  },
  {
    "num": 676,
    "q": "Chuyên đề học tập và làm theo tấm gương đạo đức Hồ Chí Minh năm 2011-2012 là gì?",
    "a": "Tư tưởng, tấm gương đạo đức Hồ Chí Minh về xây dựng Đảng ta thật sự trong sạch, vững mạnh, \"là đạo đức, là văn minh \".",
    "b": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm’’;",
    "c": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về phong cách quần chúng, dân chủ, nêu gương; nêu cao trách nhiệm gương mẫu của cán bộ, đảng viên, nhất là cán bộ lãnh đạo chủ chốt các cấp;",
    "d": "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh suốt đời phấn đấu cần, kiệm, liêm, chính, chí công vô tư, làm người công bộc tận tụy, trung thành của nhân dân, đời tư trong sáng, cuộc sống riêng giản dị;",
    "ans": "d"
  },
  {
    "num": 677,
    "q": "“…Vì ham danh vọng và địa vị, cho nên khi phụ trách một bộ phận nào, thì lôi người này, kéo người khác, ưa ai thì kéo vào, không ưa thì tìm cách tẩy ra. Thế là chỉ biết có mình, chỉ biết có một bộ phận mà quên cả Đảng. Đó là là một thứ bệnh hẹp hòi, trái hẳn với nguyên tắc tập trung và thống nhất của Đảng”. Câu nói trên của Chủ tịch Hồ Chí Minh được dẫn từ tác phẩm nào của Người dưới đây?",
    "a": "Sửa đổi lối làm việc (10/1947)",
    "b": "Diễn văn khai mạc Đại hội Đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam (9/1960)",
    "c": "Bài nói ở lớp huấn luyện đảng viên mới (5/1966)",
    "d": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân (3/2/1969)",
    "ans": "a"
  },
  {
    "num": 678,
    "q": "Nguồn gốc hình thành tư tưởng Hồ Chí Minh là gì?",
    "a": "Những nhân tố chủ quan thuộc về phẩm chất cá nhân của Hồ Chí Minh?",
    "b": "Cả 3 đáp án trên đều đúng",
    "c": "Chủ nghĩa Mác-Lênin, cơ sở thế giới quan và phương pháp luận của tư tưởng Hồ Chí Minh;",
    "d": "Tư tưởng và văn hoá truyền thống Việt Nam; tinh hoa văn hoá nhân loại; Tài liệu tham khảo môn Triết - Anh Huy",
    "ans": "b"
  }
];