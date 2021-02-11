function download()
{
	alert("下载宣传游戏！");
}

function closed()
{
	alert("关闭宣传广告！");
}
/*-------------------------------------------------------------------------------------------------------------------*/
var fade = 0;
function fadeup()
{
	fade = fade + 1;
	if(fade > 1)
	{
		fade = 0;
	}
	if(fade == 1)
	{
		document.getElementById("fadeup").innerHTML = "<a href=\"###\">网易秀品商城</a>";
	}
	if(fade == 0)
	{
		document.getElementById("fadeup").innerHTML = "<a href=\"###\">网易考拉海购</a>";
	}
}
/*-------------------------------------------------------------------------------------------------------------------*/
function V1()
{
	document.getElementById("V1").style.backgroundColor = "#D3F1FC";
	document.getElementById("V1").style.color = "#23B0EB";
	document.getElementById("V2").style.backgroundColor = "#23B0EB";
	document.getElementById("V2").style.color = "#D3F1FC";
	document.getElementById("V3").style.backgroundColor = "#23B0EB";
	document.getElementById("V3").style.color = "#D3F1FC";
}
function V2()
{
	document.getElementById("V1").style.backgroundColor = "#23B0EB";
	document.getElementById("V1").style.color = "#D3F1FC";
	document.getElementById("V2").style.backgroundColor = "#D3F1FC";
	document.getElementById("V2").style.color = "#23B0EB";
	document.getElementById("V3").style.backgroundColor = "#23B0EB";
	document.getElementById("V3").style.color = "#D3F1FC";
}
function V3()
{
	document.getElementById("V1").style.backgroundColor = "#23B0EB";
	document.getElementById("V1").style.color = "#D3F1FC";
	document.getElementById("V2").style.backgroundColor = "#23B0EB";
	document.getElementById("V2").style.color = "#D3F1FC";
	document.getElementById("V3").style.backgroundColor = "#D3F1FC";
	document.getElementById("V3").style.color = "#23B0EB";
}
/*-------------------------------------------------------------------------------------------------------------------*/
var FocusArr = new Array
("Image/focus1.jpg","Image/focus2.jpg","Image/focus3.jpg","Image/focus4.jpg","Image/focus5.jpg","Image/focus6.jpg","Image/focus7.jpg");
var FocusNum = 0;

function FocusNext()
{
	FocusNum = FocusNum + 1;
	if(FocusNum > 6)
	{
		FocusNum = 0;
	}
	document.getElementById("focusimg").src = FocusArr[FocusNum];
	
	if(FocusNum == 0)
	{
		document.getElementById("change1").style.backgroundImage = "url(Image/play_button_hover.png)";
		document.getElementById("change2").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change3").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change4").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change5").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change6").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change7").style.backgroundImage = "url(Image/play_button_link.png)";
	}
	if(FocusNum == 1)
	{
		document.getElementById("change1").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change2").style.backgroundImage = "url(Image/play_button_hover.png)";
		document.getElementById("change3").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change4").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change5").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change6").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change7").style.backgroundImage = "url(Image/play_button_link.png)";
	}
	if(FocusNum == 2)
	{
		document.getElementById("change1").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change2").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change3").style.backgroundImage = "url(Image/play_button_hover.png)";
		document.getElementById("change4").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change5").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change6").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change7").style.backgroundImage = "url(Image/play_button_link.png)";
	}
	if(FocusNum == 3)
	{
		document.getElementById("change1").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change2").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change3").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change4").style.backgroundImage = "url(Image/play_button_hover.png)";
		document.getElementById("change5").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change6").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change7").style.backgroundImage = "url(Image/play_button_link.png)";
	}
	if(FocusNum == 4)
	{
		document.getElementById("change1").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change2").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change3").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change4").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change5").style.backgroundImage = "url(Image/play_button_hover.png)";
		document.getElementById("change6").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change7").style.backgroundImage = "url(Image/play_button_link.png)";
	}
	if(FocusNum == 5)
	{
		document.getElementById("change1").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change2").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change3").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change4").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change5").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change6").style.backgroundImage = "url(Image/play_button_hover.png)";
		document.getElementById("change7").style.backgroundImage = "url(Image/play_button_link.png)";
	}
	if(FocusNum == 6)
	{
		document.getElementById("change1").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change2").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change3").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change4").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change5").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change6").style.backgroundImage = "url(Image/play_button_link.png)";
		document.getElementById("change7").style.backgroundImage = "url(Image/play_button_hover.png)";
	}
}

