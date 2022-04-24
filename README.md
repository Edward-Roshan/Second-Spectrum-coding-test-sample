# Second-Spectrum-coding-test-sample
这个是一个博彩公司Second Spectrum要求面试前的题目，题目在邮件扔给我了，此等题目想考察我什么呢？自己看看吧。
题目过于简单，但是最后得到的feedback是没有具体原因，然后不愿意push forward。难道有什么问题吗？毫无营养而又毫无意义的题目。

邮件里贴了题目如下：

```
Pls tell me the stock with the largest absolute increase from its first recording to its last recording. This is complicated by the file being unsorted, and having lots of null values, with non-standard null entries (unknown, NA, N/A, UNKOWN, etc).
Please optimize your code to get the best performance.

Name,Date,notes,Value,Change
IQZ,2015-7-8,notes,656.36,INCREASED
DLV,2015-8-8,notes,173.35,INCREASED
DLV,2015-10-4,notes,231.67,INCREASED
DLV,2015-9-7,notes,209.57,DECREASED
IQZ,2015-9-7,notes,641.23,DECREASED
IQZ,2015-10-4,notes,657.32,INCREASED
DLV,2015-8-18,notes,233.43,INCREASED
DLV,2015-9-15,notes,158.73,DECREASED
IQZ,2015-10-8,notes,537.53,DECREASED
IQZ,2015-10-6,notes,Invalid,UNKNOWN

Print: 公司: DLV, 股价增值: 58.320000

Name,Date,notes,Value,Change
IQZ,2015-7-8,notes,656.36,DECREASED
DLV,2015-8-8,notes,773.35,DECREASED
DLV,2015-10-4,notes,231.67,DECREASED
DLV,2015-9-7,notes,299.57,DECREASED

Print: nil

```
