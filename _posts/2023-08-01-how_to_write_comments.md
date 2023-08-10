---
layout: post
title: "How To Write Comments For Better Readility"
categories: learning
description: the roadmap of constructing personal rack
keywords: comments
tags: application
---
# Comments

here are types of comments:

<!--more-->

1. unifying Coding and Comment Style. By way of illustration, it is shown at the following:

{% highlight ruby %}
//
/** */
{% endhighlight %}

> 📝 **Comment:** The Comment easy for laymen to understand are beautiful.

2. File Comment

{% highlight ruby %}
/**
* @file test.cpp
* @author your name (you@domain.com)
* @brief 
* @version 0.1
* @date 2023-08-08
* 
* @copyright Copyright (c) 2023
* 
*/
#include `<iostream>`

{% endhighlight %}

3. Clsss Comment

{% highlight ruby %}

/**
 * @brief 
 * 
 * @tparam T 
 */
template `<class T>`
class LinkedList: List{
 private:
 LinkedNode *node;
 public:
 LinkedList(){};
 ~LinkedList(){};
 void operator()(const T* arg){

 }

}
{% endhighlight %}

4. Function Comment

{% highlight ruby %}
/**
 * @brief 
 * 
 * @param arg_1 
 * @param arg_2 
 * @return T 
 */
T test::functionName(T arg_1,T arg_2){

}
{% endhighlight %}

5. Process Comment

{% highlight ruby %}
void diffcult(int i,...){
  ...
  va_list args;//brief...
  va_start(args,i);//brief...
  va_end(args);//brief...
  ...
}
{% endhighlight %}

6. Variable Comment

{% highlight ruby %}
ListNode * cursor //the cursor for search
{% endhighlight %}

> 💡 **Tip:** Remember to appreciate the little things in life.

Credit:[Google 开源项目风格指南][googleStyleGuideZh]

[googleStyleGuideZh]: =https://zh-google-styleguide.readthedocs.io/en/latest/google-cpp-styleguide/