function change1()
{
	FocusNum = 0;
	document.getElementById("focusimg").src = FocusArr[FocusNum];
	document.getElementById("change1").style.backgroundImage = "url(Image/play_button_hover.png)";
	document.getElementById("change2").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change3").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change4").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change5").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change6").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change7").style.backgroundImage = "url(Image/play_button_link.png)";
}
function change2()
{
	FocusNum = 1;
	document.getElementById("focusimg").src = FocusArr[FocusNum];
	document.getElementById("change1").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change2").style.backgroundImage = "url(Image/play_button_hover.png)";
	document.getElementById("change3").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change4").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change5").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change6").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change7").style.backgroundImage = "url(Image/play_button_link.png)";
}
function change3()
{
	FocusNum = 2;
	document.getElementById("focusimg").src = FocusArr[FocusNum];
	document.getElementById("change1").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change2").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change3").style.backgroundImage = "url(Image/play_button_hover.png)";
	document.getElementById("change4").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change5").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change6").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change7").style.backgroundImage = "url(Image/play_button_link.png)";
}
function change4()
{
	FocusNum = 3;
	document.getElementById("focusimg").src = FocusArr[FocusNum];
	document.getElementById("change1").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change2").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change3").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change4").style.backgroundImage = "url(Image/play_button_hover.png)";
	document.getElementById("change5").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change6").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change7").style.backgroundImage = "url(Image/play_button_link.png)";
}
function change5()
{
	FocusNum = 4;
	document.getElementById("focusimg").src = FocusArr[FocusNum];
	document.getElementById("change1").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change2").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change3").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change4").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change5").style.backgroundImage = "url(Image/play_button_hover.png)";
	document.getElementById("change6").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change7").style.backgroundImage = "url(Image/play_button_link.png)";
}
function change6()
{
	FocusNum = 5;
	document.getElementById("focusimg").src = FocusArr[FocusNum];
	document.getElementById("change1").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change2").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change3").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change4").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change5").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change6").style.backgroundImage = "url(Image/play_button_hover.png)";
	document.getElementById("change7").style.backgroundImage = "url(Image/play_button_link.png)";
}
function change7()
{
	FocusNum = 6;
	document.getElementById("focusimg").src = FocusArr[FocusNum];
	document.getElementById("change1").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change2").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change3").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change4").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change5").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change6").style.backgroundImage = "url(Image/play_button_link.png)";
	document.getElementById("change7").style.backgroundImage = "url(Image/play_button_hover.png)";
}
/*-------------------------------------------------------------------------------------------------------------------*/
function ANM1()
{
	document.getElementById("ANM1").style.backgroundColor = "#D3F1FC";
	document.getElementById("ANM1").style.color = "#23B0EB";
	document.getElementById("ANM2").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM2").style.color = "#D3F1FC";
	document.getElementById("ANM3").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM3").style.color = "#D3F1FC";
	document.getElementById("ANM4").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM4").style.color = "#D3F1FC";
	document.getElementById("ANM5").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM5").style.color = "#D3F1FC";
	
	document.getElementById("ANMtext").innerHTML = "<li><a href=\"###\">新服专享活动！梦幻2016年4月开服公告</a><time>[04/01]</time></li><li><a href=\"###\">手机上的电脑版，《梦幻西游》互通版专题上线</a><time>[04/06]</time></li><li><a href=\"###\">《梦幻西游》电脑版第四十三次服务器合并投票</a><time>[03/22]</time></li><li><a href=\"###\">霸榜的手游今日全平台公测史诗级《掠夺者》</a><time>[04/22]</time></li><li><a href=\"###\">《梦幻西游》舞台剧主题曲演唱者大揭秘之徐晗</a><time>[04/21]</time></li><li><a href=\"###\">[三石精选]超值营养早餐给你一天游戏添动力</a><time>[03/25]</time></li>";
}
function ANM2()
{
	document.getElementById("ANM1").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM1").style.color = "#D3F1FC";
	document.getElementById("ANM2").style.backgroundColor = "#D3F1FC";
	document.getElementById("ANM2").style.color = "#23B0EB";
	document.getElementById("ANM3").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM3").style.color = "#D3F1FC";
	document.getElementById("ANM4").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM4").style.color = "#D3F1FC";
	document.getElementById("ANM5").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM5").style.color = "#D3F1FC";
	
	document.getElementById("ANMtext").innerHTML = "<li><a href=\"###\">2016年4月19日定期维护公告</a><time>[04-15]</time></li><li><a href=\"###\">2016年4月12日定期维护公告</a><time>[04-08]</time></li><li><a href=\"###\">2016年4月5日定期维护公告</a><time>[03-30]</time></li><li><a href=\"###\">2016年3月29日定期维护公告</a><time>[03-25]</time></li><li><a href=\"###\">2016年3月22日定期维护公告</a><time>[03-21]</time></li><li><a href=\"###\">2016年3月15日定期维护公告</a><time>[03-09]</time></li>";
}
function ANM3()
{
	document.getElementById("ANM1").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM1").style.color = "#D3F1FC";
	document.getElementById("ANM2").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM2").style.color = "#D3F1FC";
	document.getElementById("ANM3").style.backgroundColor = "#D3F1FC";
	document.getElementById("ANM3").style.color = "#23B0EB";
	document.getElementById("ANM4").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM4").style.color = "#D3F1FC";
	document.getElementById("ANM5").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM5").style.color = "#D3F1FC";
	
	document.getElementById("ANMtext").innerHTML = "<li><a href=\"###\">接力《好想你》唱歌晒照上万点卡蓝牙音箱等你拿</a><time>[04/22]</time></li><li><a href=\"###\">藏宝阁推荐：无级别必中野兽11锻于一身的神器</a><time>[04/22]</time></li><li><a href=\"###\">梦幻数一数二的极品项链出炉初灵299！</a><time>[04/22]</time></li><li><a href=\"###\">4月新服黄浦江：年卡免单大派送</a><time>[04/22]</time></li><li><a href=\"###\">4月19日奇经八脉调整全门派汇总</a><time>[04/20]</time></li><li><a href=\"###\">2016风情汇·奇形妙影活动玩法体验</a><time>[04/19]</time></li>";
}
function ANM4()
{
	document.getElementById("ANM1").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM1").style.color = "#D3F1FC";
	document.getElementById("ANM2").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM2").style.color = "#D3F1FC";
	document.getElementById("ANM3").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM3").style.color = "#D3F1FC";
	document.getElementById("ANM4").style.backgroundColor = "#D3F1FC";
	document.getElementById("ANM4").style.color = "#23B0EB";
	document.getElementById("ANM5").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM5").style.color = "#D3F1FC";
	
	document.getElementById("ANMtext").innerHTML = "<li><a href=\"###\">《梦幻西游》电脑版2016五一劳动节活动专题</a><time>[04/18]</time></li><li><a href=\"###\">《梦幻西游》电脑版2016玩家见面会活动专题</a><time>[04/13]</time></li><li><a href=\"###\">《梦幻西游》电脑版林更新特色副本专题</a><time>[04/13]</time></li><li><a href=\"###\">《梦幻西游》电脑版2016四月风情汇专题</a><time>[04/13]</time></li><li><a href=\"###\">《梦幻西游》电脑版 老玩家回流专题</a><time>[03/30]</time></li><li><a href=\"###\">《梦幻西游》电脑版林更新代言专题</a><time>[03/28]</time></li>";
}
function ANM5()
{
	document.getElementById("ANM1").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM1").style.color = "#D3F1FC";
	document.getElementById("ANM2").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM2").style.color = "#D3F1FC";
	document.getElementById("ANM3").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM3").style.color = "#D3F1FC";
	document.getElementById("ANM4").style.backgroundColor = "#23B0EB";
	document.getElementById("ANM4").style.color = "#D3F1FC";
	document.getElementById("ANM5").style.backgroundColor = "#D3F1FC";
	document.getElementById("ANM5").style.color = "#23B0EB";
	
	document.getElementById("ANMtext").innerHTML = "<li><a href=\"###\">分析十五门派经脉调整：盘丝可以称霸了</a><time>[04/21]</time></li><li><a href=\"###\">盘点神威杀人善恶宝宝 你有没有被吓到</a><time>[04/21]</time></li><li><a href=\"###\">萌妹子纯手工打造的黏土 鹿角弯弯惹人爱</a><time>[04/21]</time></li><li><a href=\"###\">扫盲贴！分析固伤灵饰对PS天罗地网的影响</a><time>[04/20]</time></li><li><a href=\"###\">117联服战王者诞生！恭喜蝴蝶泉成功卫冕</a><time>[04/19]</time></li><li><a href=\"###\">挑战新神器觅影玲珑结：隐攻加大唐轻松过</a><time>[04/19]</time></li>";
}
/*-------------------------------------------------------------------------------------------------------------------*/
function displaytime()
{
	/*23:39:59*/
	var hour = new Date().getHours();
	var minute = new Date().getMinutes();
	var second = new Date().getSeconds();
	
	var dishour = 0;
	var disminute = 0;
	var dissecond = 0;
	
	if(minute > 39)
	{
		dishour = 23 - 1 - hour;
		disminute = 39 + 60 - minute;
		dissecond = 59 - second;
	}
	else
	{
		dishour = 23 - hour;
		disminute = 39 - minute;
		dissecond = 59 - second;
	}
	document.getElementById("display").innerHTML =
	"还有"+dishour+"小时"+disminute+"分钟"+dissecond+"秒钟宝箱就要消失了";
}
/*-------------------------------------------------------------------------------------------------------------------*/
var signnum = 0;
function Sign()
{
	signnum = signnum + 1;
	document.getElementById("signnum").innerHTML = "今日签到奖励3积分（" + signnum + "人已签到）";
}
/*-------------------------------------------------------------------------------------------------------------------*/
function SNP1hover()
{
	document.getElementById("SNP-1").style.display = "block";
}
function SNP2hover()
{
	document.getElementById("SNP-2").style.display = "block";
}
function SNP3hover()
{
	document.getElementById("SNP-3").style.display = "block";
}
function SNP1out()
{
	document.getElementById("SNP-1").style.display = "none";
}
function SNP2out()
{
	document.getElementById("SNP-2").style.display = "none";
}
function SNP3out()
{
	document.getElementById("SNP-3").style.display = "none";
}
/*-------------------------------------------------------------------------------------------------------------------*/
var HotFactArr = new Array
("<li><a href=\"###\"><span>《梦幻西游》互通版 信息汇总</span></a><time>[04-29]</time></li><li><a href=\"###\">将军区惊现一神树 连出3令牌1定魂</a><time>[04-28]</time></li><li><a href=\"###\">爆料：骨精灵迭代所有武器效果抢先看</a><time>[04-27]</time></li><li><a href=\"###\">爆料：剑侠客迭代所有武器效果抢先看</a><time>[04-26]</time></li><li><a href=\"###\">爆料：骨精灵迭代所有武器效果抢先看</a><time>[04-25]</time></li><li><a href=\"###\">爆料：剑侠客迭代攻击法术特效及表情</a><time>[04-24]</time></li><li><a href=\"###\"><em>梦幻官网 兼职招聘启事</em></a><time>[04-23]</time></li><li><a href=\"###\">须弥炼妖见证人品奇迹须弥画魂速成记</a><time>[04-22]</time></li><li><a href=\"###\">阿痕涂鸦梦中梦之呆萌妹纸邂逅帮主</a><time>[04-21]</time></li><li><a href=\"###\">高难度副本攻略 地下墓穴衣冠古丘</a><time>[04-20]</time></li>","<li><a href=\"###\"><span>爆料：75级以下召唤兽迭代效</span></a><time>[04-29]</time></li><li><a href=\"###\">爆料：剑侠客迭代所有武器效果抢先看</a><time>[04-28]</time></li><li><a href=\"###\">爆料：骨精灵迭代所有武器效果抢先看</a><time>[04-27]</time></li><li><a href=\"###\">爆料：剑侠客迭代攻击法术特效及表情</a><time>[04-26]</time></li><li><a href=\"###\">爆料：骨精灵迭代攻击法术特效及表情</a><time>[04-25]</time></li><li><a href=\"###\">爆料：剑侠客迭代染色效果抢先看</a><time>[04-24]</time></li><li><a href=\"###\">爆料：骨精灵迭代染色效果抢先看</a><time>[04-23]</time></li><li><a href=\"###\">爆料：剑侠客迭代锦衣效果抢先看</a><time>[04-22]</time></li><li><a href=\"###\">爆料：骨精灵迭代锦衣效果抢先看</a><time>[04-21]</time></li><li><a href=\"###\">爆料：新锦衣缎夜星语游戏效果抢先看</a><time>[04-20]</time></li>");
var HotFactNum = 0;

