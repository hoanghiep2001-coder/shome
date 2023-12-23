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
            content: "asdsadasdsadasdsadsadasdasdasdasdsdsd",
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
        place: "Thanh Xuân",
        title: "Căn hộ mini Ngõ 30 Phan Đình Giót ",
        rating: 5,
        address: "Nhà số 3A, 30 Phan Đình Giót , Phường Phương Liệt, Quận Thanh Xuân, Hà Nội",
        price: "4.500.000 đ",
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
            content: "Căn nhà có 7 tầng",
          },
          {
            id: 2,
            content: "có Thang Máy, xe để tầng 1, nhà riêng chủ, cửa khoá vân tay, an ninh đảm bảo, giờ giấc đi lại thoải mái",
          },
          {
            id: 3,
            content: "phòng khép kín, cửa sổ thoáng mát, nấu ăn trong phòng, tiện nghi đầy đủ, Điều Hoà, Nóng Lạnh, Giường, Tủ Quần Áo, Kệ Bếp, Bếp Từ, Chậu rửa, có Máy Giặt dùng chung",
          },
          {
            id: 4,
            content: "Điện 3.8k, Nước 28k/khối, Mạng 100k/phòng, Dịch Vụ Chung 100k/người, Miễn phí 2 xe",
          },
          {
            id: 5,
            content: "Đóng 1, cọc 1, Hợp đồng thuê nhà 6 tháng - 1 năm",
          },


        ]
      },
      {
        id: 3,
        place: "Cầu Giấy",
        title: "Căn hộ CCMN đầy đủ tiện ích - 3 Nguyễn Văn Huyên",
        rating: 4.5,
        address: "Nguyễn Văn Huyên, Phường Quan Hoa, Quận Cầu Giấy, Hà Nội",
        price: "5.500.000 đ",
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
            content: "Chính chủ cho thuê. Căn hộ CCMN đầy đủ tiện ích - Cầu Giấy",
          },
          {
            id: 2,
            content: "Full dịch vụ tiện ích - 1 khách 1 ngủ. - An ninh bảo vệ 24/24, hệ thông pccc đầy đủ",
          },
          {
            id: 3,
            content: "Giá 5tr - 5tr3 - 5tr5 Cách các trường ĐH ~ 1 km (Đh Quốc Gia, Sư Phạm, Báo Chí, Giao Thông Vận Tải... )",
          },
          {
            id: 4,
            content: "Số nhà 25 ngõ 3 Nguyễn Văn Huyên, Cầu Giấy, Hà Nội.",
          },
        ]
      },
      {
        id: 4,
        place: "Đống Đa",
        title: "Phòng diện tích từ 20m2. Ngõ 1160 Láng",
        rating: 4.5,
        address: "Ngõ 1160 Láng, Phường Láng Thượng, Quận Đống Đa, Thành phố Hà Nội, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "2.500.000 đ",
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
            content: "Chính chủ cho thuê phòng CNMN khép kín, nội thất đầy đủ, ban công thoáng",
          },
          {
            id: 2,
            content: "Bao gồm: Giường, tủ, Bình nóng lạnh, điều hoà, Bàn bếp, chậu rửa, Máy giặt",
          },
          {
            id: 3,
            content: "Nhà nằm ở vị trí trung tâm vài bước ra đường ô tô, ngõ thông thoáng. Gần ĐH Giao thông, ngoại giao, ngoại thương, ...",
          },
          {
            id: 4,
            content: "phòng phù hợp nhiều người ở.",
          },
        ]
      },
      {
        id: 5,
        place: "Hoàng Mai",
        title: "Cho thuê chung cư HH linh đàm 1tr5 tr/tháng",
        rating: 5,
        address: "Linh Đàm, Hoàng Liệt, Hoàng Mai , Hoàng Mai",
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
        place: "Ba Đình",
        title: "Cho thuê phòng ngõ 61 Giang Văn Minh ",
        rating: 5,
        address: "ngõ 61 Phố Giang Văn Minh, Phường Đội Cấn, Quận Ba Đình, Hà Nội",
        price: "2.100.000 đ",
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
            content: "Chính chủ cho thuê phòng có không gian riêng, thông thoáng. Đầy đủ tủ, điều hoà, nóng lạnh máy giặt. Phòng phù hợp 2 người ở",
          },
          {
            id: 2,
            content: "Nhà ô tô tránh nhau. Nằm ở vị trí trung tâm rất thuận tiện đi lại.",
          },
          {
            id: 3,
            content: "Chi phí điện nước: 4k/số , nước 100k/ người, vệ sinh 50k/ người, máy giặt: 50k/ người, internet: 50k/ người",
          },
          {
            id: 4,
            content: "Nhà đầy đủ trang thiết bị PCCC",
          },
          {
            id: 5,
            content: "Lưu ý: không nuôi thú cưng, không để xe đạp điện trong nhà",
          },
        ]
      },
      {
        id: 7,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
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
        data_id: 7,
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 8,
        place: "Cầu Giấy",
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

       {
        id: 9,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
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
        data_id: 9,
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 10,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 10,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id:11,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id:11,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 12,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 12,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 13,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 13,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 14,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 14,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 15,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 15,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 16,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 16,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 17,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 17,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 18,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 18,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 19,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 19,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 20,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 20,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 21,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 21,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 22,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 22,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 23,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 23,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 24,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 24,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 25,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 25,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 26,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 26,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 27,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 27,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 28,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 28,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 29,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 29,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 30,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 30,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 31,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 31,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 32,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 32,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 33,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 33,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 34,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "3.000.000 đ",
        link: "/details",
        data_id: 34,

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
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
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
        place: "Thanh Xuân",
        title: "Căn hộ mini Ngõ 30 Phan Đình Giót ",
        rating: 5,
        address: "Nhà số 3A, 30 Phan Đình Giót , Phường Phương Liệt, Quận Thanh Xuân, Hà Nội",
        price: "4.500.000 đ",
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
            content: "Căn nhà có 7 tầng",
          },
          {
            id: 2,
            content: "có Thang Máy, xe để tầng 1, nhà riêng chủ, cửa khoá vân tay, an ninh đảm bảo, giờ giấc đi lại thoải mái",
          },
          {
            id: 3,
            content: "phòng khép kín, cửa sổ thoáng mát, nấu ăn trong phòng, tiện nghi đầy đủ, Điều Hoà, Nóng Lạnh, Giường, Tủ Quần Áo, Kệ Bếp, Bếp Từ, Chậu rửa, có Máy Giặt dùng chung",
          },
          {
            id: 4,
            content: "Điện 3.8k, Nước 28k/khối, Mạng 100k/phòng, Dịch Vụ Chung 100k/người, Miễn phí 2 xe",
          },
          {
            id: 5,
            content: "Đóng 1, cọc 1, Hợp đồng thuê nhà 6 tháng - 1 năm",
          },


        ]
      },
      {
        id: 3,
        place: "Cầu Giấy",
        title: "Căn hộ CCMN đầy đủ tiện ích - 3 Nguyễn Văn Huyên",
        rating: 4.5,
        address: "Nguyễn Văn Huyên, Phường Quan Hoa, Quận Cầu Giấy, Hà Nội",
        price: "5.500.000 đ",
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
            content: "Chính chủ cho thuê. Căn hộ CCMN đầy đủ tiện ích - Cầu Giấy",
          },
          {
            id: 2,
            content: "Full dịch vụ tiện ích - 1 khách 1 ngủ. - An ninh bảo vệ 24/24, hệ thông pccc đầy đủ",
          },
          {
            id: 3,
            content: "Giá 5tr - 5tr3 - 5tr5 Cách các trường ĐH ~ 1 km (Đh Quốc Gia, Sư Phạm, Báo Chí, Giao Thông Vận Tải... )",
          },
          {
            id: 4,
            content: "Số nhà 25 ngõ 3 Nguyễn Văn Huyên, Cầu Giấy, Hà Nội.",
          },
        ]
      },
      {
        id: 4,
        place: "Đống Đa",
        title: "Phòng diện tích từ 20m2. Ngõ 1160 Láng",
        rating: 4.5,
        address: "Ngõ 1160 Láng, Phường Láng Thượng, Quận Đống Đa, Thành phố Hà Nội, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
        price: "2.500.000 đ",
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
            content: "Chính chủ cho thuê phòng CNMN khép kín, nội thất đầy đủ, ban công thoáng",
          },
          {
            id: 2,
            content: "Bao gồm: Giường, tủ, Bình nóng lạnh, điều hoà, Bàn bếp, chậu rửa, Máy giặt",
          },
          {
            id: 3,
            content: "Nhà nằm ở vị trí trung tâm vài bước ra đường ô tô, ngõ thông thoáng. Gần ĐH Giao thông, ngoại giao, ngoại thương, ...",
          },
          {
            id: 4,
            content: "phòng phù hợp nhiều người ở.",
          },
        ]
      },
      {
        id: 5,
        place: "Hoàng Mai",
        title: "Cho thuê chung cư HH linh đàm 1tr5 tr/tháng",
        rating: 5,
        address: "Linh Đàm, Hoàng Liệt, Hoàng Mai , Hoàng Mai",
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
        place: "Ba Đình",
        title: "Cho thuê phòng ngõ 61 Giang Văn Minh ",
        rating: 5,
        address: "ngõ 61 Phố Giang Văn Minh, Phường Đội Cấn, Quận Ba Đình, Hà Nội",
        price: "2.100.000 đ",
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
            content: "Chính chủ cho thuê phòng có không gian riêng, thông thoáng. Đầy đủ tủ, điều hoà, nóng lạnh máy giặt. Phòng phù hợp 2 người ở",
          },
          {
            id: 2,
            content: "Nhà ô tô tránh nhau. Nằm ở vị trí trung tâm rất thuận tiện đi lại.",
          },
          {
            id: 3,
            content: "Chi phí điện nước: 4k/số , nước 100k/ người, vệ sinh 50k/ người, máy giặt: 50k/ người, internet: 50k/ người",
          },
          {
            id: 4,
            content: "Nhà đầy đủ trang thiết bị PCCC",
          },
          {
            id: 5,
            content: "Lưu ý: không nuôi thú cưng, không để xe đạp điện trong nhà",
          },
        ]
      },
      {
        id: 7,
        place: "Đống Đa",
        title: "CCMN Ngõ 157 Chùa Láng gần ĐH Ngoại Thương, Luật HN còn phòng",
        rating: 5,
        address: "Ngõ 157 Phố Chùa Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
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
        data_id: 7,
        describes: [
          {
            id: 1,
            content: "Nằm tại khu vực dân trí cao, cách ĐH Luật, HV Ngoại Giao, ĐH Ngoại Thương trong bán kính 700m",
          },
          {
            id: 2,
            content: "Phòng thiết kế thoáng có cửa sổ, đi lại tự do, tầng 1 để xe, an ninh tốt, có camera giám sát. ",
          },
          {
            id: 3,
            content: "Các phòng đều khép kín.Phòng to có giường, tủ, điều hòa, nóng lạnh. Nấu ăn tại phòng ",
          },
          {
            id: 4,
            content: "Trả tiền thuê theo tháng . Phòng như ảnh đăng. Các bạn liên hệ trực tiếp theo số điện thoại xem phòng",
          },
          {
            id: 5,
            content: "Diện tích : 17m2 - 20m2 - 23m2",
          },
        ]
      },
      {
        id: 8,
        place: "Cầu Giấy",
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
