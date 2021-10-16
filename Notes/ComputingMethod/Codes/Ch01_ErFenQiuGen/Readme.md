<!--
 * @Author: LetMeFly
 * @Date: 2021-10-08 10:38:08
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-10-08 12:02:02
-->
# 01 - 二分求根

## 描述

对于区间 $[a, b]$ 上连续不断且$f(a)·f(b)<0$ 的函数 $y=f(x)$ ，通过不断地把函数 $f(x)$ 的零点所在的区间一分为二，是区间的两个断点逐步逼近零点，进而得到零点近似值的方法叫二分法。

### 二分求方程的一个根

比如求方程 $f(x)=x^3-25$ 在区间 $[0,5]$ 上的根，精度为 $0.000001$ 。

**那么有代码：**

注意这样只能求得方程在区间 $[a,b]$ 上的其中一个根。

**老师代码：**

### 二分开根号

把方程看成 $f(x)=x^2-a$ ，初始区间为 $[0, a]$ 即可。

**我的代码：**

**老师代码：**