function focushot()
{
	HotFactNum = 0;
	document.getElementById("focushot").style.color = "#23B0EB";
	document.getElementById("focushot").style.backgroundColor = "#D3F1FC";
	document.getElementById("focusfact").style.color = "#D3F1FC";
	document.getElementById("focusfact").style.backgroundColor = "#23B0EB";
	document.getElementById("HotFact").innerHTML = HotFactArr[HotFactNum];
}

function focusfact()
{
	HotFactNum = 1;
	document.getElementById("focusfact").style.color = "#23B0EB";
	document.getElementById("focusfact").style.backgroundColor = "#D3F1FC";
	document.getElementById("focushot").style.color = "#D3F1FC";
	document.getElementById("focushot").style.backgroundColor = "#23B0EB";
	document.getElementById("HotFact").innerHTML = HotFactArr[HotFactNum];
}

function HotFactNext()
{
	HotFactNum = HotFactNum + 1;
	if(HotFactNum > 1)
	{
		HotFactNum = 0;
	}
	
	if(HotFactNum == 0)
	{
		document.getElementById("focushot").style.color = "#23B0EB";
		document.getElementById("focushot").style.backgroundColor = "#D3F1FC";
		document.getElementById("focusfact").style.color = "#D3F1FC";
		document.getElementById("focusfact").style.backgroundColor = "#23B0EB";
		document.getElementById("HotFact").innerHTML = HotFactArr[HotFactNum];
	}
	
	if(HotFactNum == 1)
	{
		document.getElementById("focusfact").style.color = "#23B0EB";
		document.getElementById("focusfact").style.backgroundColor = "#D3F1FC";
		document.getElementById("focushot").style.color = "#D3F1FC";
		document.getElementById("focushot").style.backgroundColor = "#23B0EB";
		document.getElementById("HotFact").innerHTML = HotFactArr[HotFactNum];
	}
}
/*-------------------------------------------------------------------------------------------------------------------*/
var GallImg = new Array
("Image/gallery1.png","Image/gallery2.png","Image/gallery3.png","Image/gallery4.png","Image/gallery5.png","Image/gallery6.png","Image/gallery7.png","Image/gallery8.png","Image/gallery9.png","Image/gallery10.png","Image/gallery11.png","Image/gallery12.png","Image/gallery13.png","Image/gallery14.png","Image/gallery15.png","Image/gallery16.png","Image/gallery17.jpg","Image/gallery18.png","Image/gallery19.png","Image/gallery20.png","Image/gallery21.png","Image/gallery22.png","Image/gallery23.png","Image/gallery24.png","Image/gallery25.png","Image/gallery26.png","Image/gallery27.png","Image/gallery28.jpg","Image/gallery29.png","Image/gallery30.png","Image/gallery31.png","Image/gallery32.png","Image/gallery33.png","Image/gallery34.png","Image/gallery35.png","Image/gallery36.png");

