# Game Caro (phiên bản Việt Nam)

## Cách sử dụng
- Dùng Terminal chạy lệnh `npm install` để cài đặt các module.
- Sau khi cài đặt xong, khởi động ứng dụng bằng lệnh `npm start`

## Tính năng
1. Nhập tên của 2 người chơi trước khi bắt đầu. Nếu người chơi nào không có tên sẽ xuất hiện dòng nhắc nhở nhập tên. Khi tên 2 người chơi được nhập đầy đủ, trò chơi sẽ bắt đầu.
2. Thời gian (giây) giảm dần khi trò chơi bắt đầu cho đến khi có người thắng hoặc thời gian về 0. Thời gian chơi mặc định là 20 phút (điều chỉnh bằng cách thay đổi thông số **initTime** trong file './src/context/AppProvider.jsx')
3. Bàn chơi có kích thước mặc định 30x30 (điều chỉnh bằng cách thay đổi thông số **initBoardSize** trong file './src/context/AppProvider.jsx')
4. - Kích thước bàn chơi tự động mở rộng về 4 hướng khi số quân cờ chiếm 80% số ô trên bàn cờ (điều chỉnh bằng thay đổi số trong dòng lệnh `if (count >= Math.floor((boardSize ** 2 * 80) / 100)) {` trong file './src/context/AppProvider.jsx')
- Mỗi hướng tăng 5 ô (điều chỉnh bằng cách thay đổi thông số **expandAmount** trong file './src/context/AppProvider.jsx')
5. Khi hết thời gian nhưng không có người thắng cuộc, thông báo kết quả hoà sẽ hiện lên.
6. Khi có người thắng cuộc, xuất hiện thông báo tên người thắng, thời gian chơi của ván đấu, nút 'chơi lại'.
7. Quay về mục 1.

## Luật chơi
1. Người chơi 1 ('O') đi trước, người chơi 2 ('X') đi sau. Khi có người thắng thì người thua cuộc sẽ đi trước.
2. Nếu bên nào đạt được năm ô cờ chung hàng (có thể là hàng ngang, hàng dọc, hàng chéo) thì bên đó thắng.
*- Nếu đạt được năm ô cùng hàng mà bị chặn trước hai đầu thì vẫn chưa thắng. Chỉ có năm ô cùng hàng mới thắng; 6, 7,..., n ô vẫn không thắng.*
3. Khi hết giờ mà không có người thắng cuộc, kết quả sẽ là hoà.

## Chúc mọi người có khoảng thời gian chơi vui vẻ
