/*
 * @Author: LetMeFly
 * @Date: 2022-01-22 15:43:52
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-01-22 15:43:53
 */
const problemDescriptionData = '<p>存钱罐有个大问题&#xff0c;不打碎存钱罐就无法确定里面有多少钱。</p> \n<p>所以可能互出现把存钱罐打碎后发现钱不够的情况。唯一的可能是&#xff0c;称一下存钱罐的重量&#xff0c;试着猜里面有多少钱。</p> \n<p>已知存钱罐的重量和每种面值的硬币的重量&#xff0c;请确定存钱罐内的最小金额。</p> '

const inputDescriptionData = '<p>第一行包含一个正整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        T\n       \n      \n      \n       T\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.13889em;">T</span></span></span></span></span>&#xff0c;表示测试用例的数量。</p> \n<blockquote> \n <p>对于每个测试用例&#xff1a;</p> \n <p>第一行都包含两个正整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         e\n        \n       \n       \n        e\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">e</span></span></span></span></span>和<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         f\n        \n        \n         (\n        \n        \n         1\n        \n        \n         ≤\n        \n        \n         e\n        \n        \n         ≤\n        \n        \n         f\n        \n        \n         ≤\n        \n        \n         10000\n        \n        \n         )\n        \n       \n       \n        f(1\leq e\leq f\leq 10000)\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathdefault" style="margin-right: 0.10764em;">f</span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">e</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.88888em; vertical-align: -0.19444em;"></span><span class="mord mathdefault" style="margin-right: 0.10764em;">f</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span><span class="mclose">)</span></span></span></span></span>&#xff0c;分别表示存钱罐和装满硬币的存钱罐的重量(单位&#xff1a;克)。</p> \n <p>第二行包含一个整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         n\n        \n        \n         (\n        \n        \n         1\n        \n        \n         ≤\n        \n        \n         n\n        \n        \n         ≤\n        \n        \n         500\n        \n        \n         )\n        \n       \n       \n        n(1\leq n\leq 500)\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathdefault">n</span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">5</span><span class="mord">0</span><span class="mord">0</span><span class="mclose">)</span></span></span></span></span>&#xff0c;表示硬币的总数量。</p> \n <p>接下来<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         n\n        \n       \n       \n        n\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>行&#xff0c;每行都包含两个整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         p\n        \n       \n       \n        p\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.625em; vertical-align: -0.19444em;"></span><span class="mord mathdefault">p</span></span></span></span></span>和<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         w\n        \n        \n         (\n        \n        \n         1\n        \n        \n         ≤\n        \n        \n         p\n        \n        \n         ≤\n        \n        \n         50000\n        \n        \n         ,\n        \n        \n         1\n        \n        \n         ≤\n        \n        \n         w\n        \n        \n         ≤\n        \n        \n         10000\n        \n        \n         )\n        \n       \n       \n        w(1\leq p\leq 50000, 1\leq w\leq10000)\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathdefault" style="margin-right: 0.02691em;">w</span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.83041em; vertical-align: -0.19444em;"></span><span class="mord mathdefault">p</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.83888em; vertical-align: -0.19444em;"></span><span class="mord">5</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault" style="margin-right: 0.02691em;">w</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span><span class="mclose">)</span></span></span></span></span>&#xff0c;分别表示硬币的面值和重量。</p> \n</blockquote> '

const outputDescriptionData = '<p>对于每个测试用例&#xff0c;都输出一行&#xff0c;包含<code>The Minimum amount is x.</code>&#xff0c;其中<font color="#0FF">x</font>是存钱罐内的最小金额。</p> \n<p>若无法确定&#xff0c;则输出<code>Impossible...</code></p> '

const problemName = '进阶7.2.2 存钱罐';

var script1=document.createElement('script');//创建script标签节点
script1.setAttribute('type','text/javascript');//设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js');//设置js地址
document.head.appendChild(script1);//将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, false);
}