var Galla = new Array
("4月下旬全服各大幸运事","挖掘惊喜 大战5车玲珑","直播杀生死劫 只求逆袭","求不翻船 宝石天科队的","玩家回归 神威1化生4天","天启玩家开宠店养人 目","直播不值两千 输了吃翔","连9只须弥成品怎么做到","一只不按套路打书雷鸟","天启玩家开宠店养人 神","18W灵饰倒卖风波 这才","无符无修撸副本 神威玩","无符无修撸副本 神威玩","将军区69大唐圆梦130无级别","玩家买下152方寸 记录","高端玩家 5个满级号和","盛宴 62个140灵饰鉴定","高端玩家 5个满级号和","1.1万买下满级4修满天","二线精锐无级别满天套","看我宝宝 如意仙子百套","妹子任性 雨花台满级地","看到这个69你才知道什","117届武神坛青花瓷普陀","我的服战梦 13-14锻极","法爆依旧灵饰炙手可热","160专用项链灵270","友谊小船说翻就翻 好好	","都是内涵 最新暴走梦幻","说好一起到白头 送快递","洗手间的心相印 师父之","降妖伏魔 狼来了之毁童","愚人节之魔高一丈 新闻","升级版 新召唤兽出炉","神气小龟也可以飞啦","频繁搬家为哪般 只怪隔");

var GallNum = 0;

function Live()
{
	GallNum = 0;
	document.getElementById("Live").style.color = "#23B0EB";
	document.getElementById("Live").style.backgroundColor = "#D3F1FC";
	document.getElementById("Growth").style.color = "#D3F1FC";
	document.getElementById("Growth").style.backgroundColor = "#23B0EB";
	document.getElementById("Attribute").style.color = "#D3F1FC";
	document.getElementById("Attribute").style.backgroundColor = "#23B0EB";
	document.getElementById("Interest").style.color = "#D3F1FC";
	document.getElementById("Interest").style.backgroundColor = "#23B0EB";
	
	document.getElementById("LiveEm").style.backgroundColor = "#23B0EB";
	document.getElementById("GrowthEm").style.backgroundColor = "#999";
	document.getElementById("AttributeEm").style.backgroundColor = "#999";
	document.getElementById("InterestEm").style.backgroundColor = "#999";
	
	document.getElementById("gallimg1").src = GallImg[GallNum*9+0];
	document.getElementById("gallimg2").src = GallImg[GallNum*9+1];
	document.getElementById("gallimg3").src = GallImg[GallNum*9+2];
	document.getElementById("gallimg4").src = GallImg[GallNum*9+3];
	document.getElementById("gallimg5").src = GallImg[GallNum*9+4];
	document.getElementById("gallimg6").src = GallImg[GallNum*9+5];
	document.getElementById("gallimg7").src = GallImg[GallNum*9+6];
	document.getElementById("gallimg8").src = GallImg[GallNum*9+7];
	document.getElementById("gallimg9").src = GallImg[GallNum*9+8];
	
	document.getElementById("galla1").innerHTML = Galla[GallNum*9+0];
	document.getElementById("galla2").innerHTML = Galla[GallNum*9+1];
	document.getElementById("galla3").innerHTML = Galla[GallNum*9+2];
	document.getElementById("galla4").innerHTML = Galla[GallNum*9+3];
	document.getElementById("galla5").innerHTML = Galla[GallNum*9+4];
	document.getElementById("galla6").innerHTML = Galla[GallNum*9+5];
	document.getElementById("galla7").innerHTML = Galla[GallNum*9+6];
	document.getElementById("galla8").innerHTML = Galla[GallNum*9+7];
	document.getElementById("galla9").innerHTML = Galla[GallNum*9+8];
}

