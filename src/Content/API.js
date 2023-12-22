const APIs = {
  headerAPIs: {
    Navigation: [
      {
        Menu: [
          {
            id: 1,
            content: "Trang Chủ",
            path: "/",
          },
          {
            id: 2,
            content: "Tìm Thuê",
            path: "/filter",
          },
          {
            id: 3,
            content: "Dịch Vụ Sửa Chữa",
            path: "#",
          },
        ],
        UserActions: [
          {
            id: 1,
            elementType: "a",
            content: "Đăng Tin Miễn Phí",
            path: "#",
          },
        ],
      },
    ],
  },
  bodyAPIs: {
    hero: {
      slogan: "TÌM NHANH, KIẾM DỄ TRỌ MỚI TOÀN QUỐC",
      description:
        "SHOME - Chúng tôi là những người bạn ở đây giúp bạn tìm kiếm phòng trọ...",
      banner: "../Content/thumb/bg_head.jpg",
    },
    filter: [
      {
        id: 1,
        title: "Khu vực",
        dropDown: [
          {
            id: 1,
            content: "Hoàng Mai",
            fakeId: 10,
          },
          {
            id: 2,
            content: "Vĩnh Tuy",
            fakeId: 11,
          },
        ],
      },
      {
        id: 2,
        title: "Loại",
        dropDown: [
          {
            id: 1,
            content: "Hoàng Mai",
            fakeId: 12,
          },
          {
            id: 2,
            content: "Hoàng Mai",
            fakeId: 13,
          },
        ],
      },
      {
        id: 3,
        title: "Giá",
        dropDown: [
          {
            id: 1,
            content: "1.000.000 - 1.999.999 VNĐ",
            fakeId: 120,
          },
          {
            id: 2,
            content: "2.000.000 - 2.999.999 VNĐ",
            fakeId: 121,
          },
          {
            id: 3,
            content: "2.000.000 - 2.999.999 VNĐ",
            fakeId: 122,
          },
          {
            id: 4,
            content: "2.000.000 - 2.999.999 VNĐ",
            fakeId: 123,
          },
        ],
      },
      {
        id: 4,
        title: "Lọc nâng cao",
        dropDown: [
          {
            id: 1,
            content: "Hoàng Mai",
            fakeId: 16,
          },
          {
            id: 1,
            content: "Hoàng Mai",
            fakeId: 17,
          },
        ],
      },
    ],
    aboutUs: [
      {
        id: 1,
        title: "CĂN HỘ",
        content:
          "Vệ sinh sạch sẽ, không gian thoáng mát, đầy đủ nội thất lắp đặt mới.",
        image: "https://bandon.vn/images/icon-server-01.png",
      },
      {
        id: 2,
        title: "GIÁ ĐIỆN",
        content:
          'Người thuê phòng sẽ được "trả tiền điện" theo đúng "khung giá nhà nước".',
        image: "https://bandon.vn/images/icon-server-02.png",
      },
      {
        id: 3,
        title: "NƯỚC SINH HOẠT",
        content:
          'Người thuê phòng không phải lo "thiếu nước sạch" hay "giá tiền nước cao".',
        image: "https://bandon.vn/images/icon-server-03.png",
      },
      {
        id: 4,
        title: "AN NINH",
        content:
          'Hệ thống an ninh đảm bảo an toàn từ "camera giám sát" đến "bảo mật vân tay".',
        image: "https://bandon.vn/images/icon-server-04.png",
      },
      {
        id: 5,
        title: "VĂN HÓA",
        content:
          "Nếp sống văn hóa lành mạnh, thân thiện & gần gũi trong khu nhà trọ.",
        image: "https://bandon.vn/images/icon-server-05.png",
      },
      {
        id: 6,
        title: "HỖ TRỢ 24H",
        content:
          "Đội ngũ vận hành hỗ trợ 24h, xử lý mọi vấn đề cho người thuê phòng.",
        image: "https://bandon.vn/images/icon-server-06.png",
      },
    ],
    subAboutUs: {
      descriptions: [
        {
          id: "aboutUsDesc1",
          content:
            "Chúng tôi là nhóm sinh viên nghiên cứu khoa học của trường Đại Học tại Hà Nội. Trải qua 4 năm học, là sinh viên chúng tôi nhận ra được những khó khăn, rủi ro tiềm ẩn khi đi thuê phòng trọ không chỉ của sinh viên mà còn là nỗi sợ với những người xa quê lên thành phố làm việc. Chính vì vậy, với những kiến thức mà thầy cô truyền đạt lại trong 4 năm sinh viên, chúng tôi đã cùng nhau xây dựng lên website Hỗ Trợ Tìm Kiếm Nhà Trọ giúp mọi người dễ dàng tìm kiếm cho mình nhà trọ phù hợp, tiện lợi và nhanh chóng nhất.",
        },
        {
          id: "aboutUsDesc2",
          content:
            "Chúng tôi luôn sẵn sàng phục vụ nhu cầu 'tìm nhà trọ, tìm phòng trọ, chung cư mini, căn hộ mini' cho mọi khách hàng, với mong muốn 'Tạo dựng môi trường sống TỐT - Đảm bảo sự MINH BẠCH' cũng như QUYỀN LỢI cho người thuê phòng và cả cộng đồng.",
        },
      ],
      utilities: [],
    },
    roomList: [
      {
        id: 1,
        place: "Hà Nội",
        title: "Phòng Trọ 25m2 Full Nội Thất Gần ĐH SPHN",
        rating: 3.2,
        address: "Ngõ 38, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
        price: "3.000.000 đ",
        image:
          "https://bandon.vn/uploads/posts/thiet-ke-nha-tro-dep-2020-bandon-0.jpg",
        link: "/details",
        data_id: 1,
      },
      {
        id: 2,
        place: "Huế",
        title: "Cho thuê trọ phòng rộng rãi ngay đường quốc lộ",
        rating: 1.6,
        address: "Khối phố Bồng Lai, Phường Điện Minh, Điện bàn , Điện Bàn",
        price: "1.500.000 đ",
        image:
          "https://toigingiuvedep.vn/wp-content/uploads/2021/10/hinh-anh-giuong-ngu-dep-hien-dai-va-thoai-mai-nhat.jpg",
        link: "/details",
        data_id: 2
      },
      {
        id: 3,
        place: "Hồ Chí Minh",
        title: "Phòng Full NT giá từ 3tr Quang Trung P8, GV",
        rating: 3.8,
        address: "Quang Trung, 8, Gò Vấp , Gò Vấp",
        price: "3.500.000 đ",
        image:
          "https://noithatthongminh.pro/wp-content/uploads/2019/02/48-c99d.jpg",
        link: "/details",
        data_id: 3,
      },
      {
        id: 4,
        place: "Hồ Chí Minh",
        title: "Phòng Trọ Mới Xây Đường 297- 22m2 An Ninh Sạch Sẽ",
        rating: 4.5,
        address: "3/23/19 Đường số 297, Phường Phước Long B, Quận 9, Hồ Chí Minh , Quận 9",
        price: "2.000.000 đ",
        image:
          "https://furnibuy.com/wp-content/uploads/2020/07/tranh-lo-hoa-trang-tri-phong-ngu-dep-hien-dai-1318.jpg",
        link: "/details",
        data_id: 4,
      },
      {
        id: 5,
        place: "Hà Nội",
        title: "Cho thuê chung cư HH linh đàm 1tr5 tr/tháng",
        rating: 5,
        address: " Linh Đàm, Hoàng Liệt, Hoàng Mai , Hoàng Mai",
        price: "2.100.000 đ",
        image:
          "https://noithatmanhhe.vn/media/31975/thiet-ke-noi-that-phong-ngu-01-1.jpg",
        link: "/details",
        data_id: 5,
      },
      {
        id: 6,
        place: "Huế",
        title: "TRỌ KHÔNG LỤT tại TRẦN PHÚ - HUẾ( gần trường Đh khoa học , Đh y dược, cao đẳng y tế , Đh kinh tế, Đh ngoại ngữ)",
        rating: 2.2,
        address: "Trần Phú, Phước Vĩnh, Huế , Huế",
        price: "3.000.000 đ",
        image:
          "https://khonem.com/upload/images/G4.jpg",
        link: "/details",
        data_id: 6,
      },
      {
        id: 7,
        place: "Hồ Chí Minh",
        title: "Phòng gần chợ Hạnh Thông Tây, có máy lạnh, nhà vệ sinh riêng",
        rating: 4.3,
        address: "Số 17, 11, Gò Vấp , Gò Vấp",
        price: "1.700.000 đ",
        image:
          "https://blog.onhome.asia/hs-fs/hubfs/phong-ngu-5m2-cua-anh-thanh.jpg?width\u003d1200\u0026name\u003dphong-ngu-5m2-cua-anh-thanh.jpg",
        link: "/details",
        data_id: 7,
      },
      {
        id: 8,
        place: "Hà Nội",
        title: "Phòng Trọ 25m2 Full Nội Thất Gần ĐH SPHN",
        rating: 2.7,
        address: "Ngõ 38, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
        price: "2.600.000 đ",
        image:
          "https://noithattugia.com/wp-content/uploads/2022/04/thiet-ke-noi-that-phong-ngu-cho-be-gai-voi-tong-mau-hong-chu-dao-ket-hop-cung-cac-do-noi-that-co-mau-nhe-nhang-nhu-xanh-reu-va-trang_1659933121.jpg",
        link: "/details",
        data_id: 8,
      },
    ],
    detailList: [
      {
        id: 1,
        place: "Hà Nội",
        title: "Phòng Trọ 25m2 Full Nội Thất Gần ĐH SPHN",
        rating: 3.2,
        address: "Ngõ 38, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
        price: "3.000.000 đ",
        images: [
          {
            path: "https://tromoi.com/uploads/guest/o_1hghp7f81sfi43313vt19lgiv1d.jpg",
          },
          {
            path: "https://file4.batdongsan.com.vn/resize/745x510/2022/02/28/20220228110557-0c0e_wm.jpg",
          },
          {
            path: "https://thesaigontimes.vn/wp-content/uploads/2022/08/chungcu4.jpg",
          },
        ],
        link: "/details",
        data_id: 1,
        describes: [
          {
            id: 1,
            content: "Diện tích căn phòng: Phòng 1 ngủ 30m2",
          },
          {
            id: 2,
            content: "Nội thất cơ bản gồm: Điều hòa, nóng lạnh, giường ngủ, tủ quần áo, rèm cửa.",
          },
          {
            id: 3,
            content: "Chi phí điện nước: Áp dụng tính giá nhà nước (tiêu chuẩn nhà nước)",
          },
          {
            id: 4,
            content: "An ninh tòa nhà: Camera theo dõi 24h; Khóa vân tay bảo mật",
          },
          {
            id: 5,
            content: "Tiện ích tòa nhà: Khu để xe miễn phí; Máy giặt chung miễn phí; Tự do đi lại 24h, không chung chủ.",
          },
          {
            id: 6,
            content: "Thủ tục - giấy tờ: Hợp đồng thuê nhà, hợp đồng đặt cọc, thủ tục đăng ký tạm trú tạm vắng,... Đội ngũ SHome sẽ hỗ trợ khách hàng hoàn thành tất cả",
          },
          {
            id: 7,
            content: "Phòng trọ phù hợp dành cho các bạn sinh viên, người đi làm."
          },


        ]
      },
      {
        id: 2,
        place: "Huế",
        title: "Cho thuê trọ phòng rộng rãi ngay đường quốc lộ",
        rating: 1.6,
        address: "Khối phố Bồng Lai, Phường Điện Minh, Điện bàn , Điện Bàn",
        price: "1.500.000 đ",
        images: [
          {
            path: "https://i1-ngoisao.vnecdn.net/2021/04/02/Anh-1-2-1617326758.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=6Zbcom1lh0k4utXCEzt7hA",
          },
          {
            path: "https://cdn.tingtong.vn/images/01821b0987c13d0b647eafaf818f1636.jpg",
          },
          {
            path: "https://thesaigontimes.vn/wp-content/uploads/2022/08/chungcu4.jpg",
          },
        ],
        link: "/details",
        data_id: 2,
        describes: [
          {
            id: 1,
            content: "Diện tích căn phòng: Phòng 1 ngủ 30m2",
          },
          {
            id: 2,
            content: "Nội thất cơ bản gồm: Điều hòa, nóng lạnh, giường ngủ, tủ quần áo, rèm cửa.",
          },
          {
            id: 3,
            content: "Chi phí điện nước: 4k/số , nước 15k/khối",
          },
          {
            id: 4,
            content: "An ninh tòa nhà: Camera theo dõi 24h; Khóa then chốt",
          },
          {
            id: 5,
            content: "Tiện ích tòa nhà: Để xe tầng 1, giặt giũ tầng 4, nấu ăn trong phòng.",
          },
          {
            id: 6,
            content: "Thủ tục - giấy tờ: Hợp đồng thuê nhà, hợp đồng đặt cọc, thủ tục đăng ký tạm trú tạm vắng,... Đội ngũ SHome sẽ hỗ trợ khách hàng hoàn thành tất cả",
          },
          {
            id: 7,
            content: "Phòng trọ phù hợp dành cho các bạn sinh viên, người đi làm."
          },


        ]
      },
      {
        id: 3,
        place: "Hồ Chí Minh",
        title: "Phòng Full NT giá từ 3tr Quang Trung P8, GV",
        rating: 3.8,
        address: "Quang Trung, 8, Gò Vấp , Gò Vấp",
        price: "3.500.000 đ",
        images: [
          {
            path: "https://media.loveitopcdn.com/26706/thumb/hinh-anh-mau-thiet-ke-phong-tro-dep-dien-tich-15m2-18m2.jpeg",
          },
          {
            path: "https://file4.batdongsan.com.vn/resize/745x510/2022/02/28/20220228110557-0c0e_wm.jpg",
          },
          {
            path: "https://thesaigontimes.vn/wp-content/uploads/2022/08/chungcu4.jpg",
          },
        ],
        link: "/details",
        data_id: 3,
        describes: [
          {
            id: 1,
            content: "Diện tích căn phòng: 35m2 khép kín",
          },
          {
            id: 2,
            content: "Nội thất cơ bản gồm: Điều hòa, nóng lạnh, giường ngủ, tủ quần áo, rèm cửa.",
          },
          {
            id: 3,
            content: "Chi phí điện nước: 3.5k/số , nước 25k/khối",
          },
          {
            id: 4,
            content: "An ninh tòa nhà: Camera nhà để xe; Công an Phường ngay đối diện",
          },
          {
            id: 5,
            content: "Tiện ích tòa nhà: Thoải mái không chung chủ, bến xe buýt và công an gần nhà, cực kỳ an toàn và tiện nghi",
          },
          {
            id: 6,
            content: "Thủ tục - giấy tờ: Hợp đồng thuê nhà, hợp đồng đặt cọc, thủ tục đăng ký tạm trú tạm vắng,... Đội ngũ SHome sẽ hỗ trợ khách hàng hoàn thành tất cả",
          },
          {
            id: 7,
            content: "Phòng trọ phù hợp dành cho các bạn sinh viên, người đi làm."
          },
        ]
      },
      {
        id: 4,
        place: "Hồ Chí Minh",
        title: "Phòng Trọ Mới Xây Đường 297- 22m2 An Ninh Sạch Sẽ",
        rating: 4.6,
        address: "3/23/19 Đường số 297, Phường Phước Long B, Quận 9, Hồ Chí Minh , Quận 9",
        price: "2.000.000 đ",
        images: [
          {
            path: "https://tromoi.com/uploads/guest/o_1hghp7f81sfi43313vt19lgiv1d.jpg",
          },
          {
            path: "https://file4.batdongsan.com.vn/resize/745x510/2022/02/28/20220228110557-0c0e_wm.jpg",
          },
          {
            path: "https://thesaigontimes.vn/wp-content/uploads/2022/08/chungcu4.jpg",
          },
        ],
        link: "/details",
        data_id: 4,
        describes: [
          {
            id: 1,
            content: "Diện tích căn phòng: 35m2 khép kín",
          },
          {
            id: 2,
            content: "Nội thất cơ bản gồm: nóng lạnh, giường ngủ.",
          },
          {
            id: 3,
            content: "Chi phí điện nước: 4k/số , nước 70k/ người",
          },
          {
            id: 4,
            content: "An ninh tòa nhà: Camera nhà để xe; Công an Phường ngay đối diện",
          },
          {
            id: 5,
            content: "Tiện ích tòa nhà: Giao thoa giữa các trường đại học, khu công nghiệp, đầu ngõ có quán nét",
          },
          {
            id: 6,
            content: "Thủ tục - giấy tờ: Hợp đồng thuê nhà, hợp đồng đặt cọc, thủ tục đăng ký tạm trú tạm vắng,... Đội ngũ SHome sẽ hỗ trợ khách hàng hoàn thành tất cả",
          },
          {
            id: 7,
            content: "Phòng trọ phù hợp dành cho các bạn sinh viên, người đi làm."
          },
        ]
      },
      {
        id: 5,
        place: "Hà Nội",
        title: "Cho thuê chung cư HH linh đàm 1tr5 tr/tháng",
        rating: 5,
        address: " Linh Đàm, Hoàng Liệt, Hoàng Mai , Hoàng Mai",
        price: "2.100.000 đ",
        images: [
          {
            path: "https://tromoi.com/uploads/guest/o_1hghp7f81sfi43313vt19lgiv1d.jpg",
          },
          {
            path: "https://file4.batdongsan.com.vn/resize/745x510/2022/02/28/20220228110557-0c0e_wm.jpg",
          },
          {
            path: "https://thesaigontimes.vn/wp-content/uploads/2022/08/chungcu4.jpg",
          },
        ],
        link: "/details",
        data_id: 5,
        describes: [
          {
            id: 1,
            content: "Diện tích căn phòng: 35m2 khép kín",
          },
          {
            id: 2,
            content: "Nội thất cơ bản gồm: nóng lạnh, giường ngủ.",
          },
          {
            id: 3,
            content: "Chi phí điện nước: 4k/số , nước 70k/ người",
          },
          {
            id: 4,
            content: "An ninh tòa nhà: Camera nhà để xe; Công an Phường ngay đối diện",
          },
          {
            id: 5,
            content: "Tiện ích tòa nhà: Giao thoa giữa các trường đại học, khu công nghiệp, đầu ngõ có quán nét",
          },
          {
            id: 6,
            content: "Thủ tục - giấy tờ: Hợp đồng thuê nhà, hợp đồng đặt cọc, thủ tục đăng ký tạm trú tạm vắng,... Đội ngũ SHome sẽ hỗ trợ khách hàng hoàn thành tất cả",
          },
          {
            id: 7,
            content: "Phòng trọ phù hợp dành cho các bạn sinh viên, người đi làm."
          },
        ]
      },
      {
        id: 6,
        place: "Huế",
        title: "TRỌ KHÔNG LỤT tại TRẦN PHÚ - HUẾ( gần trường Đh khoa học , Đh y dược, cao đẳng y tế , Đh kinh tế, Đh ngoại ngữ)",
        rating: 2.2,
        address: "Trần Phú, Phước Vĩnh, Huế , Huế",
        price: "3.000.000 đ",
        images: [
          {
            path: "https://tromoi.com/uploads/guest/o_1hghp7f81sfi43313vt19lgiv1d.jpg",
          },
          {
            path: "https://bandon.vn/uploads/thiet-ke-nha-tro-dep-2020-bandon-19.jpg",
          },
          {
            path: "https://thesaigontimes.vn/wp-content/uploads/2022/08/chungcu4.jpg",
          },
        ],
        link: "/details",
        data_id: 6,
        describes: [
          {
            id: 1,
            content: "Diện tích căn phòng: 35m2 khép kín",
          },
          {
            id: 2,
            content: "Nội thất cơ bản gồm: nóng lạnh, giường ngủ.",
          },
          {
            id: 3,
            content: "Chi phí điện nước: 4k/số , nước 70k/ người",
          },
          {
            id: 4,
            content: "An ninh tòa nhà: Camera nhà để xe; Công an Phường ngay đối diện",
          },
          {
            id: 5,
            content: "Tiện ích tòa nhà: Giao thoa giữa các trường đại học, khu công nghiệp, đầu ngõ có quán nét",
          },
          {
            id: 6,
            content: "Thủ tục - giấy tờ: Hợp đồng thuê nhà, hợp đồng đặt cọc, thủ tục đăng ký tạm trú tạm vắng,... Đội ngũ SHome sẽ hỗ trợ khách hàng hoàn thành tất cả",
          },
          {
            id: 7,
            content: "Phòng trọ phù hợp dành cho các bạn sinh viên, người đi làm."
          },
        ]
      },
      {
        id: 7,
        place: "Hồ Chí Minh",
        title: "Phòng gần chợ Hạnh Thông Tây, có máy lạnh, nhà vệ sinh riêng",
        rating: 4.3,
        address: "Số 17, 11, Gò Vấp , Gò Vấp",
        price: "1.700.000 đ",
        images: [
          {
            path: "https://tromoi.com/uploads/guest/o_1hghp7f81sfi43313vt19lgiv1d.jpg",
          },
          {
            path: "https://file4.batdongsan.com.vn/resize/745x510/2022/02/28/20220228110557-0c0e_wm.jpg",
          },
          {
            path: "https://thesaigontimes.vn/wp-content/uploads/2022/08/chungcu4.jpg",
          },
        ],
        link: "/details",
        data_id: 7,
        describes: [
          {
            id: 1,
            content: "Diện tích căn phòng: 35m2 khép kín",
          },
          {
            id: 2,
            content: "Nội thất cơ bản gồm: nóng lạnh, giường ngủ.",
          },
          {
            id: 3,
            content: "Chi phí điện nước: 4k/số , nước 70k/ người",
          },
          {
            id: 4,
            content: "An ninh tòa nhà: Camera nhà để xe; Công an Phường ngay đối diện",
          },
          {
            id: 5,
            content: "Tiện ích tòa nhà: Giao thoa giữa các trường đại học, khu công nghiệp, đầu ngõ có quán nét",
          },
          {
            id: 6,
            content: "Thủ tục - giấy tờ: Hợp đồng thuê nhà, hợp đồng đặt cọc, thủ tục đăng ký tạm trú tạm vắng,... Đội ngũ SHome sẽ hỗ trợ khách hàng hoàn thành tất cả",
          },
          {
            id: 7,
            content: "Phòng trọ phù hợp dành cho các bạn sinh viên, người đi làm."
          },
        ]
      },
      {
        id: 8,
        place: "Hà Nội",
        title: "Phòng Trọ 25m2 Full Nội Thất Gần ĐH SPHN",
        rating: 2.7,
        address: "Ngõ 38, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
        price: "2.600.000 đ",
        images: [
          {
            path: "https://tromoi.com/uploads/guest/o_1hghp7f81sfi43313vt19lgiv1d.jpg",
          },
          {
            path: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/8/17/1081975/Nha-Tro.jpg",
          },
          {
            path: "https://baodautu.vn/Images/chicong/2017/10/08/do-xo-san-dat-nen-xay-nha-tro-cho-thue1507434774.jpg",
          },
        ],
        link: "/details",
        data_id: 8,
        describes: [
          {
            id: 1,
            content: "Diện tích căn phòng: 35m2 khép kín",
          },
          {
            id: 2,
            content: "Nội thất cơ bản gồm: nóng lạnh, giường ngủ.",
          },
          {
            id: 3,
            content: "Chi phí điện nước: 4k/số , nước 70k/ người",
          },
          {
            id: 4,
            content: "An ninh tòa nhà: Camera nhà để xe; Công an Phường ngay đối diện",
          },
          {
            id: 5,
            content: "Tiện ích tòa nhà: Giao thoa giữa các trường đại học, khu công nghiệp, đầu ngõ có quán nét",
          },
          {
            id: 6,
            content: "Thủ tục - giấy tờ: Hợp đồng thuê nhà, hợp đồng đặt cọc, thủ tục đăng ký tạm trú tạm vắng,... Đội ngũ SHome sẽ hỗ trợ khách hàng hoàn thành tất cả",
          },
          {
            id: 7,
            content: "Phòng trọ phù hợp dành cho các bạn sinh viên, người đi làm."
          },
        ]
      },
    ],
    outstandingArea: [
      {
        id: 1,
        path: "https://znews-photo.zingcdn.me/w660/Uploaded/lce_qjlcv/2022_10_09/nga_tu_so_HQ_zing.jpg",
        title: "Bách Kinh Xây",
        description: "9411 tin trọ"
      },
      {
        id: 2,
        path: "https://tromoi.com/frontend/home/images/thanh-pho/ha-noi.jpg",
        title: "Hoàn Kiếm",
        description: "811 tin trọ"
      },
      {
        id: 3,
        path: "https://file4.batdongsan.com.vn/2022/01/12/PHJN6Zw0/20220112181302-42f3.jpg",
        title: "Thanh Xuân",
        description: "655 tin trọ"
      },
      {
        id: 4,
        path: "https://cdn.reatimes.vn/mediav2/media_old/media/uploaded/25/2018/01/20/quan-Long-Bien-se-co-kich-ban-tuong-tu-voi-Thu-Thiem-1.jpg",
        title: "Long Biên",
        description: "570 tin trọ"
      },
    ],
    Pages: {
      filter: [
        {
          id: 1,
          title: "Khu vực",
          dropDown: [
            {
              id: 1,
              content: "Hoàng Mai",
              fakeId: 101,
            },
            {
              id: 2,
              content: "Vĩnh Tuy",
              fakeId: 102,
            },
            {
              id: 3,
              content: "Vĩnh Hưng",
              fakeId: 103,
            },
            {
              id: 4,
              content: "Lĩnh Nam",
              fakeId: 104,
            },
          ],
        },
        {
          id: 2,
          title: "Loại Hình",
          dropDown: [
            {
              id: 1,
              content: "Vệ sinh khép kín",
              fakeId: 110,
            },
            {
              id: 2,
              content: "Vệ sinh chung",
              fakeId: 111,
            },
            {
              id: 3,
              content: "Chung cư mini",
              fakeId: 112,
            },
          ],
        },
        {
          id: 3,
          title: "Mức Giá",
          dropDown: [
            {
              id: 1,
              content: "1.000.000 - 1.999.999 VNĐ",
              fakeId: 120,
            },
            {
              id: 2,
              content: "2.000.000 - 2.999.999 VNĐ",
              fakeId: 121,
            },
            {
              id: 3,
              content: "3.000.000 - 3.999.999 VNĐ",
              fakeId: 122,
            },
            {
              id: 4,
              content: "4.000.000 - 4.999.999 VNĐ",
              fakeId: 123,
            },
            {
              id: 5,
              content: "5.000.000 - 5.999.999 VNĐ",
              fakeId: 124,
            },
          ],
        },
      ],
    },
  },
  footerAPIs: {
    aboutUs: [
      {
        id: 1,
        title: "CHÚNG TÔI",
        content:
          "Nhóm sinh viên nghiên cứu khoa học của trường Đại học tại Hà Nội với mong muốn xây dựng và phát triển website Hỗ Trợ Tìm Kiếm Nhà Trọ giúp mọi người dễ dàng tìm kiếm cho mình nhà trọ phù hợp, tiện lợi và nhanh chóng nhất.",
      },
      {
        id: 2,
        title: "SHOME - BE LIKE FRIEND",
        content: "Lên ý tưởng và thành lập ngày 18 tháng 11 năm 2022.",
      },
    ],
    link: [
      {
        id: 1,
        content: "Hướng dẫn đặt phòng",
        url: "#",
      },
      {
        id: 2,
        content: "Hình thức thanh toán",
        url: "#",
      },
      {
        id: 3,
        content: "Chính sách đổi trả/ hủy phòng",
        url: "#",
      },
      {
        id: 4,
        content: "Chính sách bảo mật thông tin",
        url: "#",
      },
    ],
    companyInfo: [
      {
        id: 1,
        title: "Văn phòng :",
        content: "Hà Nội.",
      },
      {
        id: 2,
        title: "E-mail :",
        content: "httkphongtro@gmail.com",
      },
      {
        id: 3,
        title: "Số điện thoại :",
        content: " (+84) 0396448870",
      },
      {
        id: 4,
        title: "Địa chỉ ĐKKD :",
        content: "Số 4, ngách 124 Vĩnh Tuy, Phường Vĩnh Tuy, Hà Nội",
      },
    ],
  },
};

export default APIs;
