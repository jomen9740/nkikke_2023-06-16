function StoreBox__init(no) {	
	$(`.download-box > .store-box-${no}`).mouseenter(function() {	
		$(`.download-box .qr-${no}`).addClass('active');	
	});

	$(`.download-box > .store-box-${no}`).mouseleave(function() {	
		$(`.download-box .qr-${no}`).removeClass('active');	
	});
}

StoreBox__init(1);
StoreBox__init(2);


// 공지사항 스와이퍼
function Swiperslide1__init() {
	let swiper = new Swiper('.news__center .swiper-container', {
		slidesPerView: 1, // 한 페이지당 보여줄 개수
		autoplay : {
			delay: 3000,
		},		
		loop: true, // 슬라이드 반복
	});

	$('.news__center .swiper-container').mouseenter(function() {
		swiper.autoplay.stop();
	});
	
	$('.news__center .swiper-container').mouseleave(function() {
		swiper.autoplay.start();
	});
}

Swiperslide1__init();

// 탭 메뉴
function Box1__init() {
	$('.news-title-box > span').click(function() {
		let $this = $(this);
		let thisIndex = $this.index();
		
		$this.siblings('.active').removeClass('active');

		let $mainBox = $this.closest('.main-pa-box'); // 조상 검색
		let $newsCenter = $mainBox.find('.news__center');
		
		
		$newsCenter.find(' > .news-center__item.active').removeClass('active');
		$newsCenter.find(' > .news-center__item').eq(thisIndex).addClass('active');
		
		$this.addClass('active');
	});
}

Box1__init();

// 월페이퍼 스와이퍼
function Wallpaperslide__init() {
	let swiper = new Swiper('.part-3 .swiper-container', {
		slidesPerView: 1, // 한 페이지당 보여줄 개수
		autoplay : {
			delay: 3000,
		},		
		loop: false, // 슬라이드 반복
		
			pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},
		
	});

	$('.part-3 .swiper-container').mouseenter(function() {
		swiper.autoplay.stop();
	});
	
	$('.part-3 .swiper-container').mouseleave(function() {
		swiper.autoplay.start();
	});
}

Wallpaperslide__init();

// small 박스  스와이퍼
function Smallswiperbox1__init() {
	let swiper = new Swiper('.part-4 .swiper-container-2', {
		slidesPerView: 2, // 한 페이지당 보여줄 개수
		loop: false, // 슬라이드 반복
		navigation: {
			nextEl: '.small-swiper-box .swiper-button-prev',
			prevEl: '.small-swiper-box .swiper-button-next',
		},
		
		grid :{
		
		rows:4,
	}
		
		
	});
}

Smallswiperbox1__init();

// 게임 특징  스와이퍼
function gamefeatures__init() {
	let swiper = new Swiper('.part-5 .swiper-container', {
		 slidesPerView: 3, // 한 페이지당 보여줄 개수
		 spaceBetween: 20,
		 centeredSlides: true,
			navigation: {
			nextEl: '.center-layer .swiper-button-prev',
			prevEl: '.center-layer .swiper-button-next',
		},
		
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},
		autoplay : {
			delay: 3000,
		},		
		loop: true, // 슬라이드 반복
	});

	$('.part-5 .swiper-container').mouseenter(function() {
		swiper.autoplay.stop();
	});
	
	$('.part-5 .swiper-container').mouseleave(function() {
		swiper.autoplay.start();
	});
}

gamefeatures__init();


// 갤러리 스와이퍼
function gallery__init() {
	let swiper1 = new Swiper('.first-swiper', {
		slidesPerView: 1, // 한 페이지당 보여줄 개수
		loopedSlides: 1,
		spaceBetween: -68,
		centeredSlides: true,
		autoplay : {
			delay: 3000,
		},		
		loop: true, // 슬라이드 반복
	});

	let swiper2 = new Swiper('.second-swiper', {
		slidesPerView: 3, // 한 페이지당 보여줄 개수
		spaceBetween: 70,
		loopedSlides: 1,
		centeredSlides: true,
		direction: "vertical",
		autoplay : {
			delay: 3000,
		},		
		loop: true, // 슬라이드 반복
	});

	swiper1.controller.control = swiper2;
	swiper2.controller.control = swiper1;
}

gallery__init();
