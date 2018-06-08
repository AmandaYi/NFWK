<template>
    <div class="company-detail">
      
        <div class="banner">
            <i class="iconfont icon-fanhui" @click="back()"></i>
            <img src="@/assets/imgs/company-detail.png" class="img" alt="">
        </div>

        <div class="company-name clearfix">
            <div class="left-icon">
                <img   class="img" alt="">
                </div>
            <div class="right-title">
                <h2 class="title">河南亿诺航空科技有限公司</h2>
                <p class="rating">★</p>
            </div>
        </div>

        <div class="company-desc">
            <p class="second-title">
                公司简介
            </p>
            <div class="desc">亿诺航空科技有限公司，成立于2010年，是一家集研发、生产、服务、资源整合、项目合作、创业孵化、培训、教学于一体的创新型企业...</div>
            <p class="more">查看更多></p>
        </div>

        <div class="img-block ">
                <img src="http://placehold.it/212x212" alt="" class="img">
                <img src="http://placehold.it/212x212" alt="" class="img">
                <img src="http://placehold.it/212x212" alt="" class="img">
        </div>

      
        <!-- <ul class="nav">
            <li class="item">产品/服务</li>
            <li class="item">品牌资讯</li>
            <li class="item">用户点评</li>
        </ul> -->
        <div class="product-service">
            <div class="title">
                产品服务
            </div>
            <ul class="list clearfix" @click="toggleNav($event)" ref="serviceNav">
                <li class="item current">全部</li>
                <li class="item">无人机</li>
                <li class="item">油动</li>
                <li class="item">电动</li>
            </ul>
            <div class="list-content">
                <div class="content-left">
                    <img class="content-img"  src="http://placehold.it/270x270">
                </div>
                  <div class="content-right">
                      <h3 class="content-title">超融水分子雾化无人机</h3>
                      <p class="content-desc">智能无人机，黑夹子，远程控制，亩数记忆，远程锁定，超低量静电喷雾技术新品上市。</p>
                      <div class="content-tag clearfix">
                          <span class="tag-left">立即查看></span>
                          <span class="tag-right">#1500</span>
                      </div>
                </div>
            </div>

                  <div class="list-content">
                <div class="content-left">
                    <img class="content-img"  src="http://placehold.it/270x270">
                </div>
                  <div class="content-right">
                      <h3 class="content-title">超融水分子雾化无人机</h3>
                      <p class="content-desc">智能无人机，黑夹子，远程控制，亩数记忆，远程锁定，超低量静电喷雾技术新品上市。</p>
                      <div class="content-tag clearfix">
                          <span class="tag-left">立即查看></span>
                          <span class="tag-right">#1500</span>
                      </div>
                </div>
            </div>
 
        </div>
        <div class="brand-info">  
             <div class="title">
                品牌资讯
            </div>
            <div class="list-content">
                <div class="content-left">
                    <img class="content-img"  src="http://placehold.it/270x270">
                </div>
                  <div class="content-right">
                      <h3 class="content-title">超融水分子雾化无人机</h3>
                      <p class="content-desc">智能无人机，黑夹子，远程控制，亩数记忆，远程锁定，超低量静电喷雾技术新品上市。</p>
                      <div class="content-tag clearfix">
                          <span class="tag-left">立即查看></span>
                          <span class="tag-right">#1500</span>
                      </div>
                </div>
            </div>

                  <div class="list-content">
                <div class="content-left">
                    <img class="content-img"  src="http://placehold.it/270x270">
                </div>
                  <div class="content-right">
                      <h3 class="content-title">超融水分子雾化无人机</h3>
                      <p class="content-desc">智能无人机，黑夹子，远程控制，亩数记忆，远程锁定，超低量静电喷雾技术新品上市。</p>
                      <div class="content-tag clearfix">
                          <span class="tag-left">立即查看></span>
                          <span class="tag-right">#1500</span>
                      </div>
                </div>
            </div></div>
        <div class="user-comment">
            <div class="user-comment-title clearfix">
                <span class="title-text">用户点评</span>
                <span class="sum-comment">共30条评论</span>
            </div>
            <div class="comment-content">
            <comment :comments="comments"></comment>

            </div>
        </div>
          <div class="bottom-tabs">
              <div class="tabs-phone">电话咨询</div>
              <div class="tabs-subscribe" @click="pushSubscribe()">现在预约</div>
          </div>
    </div>
