const express = require('express');
const app = express();
const cors = require('cors')(); // 필수

app.use(cors); // 필수

app.listen(4000); // 4000포트 사용

const company = {
count: 13,
company: [
{
id: 1,
name: "GS SHOP",
recruit: "보안 솔루션 담당자",
rebate: 1000000,
recommendation: 11,
favorite: 0,
type: "백엔드개발자"
},
{
id: 2,
name: "망고플레이트",
recruit: "Web Frontend Software Engineer",
rebate: 1000000,
recommendation: 36,
favorite: 1,
type: "백엔드개발자"
},
{
id: 3,
name: "매스프레소",
recruit: "Android Develop",
rebate: 1000000,
recommendation: 0,
favorite: 0,
type: "앱개발자"
},
{
id: 4,
name: "매스프레소",
recruit: "iOS Develop",
rebate: 1000000,
recommendation: 0,
favorite: 0,
type: "앱개발자"
},
{
id: 5,
name: "티몬(Tmon)",
recruit: "빅데이터 엔지니어",
rebate: 1000000,
recommendation: 0,
favorite: 0,
type: "백엔드개발자"
},
{
id: 6,
name: "XHIFT",
recruit: "웹 프론트엔드 개발자",
rebate: 1000000,
recommendation: 26,
favorite: 0,
type: "프론트엔드개발자"
},
{
id: 7,
name: "비비비(BBB)",
recruit: "안드로이드 개발자",
rebate: 1000000,
recommendation: 13,
favorite: 0,
type: "앱개발자"
},
{
id: 8,
name: "공팔리터(08L)",
recruit: "동영상 서비스 개발자",
rebate: 1000000,
recommendation: 10,
favorite: 0,
type: "백엔드개발자"
},
{
id: 9,
name: "넥슨코리아(NEXON)",
recruit: "웹 개발자(분석웹개발팀)",
rebate: 1500000,
recommendation: 2,
favorite: 0,
type: "백엔드개발자"
},
{
id: 10,
name: "인플루엔셜",
recruit: "웹 퍼블리셔(대리급)",
rebate: 1000000,
recommendation: 18,
favorite: 1,
type: "프론트엔드개발자"
},
{
id: 11,
name: "SK커뮤니케이션즈",
recruit: "웹서비스 개발자",
rebate: 500000,
recommendation: 22,
favorite: 0,
type: "프론트엔드개발자"
},
{
id: 12,
name: "SK커뮤니케이션즈",
recruit: "DBA",
rebate: 1000000,
recommendation: 12,
favorite: 0,
type: "백엔드개발자"
},
{
id: 13,
name: "NHN엔터테이먼트",
recruit: "백엔드 서비스 개발자",
rebate: 1500000,
recommendation: 2,
favorite: 1,
type: "백엔드개발자"
}
]
}

// 전체리스트
app.get('/company',function(req,res){
    res.json(company);
});

// 하나의 회사정보
app.get('/company/:id',function(req,res){ // id가 4인 회사의 정보를 가져옴 // url의 변수를 가져올때는 : 을 붙인다 // 뭐가들어오든 :id는 4가 나온다
    
    let data = company.company; //company안에서 company
    
    let company_id = req.params.id; // :id가 뭐가 들어오는지 체크 // reques(요청온) params id가 뭔지?
    console.log(company_id)
    
    let result = data.filter(function(value,index) { // 13개의 목록을 필터링하겠다. 4번만 나오게 필터링 // data의 value를 필터함
        return value.id == Number(company_id);
        //value의 id가 4와 같은것만 리턴한다. //:id가 문자로 들어오기떄문에 == 두개붙임... 골치가 안아픔... 요즘은 ===(=3개)를 붙임 //해킹 보안 방지를위해 자료형 넣음
    });
    
    // res.json({ details : result[0] }); // 항상 0번째만 보낸다 // 배열안의 데이터를....
    res.json({ details : result });
    
/*    res.json({ // 이런식으로 하나씩 보내도됨
        name : result[0].name,
        recruit : result[0].recruit,
    }); */
});


