function Growth()
{
	GallNum = 1;
	document.getElementById("Live").style.color = "#D3F1FC";
	document.getElementById("Live").style.backgroundColor = "#23B0EB";
	document.getElementById("Growth").style.color = "#23B0EB";
	document.getElementById("Growth").style.backgroundColor = "#D3F1FC";
	document.getElementById("Attribute").style.color = "#D3F1FC";
	document.getElementById("Attribute").style.backgroundColor = "#23B0EB";
	document.getElementById("Interest").style.color = "#D3F1FC";
	document.getElementById("Interest").style.backgroundColor = "#23B0EB";
	
	document.getElementById("LiveEm").style.backgroundColor = "#999";
	document.getElementById("GrowthEm").style.backgroundColor = "#23B0EB";
	document.getElementById("AttributeEm").style.backgroundColor = "#999";
	document.getElementById("InterestEm").style.backgroundColor = "#999";
	
	document.getElementById("gallimg1").src = GallImg[GallNum*9+0];
	document.getElementById("gallimg2").src = GallImg[GallNum*9+1];
	document.getElementById("gallimg3").src = GallImg[GallNum*9+2];
	document.getElementById("gallimg4").src = GallImg[GallNum*9+3];
	document.getElementById("gallimg5").src = GallImg[GallNum*9+4];
	document.getElementById("gallimg6").src = GallImg[GallNum*9+5];
	document.getElementById("gallimg7").src = GallImg[GallNum*9+6];
	document.getElementById("gallimg8").src = GallImg[GallNum*9+7];
	document.getElementById("gallimg9").src = GallImg[GallNum*9+8];
	
	document.getElementById("galla1").innerHTML = Galla[GallNum*9+0];
	document.getElementById("galla2").innerHTML = Galla[GallNum*9+1];
	document.getElementById("galla3").innerHTML = Galla[GallNum*9+2];
	document.getElementById("galla4").innerHTML = Galla[GallNum*9+3];
	document.getElementById("galla5").innerHTML = Galla[GallNum*9+4];
	document.getElementById("galla6").innerHTML = Galla[GallNum*9+5];
	document.getElementById("galla7").innerHTML = Galla[GallNum*9+6];
	document.getElementById("galla8").innerHTML = Galla[GallNum*9+7];
	document.getElementById("galla9").innerHTML = Galla[GallNum*9+8];
}

function Attribute()
{
	GallNum = 2;
	document.getElementById("Live").style.color = "#D3F1FC";
	document.getElementById("Live").style.backgroundColor = "#23B0EB";
	document.getElementById("Growth").style.color = "#D3F1FC";
	document.getElementById("Growth").style.backgroundColor = "#23B0EB";
	document.getElementById("Attribute").style.color = "#23B0EB";
	document.getElementById("Attribute").style.backgroundColor = "#D3F1FC";
	document.getElementById("Interest").style.color = "#D3F1FC";
	document.getElementById("Interest").style.backgroundColor = "#23B0EB";
	
	document.getElementById("LiveEm").style.backgroundColor = "#999";
	document.getElementById("GrowthEm").style.backgroundColor = "#999";
	document.getElementById("AttributeEm").style.backgroundColor = "#23B0EB";
	document.getElementById("InterestEm").style.backgroundColor = "#999";
	
	document.getElementById("gallimg1").src = GallImg[GallNum*9+0];
	document.getElementById("gallimg2").src = GallImg[GallNum*9+1];
	document.getElementById("gallimg3").src = GallImg[GallNum*9+2];
	document.getElementById("gallimg4").src = GallImg[GallNum*9+3];
	document.getElementById("gallimg5").src = GallImg[GallNum*9+4];
	document.getElementById("gallimg6").src = GallImg[GallNum*9+5];
	document.getElementById("gallimg7").src = GallImg[GallNum*9+6];
	document.getElementById("gallimg8").src = GallImg[GallNum*9+7];
	document.getElementById("gallimg9").src = GallImg[GallNum*9+8];
	
	document.getElementById("galla1").innerHTML = Galla[GallNum*9+0];
	document.getElementById("galla2").innerHTML = Galla[GallNum*9+1];
	document.getElementById("galla3").innerHTML = Galla[GallNum*9+2];
	document.getElementById("galla4").innerHTML = Galla[GallNum*9+3];
	document.getElementById("galla5").innerHTML = Galla[GallNum*9+4];
	document.getElementById("galla6").innerHTML = Galla[GallNum*9+5];
	document.getElementById("galla7").innerHTML = Galla[GallNum*9+6];
	document.getElementById("galla8").innerHTML = Galla[GallNum*9+7];
	document.getElementById("galla9").innerHTML = Galla[GallNum*9+8];
}

function Interest()
{
	GallNum = 3;
	document.getElementById("Live").style.color = "#D3F1FC";
	document.getElementById("Live").style.backgroundColor = "#23B0EB";
	document.getElementById("Growth").style.color = "#D3F1FC";
	document.getElementById("Growth").style.backgroundColor = "#23B0EB";
	document.getElementById("Attribute").style.color = "#D3F1FC";
	document.getElementById("Attribute").style.backgroundColor = "#23B0EB";
	document.getElementById("Interest").style.color = "#23B0EB";
	document.getElementById("Interest").style.backgroundColor = "#D3F1FC";
	
	document.getElementById("LiveEm").style.backgroundColor = "#999";
	document.getElementById("GrowthEm").style.backgroundColor = "#999";
	document.getElementById("AttributeEm").style.backgroundColor = "#999";
	document.getElementById("InterestEm").style.backgroundColor = "#23B0EB";
	
	document.getElementById("gallimg1").src = GallImg[GallNum*9+0];
	document.getElementById("gallimg2").src = GallImg[GallNum*9+1];
	document.getElementById("gallimg3").src = GallImg[GallNum*9+2];
	document.getElementById("gallimg4").src = GallImg[GallNum*9+3];
	document.getElementById("gallimg5").src = GallImg[GallNum*9+4];
	document.getElementById("gallimg6").src = GallImg[GallNum*9+5];
	document.getElementById("gallimg7").src = GallImg[GallNum*9+6];
	document.getElementById("gallimg8").src = GallImg[GallNum*9+7];
	document.getElementById("gallimg9").src = GallImg[GallNum*9+8];
	
	document.getElementById("galla1").innerHTML = Galla[GallNum*9+0];
	document.getElementById("galla2").innerHTML = Galla[GallNum*9+1];
	document.getElementById("galla3").innerHTML = Galla[GallNum*9+2];
	document.getElementById("galla4").innerHTML = Galla[GallNum*9+3];
	document.getElementById("galla5").innerHTML = Galla[GallNum*9+4];
	document.getElementById("galla6").innerHTML = Galla[GallNum*9+5];
	document.getElementById("galla7").innerHTML = Galla[GallNum*9+6];
	document.getElementById("galla8").innerHTML = Galla[GallNum*9+7];
	document.getElementById("galla9").innerHTML = Galla[GallNum*9+8];
}

