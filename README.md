>>>页面结构
进入首页，故事介绍，显示图片0+文字0，按钮“start the stroy“
进入01-index.html，显示图片1+文字1，两个选择按钮，AI 或 Human；
点击按钮，都进入02-index.html
02-index.html，显示图片2+文字2，两个选择按钮
点击按钮，都进入03-index.html
03-index.html，显示图片3+文字3，两个选择按钮，点击按钮，都进入最后结局页面
每次点击选择"AI"或"Human"，都累计计入总数据
03-index.html的最后一次选择按钮点击结束后，发送至服务器计算当前总投票数
总数“AI”大于”Human“，进入结局A，endingA.html
所有点击票数，总数“AI”大于”Human“，进入结局B，endingB.html
如相同，进入结局C，或 endingC.html
endingA.html，先显示“xxx%的人做了这样的决定”，然后显示画面A和文字A，
endingB.html，先显示“xxx%的人做了这样的决定”，然后显示画面B和文字B，
endingC.html，先显示“xxx%的人做了这样的决定”，然后显示画面C和文字C，

结局页面上，显示百分比，“xxx%的人做了这样的决定”，由“当前高的票数”/“总票数”得到百分比


