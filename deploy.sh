#! /bin/sh

# 当前的版本号
current_version=v0.0.2
# 当前用户
current_usr=`whoami`
# 当前时间
current_date=`date "+%Y%m%d%H%M%S"`

# echo $current_usr
# echo $current_version

tag_name="$current_version.$current_usr.$current_date"

# 创建tag
git tag $tag_name;

# 上传tag
git push orgin v2 $tag_name;

