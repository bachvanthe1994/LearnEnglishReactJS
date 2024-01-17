/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./Home.css";
import toeic_600_words_data from "../../resource/toeic_600_words/toeic_600_words_data";

class Home extends Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <div className="home-page">
        <div className="header">
          {
            "Trang web luyện từ vựng TOEIC và các chủ đề tiếng anh miễn phí. Mọi chi tiết xin liên hệ: bachvanthe1994@gmail.com"
          }
          <br />
          {
            "Lưu ý: version web 1.0 mọi thông số bài học đều được lưu vào cache của trình duyệt, nếu bạn xóa cache, mọi bài học và thông số sẽ được reset về ban đầu"
          }
        </div>
        <div className="course-item">
          <div className="course-title">{toeic_600_words_data.title}</div>
          {`Thống kê:\nĐã học: ${12}, chưa học: ${588}`}
          <div className="line" />
          <div>
            {toeic_600_words_data.data.map((item) => {
              return (
                <div className="course-child-item">
                  <img
                    className="course-child-item-image"
                    src={require(`../../resource/${toeic_600_words_data.folder}/data/${item.folder}/logo.jpg`)}
                  />
                  <div className="course-child-item-title">{item.title}</div>
                  <div className="course-child-item-des">{"12/12"}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
