import React from "react";

const Overview = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-4">
            <p className="pt-5">Overview</p>
            <hr style={{ width: "65px", color: "gray" }} />
            <h5>A brief History of M-DIT</h5>
            <br />
            <p>
         M Dasan Institute of Technology(M-DIT) KOZHIKODE was established in 2012-13.,<br/>
         with total of seven academic departments. The Tehnology Institute was named <br/>
         after the late dynamic visionary Shri.M.Dasan, former Member of Kerala Legislative <br/>
         Assembly. The Programs offered M-DIT extend beyond the horizon of engineering and also cover the key aspects of management.THe college is <br/>
         approved by the All India Council for Technical Education, New Delhi and affiliated <br/> 
         to the APJ Abdul Kalam Technical University (KTU).
            </p>
            <br />
            <p>
              M-DIT KOZHIKODE is a venture of M. Dasan Memorial C0-operative Institute of <br/>
              Engineering and Information Technology. In a shot span of time, the institute has <br/>
              carved a niche in the field of technical education in the state through its advanced  <br/>
              courses in engineering and technology and has become one of the most preffered <br/>
              institutions for aspiring students in the state. Students at M-DIT enjoy the twin <br/>
              advantage of quality education and serene environment, at the picturesque <br/>
              hinterlands of the campus located at Ulliyeri, Kozhikode. 
            </p>
          </div>
          <div className="col-md-6 col-12">
            <br /><br /><br /><br /><br />
            <img
              className="img-fluid m-3 p-3"
              src="./images/Rectangle 2380.png"
              alt="Technology"
              style={{width:"500px", height:'400px'}}
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default Overview;