</template>
<script>
import Comment from "@/components/comment/comment";
export default {
  name: "company-detail-page",
  data() {
    return {
      comments: [
        {
          user: {
            username: "158***8748"
          },
          content: "他们的东西非常的好"
        },
        {
          user: {
            username: "158***8788"
          },
          content: "下次我还购买"
        }
      ]
    };
  },
  methods: {
    //   返回
    back(){
        this.$router.go(-1);
    },
    toggleNav(e) {
      let ev = e || window.event;
      // 获取点击的元素代理
      let target = ev.target || ev.srcElement;
      // 获取子元素,为了for
      let children = this.$refs.serviceNav.children;

      // 选中的二级范围导航的索引
      let subId = null;
      if (target.nodeName.toLowerCase() == "li") {
        // console.log();
        target.className = "item current";

        // 清除全部元素的样式
        console.log(target);
        for (let i = 0; i < children.length; i++) {
          if (children[i] === target) {
            console.log(i);
            subId = i;
            continue;
          } else {
            children[i].className = "item";
          }
        }

        // 改变完毕之后,开始对数据进行请求
      }
    },
    pushSubscribe(){
        this.$router.push({
            name:"subscribe-page",
            
        })
    }
  },
  components: {
    Comment
  }
};
</script>
<style lang="scss" scoped>
.company-detail {
  //   background: #ff0;
  .banner {
    width: 100%;
    height: 216px;
    display: block;
    position: relative;
    .img {
      width: 100%;
      height: 216px;
      display: block;
    }
    .iconfont {
      position: absolute;
      top: 20px;
      color: #151515;
      left: 28px;
    }
  }
  //   公司名称
  .company-name {
    position: relative;
    .left-icon {
      position: absolute;
      left: 28px;
      top: -20px;
      float: left;
      width: 144px;
      height: 144px;
      background-color: #ffffff;
      box-shadow: 0px 8px 23px 0px rgba(0, 0, 0, 0.14);
      border-radius: 6px;
      .img {
        width: 144px;
        height: 144px;
        // background-color: #f00;
      }
    }
    .right-title {
      position: relative;
      left: 196px;
      font-size: 36px;
      font-weight: 700;

      color: #333333;
      float: left;
      .title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 36px;
        margin-top: 28px;
      }
      .rating {
        // width: 94px;
        margin-top: 26px;
        font-size: 12px;
        font-weight: 700;
        color: #ff6600;
      }
    }
  }

  //   公司简介
  .company-desc {
    font-size: 30px;
    padding-left: 28px;
    padding-right: 28px;
    margin-top: 30px;
    .second-title {
      margin-top: 0;
      margin-bottom: 0;
      color: #333333;
    }
    .desc {
      margin-top: 28px;
      font-size: 26px;
      letter-spacing: 0px;
      color: #666666;
      line-height: 38px;
    }
  }

  .img-block {
    display: flex;
    padding-left: 28px;
    padding-right: 28px;
    justify-content: space-between;
    align-items: center;
    .img {
      width: 212px;
      height: 212px;
    }
  }

  .product-service,
  .brand-info {
    margin-top: 20px;
    .title {
      height: 100px;
      width: 100%;
      padding-left: 28px;
      box-sizing: border-box;
      padding-right: 28px;
      line-height: 100px;
      font-size: 36px;
      color: #333333;
      font-weight: 700;
      //   background: #f00;
    }
    .list {
      padding-left: 28px;
      .item {
        box-sizing: border-box;
        padding: 18px 34px;
        font-size: 30px;
        font-weight: 500;
        color: #333333;
        float: left;
      }
      .current {
        background-color: #2dbb55;
        border-radius: 30px;
        color:#ffffff;
      }
    }

    .list-content {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eeeeee;
      margin-left: 28px;
      margin-top: 28px;
      margin-right: 28px;
      padding-bottom: 30px;
      flex-wrap: row;
      .content-left {
        width: 40%;
        .content-img {
          width: 270px;
          height: 270px;
        }
      }
      .content-right {
        position: relative;
        width: 60%;
        margin-left: 26px;
        .content-title {
          font-size: 30px;
          color: #333333;
          margin-top: 8px;
          margin-bottom: 0;
        }
        .content-desc {
          margin-top: 20px;
          margin-bottom: 0;
          font-size: 26px;
          line-height: 40px;
          color: #999999;
        }
        .content-tag {
          position: absolute;
          bottom: 0;
          width: 400px;
          // background: #000;
          .tag-right {
            float: right;
          }
        }
      }
    }
  }
  .user-comment {
    margin-top: 20px;
    .user-comment-title {
      padding-left: 28px;
      padding-right: 28px;
      box-sizing: border-box;
      height: 80px;
      line-height: 80px;
      width: 100%;
      //   background: #ff00aa;
      font-size: 36px;
      font-weight: 700;

      color: #333333;
      .sum-comment {
        float: right;
      }
    }

    .comment-content {
      padding-bottom: 20px;
      margin-bottom: 100px;
    }
  }

  .bottom-tabs {
    position: fixed;
    z-index: 9999;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    line-height: 100px;
    height: 100px;
    font-size: 32px;
    color: #ffffff;
    .tabs-phone {
      width: 49.8%;
      height: 100px;
      background-color: #2dbb55;
    }
    .tabs-subscribe {
      width: 49.8%;
      height: 100px;
      background-color: #58a2ff;
    }
    // <div class="tabs-phone">电话咨询</div>
    //       <div class="tabs-subscribe">现在预约</div>
  }
}
</style>