function GallNext()
{
	GallNum = GallNum + 1;
	if(GallNum > 3)
	{
		GallNum = 0;
	}
	
	if(GallNum == 0)
	{
		document.getElementById("Live").style.color = "#23B0EB";
		document.getElementById("Live").style.backgroundColor = "#D3F1FC";
		document.getElementById("Growth").style.color = "#D3F1FC";
		document.getElementById("Growth").style.backgroundColor = "#23B0EB";
		document.getElementById("Attribute").style.color = "#D3F1FC";
		document.getElementById("Attribute").style.backgroundColor = "#23B0EB";
		document.getElementById("Interest").style.color = "#D3F1FC";
		document.getElementById("Interest").style.backgroundColor = "#23B0EB";
	
		document.getElementById("LiveEm").style.backgroundColor = "#23B0EB";
		document.getElementById("GrowthEm").style.backgroundColor = "#999";
		document.getElementById("AttributeEm").style.backgroundColor = "#999";
		document.getElementById("InterestEm").style.backgroundColor = "#999";
		
		document.getElementById("gallimg1").src = GallImg[GallNum*9+0];
		document.getElementById("gallimg2").src = GallImg[GallNum*9+1];
		document.getElementById("gallimg3").src = GallImg[GallNum*9+2];
		document.getElementById("gallimg4").src = GallImg[GallNum*9+3];
		document.getElementById("gallimg5").src = GallImg[GallNum*9+4];
		document.getElementById("gallimg6").src = GallImg[GallNum*9+5];
		document.getElementById("gallimg7").src = GallImg[GallNum*9+6];
		document.getElementById("gallimg8").src = GallImg[GallNum*9+7];
		document.getElementById("gallimg9").src = GallImg[GallNum*9+8];
		
		document.getElementById("galla1").innerHTML = Galla[GallNum*9+0];
		document.getElementById("galla2").innerHTML = Galla[GallNum*9+1];
		document.getElementById("galla3").innerHTML = Galla[GallNum*9+2];
		document.getElementById("galla4").innerHTML = Galla[GallNum*9+3];
		document.getElementById("galla5").innerHTML = Galla[GallNum*9+4];
		document.getElementById("galla6").innerHTML = Galla[GallNum*9+5];
		document.getElementById("galla7").innerHTML = Galla[GallNum*9+6];
		document.getElementById("galla8").innerHTML = Galla[GallNum*9+7];
		document.getElementById("galla9").innerHTML = Galla[GallNum*9+8];
	}
	
	if(GallNum == 1)
	{
		document.getElementById("Live").style.color = "#D3F1FC";
		document.getElementById("Live").style.backgroundColor = "#23B0EB";
		document.getElementById("Growth").style.color = "#23B0EB";
		document.getElementById("Growth").style.backgroundColor = "#D3F1FC";
		document.getElementById("Attribute").style.color = "#D3F1FC";
		document.getElementById("Attribute").style.backgroundColor = "#23B0EB";
		document.getElementById("Interest").style.color = "#D3F1FC";
		document.getElementById("Interest").style.backgroundColor = "#23B0EB";
	
		document.getElementById("LiveEm").style.backgroundColor = "#999";
		document.getElementById("GrowthEm").style.backgroundColor = "#23B0EB";
		document.getElementById("AttributeEm").style.backgroundColor = "#999";
		document.getElementById("InterestEm").style.backgroundColor = "#999";
		
		document.getElementById("gallimg1").src = GallImg[GallNum*9+0];
		document.getElementById("gallimg2").src = GallImg[GallNum*9+1];
		document.getElementById("gallimg3").src = GallImg[GallNum*9+2];
		document.getElementById("gallimg4").src = GallImg[GallNum*9+3];
		document.getElementById("gallimg5").src = GallImg[GallNum*9+4];
		document.getElementById("gallimg6").src = GallImg[GallNum*9+5];
		document.getElementById("gallimg7").src = GallImg[GallNum*9+6];
		document.getElementById("gallimg8").src = GallImg[GallNum*9+7];
		document.getElementById("gallimg9").src = GallImg[GallNum*9+8];
		
		document.getElementById("galla1").innerHTML = Galla[GallNum*9+0];
		document.getElementById("galla2").innerHTML = Galla[GallNum*9+1];
		document.getElementById("galla3").innerHTML = Galla[GallNum*9+2];
		document.getElementById("galla4").innerHTML = Galla[GallNum*9+3];
		document.getElementById("galla5").innerHTML = Galla[GallNum*9+4];
		document.getElementById("galla6").innerHTML = Galla[GallNum*9+5];
		document.getElementById("galla7").innerHTML = Galla[GallNum*9+6];
		document.getElementById("galla8").innerHTML = Galla[GallNum*9+7];
		document.getElementById("galla9").innerHTML = Galla[GallNum*9+8];
	}
	
	if(GallNum == 2)
	{
		document.getElementById("Live").style.color = "#D3F1FC";
		document.getElementById("Live").style.backgroundColor = "#23B0EB";
		document.getElementById("Growth").style.color = "#D3F1FC";
		document.getElementById("Growth").style.backgroundColor = "#23B0EB";
		document.getElementById("Attribute").style.color = "#23B0EB";
		document.getElementById("Attribute").style.backgroundColor = "#D3F1FC";
		document.getElementById("Interest").style.color = "#D3F1FC";
		document.getElementById("Interest").style.backgroundColor = "#23B0EB";
	
		document.getElementById("LiveEm").style.backgroundColor = "#999";
		document.getElementById("GrowthEm").style.backgroundColor = "#999";
		document.getElementById("AttributeEm").style.backgroundColor = "#23B0EB";
		document.getElementById("InterestEm").style.backgroundColor = "#999";
		
		document.getElementById("gallimg1").src = GallImg[GallNum*9+0];
		document.getElementById("gallimg2").src = GallImg[GallNum*9+1];
		document.getElementById("gallimg3").src = GallImg[GallNum*9+2];
		document.getElementById("gallimg4").src = GallImg[GallNum*9+3];
		document.getElementById("gallimg5").src = GallImg[GallNum*9+4];
		document.getElementById("gallimg6").src = GallImg[GallNum*9+5];
		document.getElementById("gallimg7").src = GallImg[GallNum*9+6];
		document.getElementById("gallimg8").src = GallImg[GallNum*9+7];
		document.getElementById("gallimg9").src = GallImg[GallNum*9+8];
		
		document.getElementById("galla1").innerHTML = Galla[GallNum*9+0];
		document.getElementById("galla2").innerHTML = Galla[GallNum*9+1];
		document.getElementById("galla3").innerHTML = Galla[GallNum*9+2];
		document.getElementById("galla4").innerHTML = Galla[GallNum*9+3];
		document.getElementById("galla5").innerHTML = Galla[GallNum*9+4];
		document.getElementById("galla6").innerHTML = Galla[GallNum*9+5];
		document.getElementById("galla7").innerHTML = Galla[GallNum*9+6];
		document.getElementById("galla8").innerHTML = Galla[GallNum*9+7];
		document.getElementById("galla9").innerHTML = Galla[GallNum*9+8];
	}
	
	if(GallNum == 3)
	{
		document.getElementById("Live").style.color = "#D3F1FC";
		document.getElementById("Live").style.backgroundColor = "#23B0EB";
		document.getElementById("Growth").style.color = "#D3F1FC";
		document.getElementById("Growth").style.backgroundColor = "#23B0EB";
		document.getElementById("Attribute").style.color = "#D3F1FC";
		document.getElementById("Attribute").style.backgroundColor = "#23B0EB";
		document.getElementById("Interest").style.color = "#23B0EB";
		document.getElementById("Interest").style.backgroundColor = "#D3F1FC";
	
		document.getElementById("LiveEm").style.backgroundColor = "#999";
		document.getElementById("GrowthEm").style.backgroundColor = "#999";
		document.getElementById("AttributeEm").style.backgroundColor = "#999";
		document.getElementById("InterestEm").style.backgroundColor = "#23B0EB";
		
		document.getElementById("gallimg1").src = GallImg[GallNum*9+0];
		document.getElementById("gallimg2").src = GallImg[GallNum*9+1];
		document.getElementById("gallimg3").src = GallImg[GallNum*9+2];
		document.getElementById("gallimg4").src = GallImg[GallNum*9+3];
		document.getElementById("gallimg5").src = GallImg[GallNum*9+4];
		document.getElementById("gallimg6").src = GallImg[GallNum*9+5];
		document.getElementById("gallimg7").src = GallImg[GallNum*9+6];
		document.getElementById("gallimg8").src = GallImg[GallNum*9+7];
		document.getElementById("gallimg9").src = GallImg[GallNum*9+8];
		
		document.getElementById("galla1").innerHTML = Galla[GallNum*9+0];
		document.getElementById("galla2").innerHTML = Galla[GallNum*9+1];
		document.getElementById("galla3").innerHTML = Galla[GallNum*9+2];
		document.getElementById("galla4").innerHTML = Galla[GallNum*9+3];
		document.getElementById("galla5").innerHTML = Galla[GallNum*9+4];
		document.getElementById("galla6").innerHTML = Galla[GallNum*9+5];
		document.getElementById("galla7").innerHTML = Galla[GallNum*9+6];
		document.getElementById("galla8").innerHTML = Galla[GallNum*9+7];
		document.getElementById("galla9").innerHTML = Galla[GallNum*9+8];
	}
}
/*-------------------------------------------------------------------------------------------------------------------*/
var WSArr = new Array
("Image/wushrines-1.jpg","Image/wushrines-2.png","Image/wushrines-3.jpg","Image/wushrines-4.png","Image/wushrines-5.jpg");
var WSnum = 0;

