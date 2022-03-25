/*
 * @Author: LetMeFly
 * @Date: 2022-03-11 02:50:18
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-03-11 15:13:04
 */
const problemDescriptionData = '<p>同学们都进入了教室后&#xff0c;<font color="gary" title="lh老师|Letせんせい">李老师</font>上起了数论课。</p> \n<p>给你两个正整数 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        A\n       \n      \n      \n       A\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.6\n33em; vertical-align: 0em;"></span><span class="mord mathdefault">A</span></span></span></span></span> 和 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        B\n       \n      \n      \n       B\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.6\n33em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.05017em;">B</span></span></span></span></span>&#xff0c;从中选择一些 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        A\n       \n      \n      \n       A\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.6\n33em; vertical-align: 0em;"></span><span class="mord mathdefault">A</span></span></span></span></span> 、 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        B\n       \n      \n      \n       B\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.6\n33em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.05017em;">B</span></span></span></span></span> 的公共因数&#xff0c;并且要保证选取的这些因数是互质的。</p> \n<p>请问最多选择多少个公共因数。</p> \n<details><summary><b>因数解释</b> </summary>如果 a % b &#61; 0 &#xff0c;那么 b 就是 a 的因数。</details> \n'
// 最后 detail>summary是手动恢复添加上去的

const inputDescriptionData = '<pre><code>A B\n</code></pre> \n<p>第一行空格隔开的两个正整数 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        A\n       \n      \n      \n       A\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault">A</span></span></span></span></span> 和 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        B\n       \n      \n      \n       B\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.05017em;">B</span></span></span></span></span></p> \n<p>数据范围&#xff1a;</p> \n<ul><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n        \n         ≤\n        \n        \n         A\n        \n        \n         ,\n        \n        \n         B\n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          12\n         \n        \n       \n       \n        1\leq A, B\leq 10^{12}\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.87777em; vertical-align: -0.19444em;"></span><span class="mord mathdefault">A</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord mathdefault" style="margin-right: 0.05017em;">B</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul> \n'

const outputDescriptionData = '<p>输出一行一个正整数&#xff0c;代表最多选择的互质的公共因数的个数</p> '

const problemName = '上数论课';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, true);
}