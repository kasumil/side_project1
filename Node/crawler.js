const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs").promises;

(async () => {
  try {
    const browser = await puppeteer.launch({}); // 페이지 시작
    const page = await browser.newPage(); // 페이지 인스턴스

    await page.goto(
      "https://www.tesla.com/ko_KR/", {waitUntil: 'networkidle2'} // 사이트 이동
    );
    await page.waitForSelector(  // 해당 태그가 생성되기까지 기다린다.
      "#block-tesla-frontend-content > div > div > div > div > div > div > div"
    );
    const body = await page.content(); // 인스턴스된 페이지 복제
    await page.close(); //페이지 인스턴스 종료
    await browser.close(); // 브라우저 종료

    const $ = cheerio.load(body);  // $에 치리오 파서 로드
    const list = $(   // 해당태그 경로찾기
      "#block-tesla-frontend-content > div > div > div > div > div > div > div >div"
    );
    const Footer = $('#page-new-homepage > div.dialog-off-canvas-main-canvas.dialog-off-canvas-main-canvas--with-scroll-snapping > footer');
    let bundle = [];
    list.each(function (i, ele) {  // 순회하면서 해당 태그 찾기
      const img_src = $(this).find('picture').attr('data-iesrc');
      const img_alt = $(this).find('picture').attr('data-alt');
      const name = $(this).find('.tcl-hero-parallax__heading').text();
      const riding = $(this).find('h2.tcl-hero-parallax__subheading a').text().slice(0, 5);
      const order = $(this).find('div.tcl-hero-parallax__buttons a').attr('title');
      const detail = $(this).find('a.tds-btn--white').attr('title');
      let item = 
        {
          mainImg : {
            'id': i,
            name,
            img_src, 
            img_alt,
            riding,
            order,
            detail,
          }
        };
      bundle.push(item);
    });
    Footer.each(function(i, el) {
      const copyRight1 = $(this).find('ol.tds-footer-meta li').text().replace(/^\s+|\s+$/gm,'').replace(/(\n)/g,' ');
      const copyRight2 = $(this).find('div.tds-content_container p').text();
      const copyRight3 = $(this).find('div.tds-content_container P a').text();
      let item = {
        footer : {
        copyRight1, copyRight2, copyRight3,
        }
      };
      bundle.push(item);
    });
    fs.writeFile('./MockupData.json', JSON.stringify(bundle));
  } catch (e) {
    console.log(e);
    throw e;
  }
})();