function WSem1()
{
	WSnum = 0;
	document.getElementById("WSem1").style.backgroundColor = "#23B0EB";
	document.getElementById("WSem2").style.backgroundColor = "";
	document.getElementById("WSem3").style.backgroundColor = "";
	document.getElementById("WSem4").style.backgroundColor = "";
	document.getElementById("WSem5").style.backgroundColor = "";
	document.getElementById("WSimg").src = WSArr[WSnum];
}

function WSem2()
{
	WSnum = 1;
	document.getElementById("WSem1").style.backgroundColor = "";
	document.getElementById("WSem2").style.backgroundColor = "#23B0EB";
	document.getElementById("WSem3").style.backgroundColor = "";
	document.getElementById("WSem4").style.backgroundColor = "";
	document.getElementById("WSem5").style.backgroundColor = "";
	document.getElementById("WSimg").src = WSArr[WSnum];
}

function WSem3()
{
	WSnum = 2;
	document.getElementById("WSem1").style.backgroundColor = "";
	document.getElementById("WSem2").style.backgroundColor = "";
	document.getElementById("WSem3").style.backgroundColor = "#23B0EB";
	document.getElementById("WSem4").style.backgroundColor = "";
	document.getElementById("WSem5").style.backgroundColor = "";
	document.getElementById("WSimg").src = WSArr[WSnum];
}

function WSem4()
{
	WSnum = 3;
	document.getElementById("WSem1").style.backgroundColor = "";
	document.getElementById("WSem2").style.backgroundColor = "";
	document.getElementById("WSem3").style.backgroundColor = "";
	document.getElementById("WSem4").style.backgroundColor = "#23B0EB";
	document.getElementById("WSem5").style.backgroundColor = "";
	document.getElementById("WSimg").src = WSArr[WSnum];
}

function WSem5()
{
	WSnum = 4;
	document.getElementById("WSem1").style.backgroundColor = "";
	document.getElementById("WSem2").style.backgroundColor = "";
	document.getElementById("WSem3").style.backgroundColor = "";
	document.getElementById("WSem4").style.backgroundColor = "";
	document.getElementById("WSem5").style.backgroundColor = "#23B0EB";
	document.getElementById("WSimg").src = WSArr[WSnum];
}

