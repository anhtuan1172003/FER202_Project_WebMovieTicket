import React from 'react';
import { useParams } from 'react-router-dom';
import '../style/MovieDetail.css';

export default function MovieDetail() {
    const movies = [
        {
            title: "ĐẤT RỪNG PHƯƠNG NAM",
            origin: "Việt nam",
            date: "20/10/2023",
            director: "Nguyễn Quang Dũng",
            acter: "Trấn Thành ,Huỳnh Đạo Khang,Tuấn Trần,Hứa Vĩ Văn,...",
            advise: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
            description: " Cuộc phiêu lưu khắp nơi của An trải qua nhiều miền đất Nam kỳ có nét đẹp hoang sơ và nên thơ. ",
            duration: "95 phút",
            showtimes: ["19:10", "22:30"],
            poster: "/image/movie1.jpeg",
            trailerUrl:"https://www.youtube.com/watch?v=hktzirCnJmQ&t=2s"
        },
        {
            title: "RÒM",
            origin: "Việt nam",
            date: "14/06/2024",
            director: "Trần Thanh Huy",
            acter: "Wowy,Trần Anh Khoa,Cát Phượng,Lãnh Thanh,...",
            advise: "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
            description: "Khoa là một cậu bé vô danh, người xem khám phá thế giới của cậu bé này qua những lát cắt thời gian, những góc nhìn, lời kể chuyện thay đổi nhanh đến chóng mặt. ",
            duration: "88 phút",
            showtimes: ["19:10", "20:50", "21:20", "22:55", "23:35"],
            poster: "/image/movie2.jpeg",
            trailerUrl:"https://www.youtube.com/watch?v=XRm1P7oGpMQ"
        }
    ];
    const { title } = useParams();
    const movie = movies.find((m) => m.title === decodeURIComponent(title));
    const handleWatchTrailer = (trailerUrl) => {
        window.open(trailerUrl, '_blank');
      };
    return (

            <div className="movie-detail-container">
            {movie ? (
              <div  className="movie-detail-content" >
                
                <img  className="movie-poster" src={movie.poster} alt={movie.title} />
                <div className="movie-info">
                <h2>{movie.title}</h2> 
                <p> {movie.origin}</p>
                <p> {movie.duration}</p>
                <p>Đạo diễn:{movie.director}</p>
                <p>Diễn viên:{movie.acter}</p>
                <p>Khởi chiếu: {movie.date}</p>
                <p>{movie.description}</p>
                <div className="color-advise">
                <p>Khuyến cáo:{movie.advise}</p>
                </div>
                
                <button className="trailer-button" onClick={() => handleWatchTrailer(movie.trailerUrl)}>Xem trailer</button>
              </div>
              </div>
            ) : (
              <p>Movie not found.</p>
            )}
          </div>
        
        
    );
}