---
layout: post
title: "How To Write Comments For Better Readility"
categories: learning
description: the roadmap of constructing personal rack
keywords: comments
tags: application
image: TODO
---
# 📝Comments

here are types of comments:

<!--more-->

1. unifying Coding and Comment Style. By way of illustration, it is shown at the following:

{% highlight ruby %}
//
/** */
{% endhighlight %}

> 📝 **Comment:** The Comment easy for laymen to understand are beautiful.

> 💡 **Tip:** Remember to appreciate the little things in life.

2. File Comment
   {% highlight ruby %}
   #include`<iostream>`
   {% endhighlight %}
3. Clsss Comment

{% highlight ruby %}
template`<class T>`
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
void functionName(T arg_1,T arg_2){

}
{% endhighlight %}

5. Process Comment

{% highlight ruby %}
void diffcult(int i,...){
  ...
  va_list args;
  va_start(args,i);

  va_end(args);
  ...
}
{% endhighlight %}

6. Variable Comment

{% highlight ruby %}
ListNode * cursor //the cursor for search
{% endhighlight %}

<p align="center">

Credit:[Google 开源项目风格指南][googleStyleGuideZh]

</p>

[googleStyleGuideZh]: =https://zh-google-styleguide.readthedocs.io/en/latest/google-cpp-styleguide/
