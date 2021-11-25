/*
 * @Author: LetMeFly
 * @Date: 2021-11-26 01:01:03
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-11-26 01:05:43
 */
// import 'http://letmefly666.github.io/various/ACM/ForBUCToj/Common.js'

const problemDescriptionData = '<p>楚王想知道&#xff0c;没有前导零的从<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        1\n       \n      \n      \n       1\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>到<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        N\n       \n      \n      \n       N\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span></span></span></span></span>的十进制数中&#xff0c;有多少个数的位数是奇数。</p> \n<blockquote> \n <ul><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          1\n         \n        \n        \n         1\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>有<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          1\n         \n        \n        \n         1\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>位</li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          9\n         \n        \n        \n         9\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">9</span></span></span></span></span>有<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          1\n         \n        \n        \n         1\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>位</li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          10\n         \n        \n        \n         10\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span></span></span></span></span>有<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          2\n         \n        \n        \n         2\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">2</span></span></span></span></span>位</li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          123\n         \n        \n        \n         123\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">2</span><span class="mord">3</span></span></span></span></span>有<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          3\n         \n        \n        \n         3\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">3</span></span></span></span></span>位</li></ul> \n</blockquote> \n<p><small>此时有名毛遂者&#xff0c;自荐以解此题。</small></p> '

const inputDescriptionData = '<p>输入包括<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        1\n       \n      \n      \n       1\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>行<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        1\n       \n      \n      \n       1\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>个整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        N\n       \n      \n      \n       N\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span></span></span></span></span></p> \n<p>数据范围&#xff1a;</p> \n<ul><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n        \n         ≤\n        \n        \n         N\n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          5\n         \n        \n       \n       \n        1\leq N\leq 10^5\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.8193em; vertical-align: -0.13597em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span></li></ul> \n'

const outputDescriptionData = '<p>输出<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        1\n       \n      \n      \n       1\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>行<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        1\n       \n      \n      \n       1\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>个整数&#xff0c;代表<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        1\n       \n      \n      \n       1\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>到<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        N\n       \n      \n      \n       N\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span></span></span></span></span>中&#xff0c;有多少个数的位数是奇数</p> \n<p>例如从<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        1\n       \n      \n      \n       1\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>到<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        136\n       \n      \n      \n       136\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">3</span><span class="mord">6</span></span></span></span></span>这<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        136\n       \n      \n      \n       136\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">3</span><span class="mord">6</span></span></span></span></span>个数&#xff0c;<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        1\n       \n       \n        ,\n       \n       \n        2\n       \n       \n        ,\n       \n       \n        ⋯\n       \n       \n        9\n       \n      \n      \n       1,2,\cdots9\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.83888em; vertical-align: -0.19444em;"></span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord">9</span></span></span></span></span>有<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        1\n       \n      \n      \n       1\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>位(9个)&#xff0c;<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        100\n       \n       \n        ,\n       \n       \n        101\n       \n       \n        ,\n       \n       \n        ⋯\n        \n       \n        ,\n       \n       \n        136\n       \n      \n      \n       100,101,\cdots,136\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.83888em; vertical-align: -0.19444em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord">1</span><span class="mord">3</span><span class="mord">6</span></span></span></span></span>有<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        3\n       \n      \n      \n       3\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">3</span></span></span></span></span>位(37个)&#xff0c;因此共有<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        46\n       \n      \n      \n       46\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">4</span><span class="mord">6</span></span></span></span></span>个数的位数是奇数。</p> \n'

const problemName = '毛遂自荐2';

var script1=document.createElement('script');//创建script标签节点
script1.setAttribute('type','text/javascript');//设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js');//设置js地址
document.head.appendChild(script1);//将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, false);
}