function WSnext()
{
	WSnum = WSnum + 1;
	if(WSnum > 4)
	{
		WSnum = 0;
	}
	
	if(WSnum == 0)
	{
		document.getElementById("WSem1").style.backgroundColor = "#23B0EB";
		document.getElementById("WSem2").style.backgroundColor = "";
		document.getElementById("WSem3").style.backgroundColor = "";
		document.getElementById("WSem4").style.backgroundColor = "";
		document.getElementById("WSem5").style.backgroundColor = "";
		document.getElementById("WSimg").src = WSArr[WSnum];
	}
	
	if(WSnum == 1)
	{
		document.getElementById("WSem1").style.backgroundColor = "";
		document.getElementById("WSem2").style.backgroundColor = "#23B0EB";
		document.getElementById("WSem3").style.backgroundColor = "";
		document.getElementById("WSem4").style.backgroundColor = "";
		document.getElementById("WSem5").style.backgroundColor = "";
		document.getElementById("WSimg").src = WSArr[WSnum];
	}
	
	if(WSnum == 2)
	{
		document.getElementById("WSem1").style.backgroundColor = "";
		document.getElementById("WSem2").style.backgroundColor = "";
		document.getElementById("WSem3").style.backgroundColor = "#23B0EB";
		document.getElementById("WSem4").style.backgroundColor = "";
		document.getElementById("WSem5").style.backgroundColor = "";
		document.getElementById("WSimg").src = WSArr[WSnum];
	}
	
	if(WSnum == 3)
	{
		document.getElementById("WSem1").style.backgroundColor = "";
		document.getElementById("WSem2").style.backgroundColor = "";
		document.getElementById("WSem3").style.backgroundColor = "";
		document.getElementById("WSem4").style.backgroundColor = "#23B0EB";
		document.getElementById("WSem5").style.backgroundColor = "";
		document.getElementById("WSimg").src = WSArr[WSnum];
	}
	
	if(WSnum == 4)
	{
		document.getElementById("WSem1").style.backgroundColor = "";
		document.getElementById("WSem2").style.backgroundColor = "";
		document.getElementById("WSem3").style.backgroundColor = "";
		document.getElementById("WSem4").style.backgroundColor = "";
		document.getElementById("WSem5").style.backgroundColor = "#23B0EB";
		document.getElementById("WSimg").src = WSArr[WSnum];
	}
}
/*-------------------------------------------------------------------------------------------------------------------*/
var HotHTCArr = new Array
("<li><a href=\"###\"><span>稳扎稳打到极致 姑苏城服战团</span></a><time>[04-25]</time></li><li><a href=\"###\">姑苏城服战队最新装备动态盘点</a><time>[04-23]</time></li><li><a href=\"###\">都是大哥 姑苏城服战团强悍神宠盘点</a><time>[04-23]</time></li><li><a href=\"###\">117届武神坛装备宝宝汇总展示</a><time>[04-18]</time></li><li><a href=\"###\">117届武神坛少林寺服战队展示</a><time>[04-18]</time></li><li><a href=\"###\">叠彩山服战队招14段女儿及15段力五庄</a><time>[04-18]</time></li><li><a href=\"###\">117届武神坛冠军蝴蝶泉团队最新展示</a><time>[04-18]</time></li>","<li><a href=\"###\"><span>117联服战灵饰：法爆炙手可热</span></a><time>[04-18]</time></li><li><a href=\"###\">法系淡出？117联服战专题报道</a><time>[04-16]</time></li><li><a href=\"###\">117联服战报名图：隐忍or爆发</a><time>[04-11]</time></li><li><a href=\"###\">世界之窗服战地府：6特技齐备</a><time>[04-17]</time></li><li><a href=\"###\">116联服战宝宝集锦：神宠任性</a><time>[04-14]</time></li><li><a href=\"###\">116联装备集锦：神装助力赛场</a><time>[03-22]</time></li><li><a href=\"###\">新法宝融入 第116联服战报道</a><time>[03-20]</time></li>");
var HotHTCnum = 0;

function NewHot()
{
	HotHTCnum = 0;
	document.getElementById("NewHot").style.color = "#23B0EB";
	document.getElementById("NewHot").style.backgroundColor = "#D3F1FC";
	document.getElementById("HTC").style.color = "#FFF";
	document.getElementById("HTC").style.backgroundColor = "";
	document.getElementById("HotHTC").innerHTML = HotHTCArr[HotHTCnum];
}

function HTC()
{
	HotHTCnum = 1;
	document.getElementById("HTC").style.color = "#23B0EB";
	document.getElementById("HTC").style.backgroundColor = "#D3F1FC";
	document.getElementById("NewHot").style.color = "#FFF";
	document.getElementById("NewHot").style.backgroundColor = "";
	document.getElementById("HotHTC").innerHTML = HotHTCArr[HotHTCnum];
}

function HotHTCnext()
{
	HotHTCnum = HotHTCnum + 1;
	if(HotHTCnum > 1)
	{
		HotHTCnum = 0;
	}
	
	if(HotHTCnum == 0)
	{
		document.getElementById("NewHot").style.color = "#23B0EB";
		document.getElementById("NewHot").style.backgroundColor = "#D3F1FC";
		document.getElementById("HTC").style.color = "#FFF";
		document.getElementById("HTC").style.backgroundColor = "";
		document.getElementById("HotHTC").innerHTML = HotHTCArr[HotHTCnum];
	}
	
	if(HotHTCnum == 1)
	{
		document.getElementById("HTC").style.color = "#23B0EB";
		document.getElementById("HTC").style.backgroundColor = "#D3F1FC";
		document.getElementById("NewHot").style.color = "#FFF";
		document.getElementById("NewHot").style.backgroundColor = "";
		document.getElementById("HotHTC").innerHTML = HotHTCArr[HotHTCnum];
	}
}
/*-------------------------------------------------------------------------------------------------------------------*/
function morelistblock()
{
	document.getElementById("more-list").style.display = "block";
}

function morelistnone()
{
	document.getElementById("more-list").style.display = "none";
}
/*-------------------------------------------------------------------------------------------------------------------*/
window.onload = function()
{
	window.setInterval("fadeup()",1000);
	window.setInterval("FocusNext()",1000);
	window.setInterval("displaytime()",1000);
	window.setInterval("Sign()",1000);
	window.setInterval("HotFactNext()",1000);
	window.setInterval("GallNext()",1000);
	window.setInterval("WSnext()",1000);
	window.setInterval("HotHTCnext()",1000);
}
/*-------------------------------------------------------------------------------------------------------------------*/