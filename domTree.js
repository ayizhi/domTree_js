/**
 * Created by zhangyizhi on 16/6/6.
 */
var TreeData = {
    "status": true,
    "message": "获取数据成功",
    "data": {
        "departmentStructure": {
            "id": "d461b77bc762411e8ca7d886e796ea5c",
            "admin_id": "0",
            "admin_name": "",
            "name": "中国移动1",
            "parent_id": "0",
            "employee_count": 18,
            "children_ids": [
                "50acb522701848488f726a3d7cb3dc9a",
                "7b84d91891de464e807d50bb0ad7619c"
            ],
            "children": [
                {
                    "id": "50acb522701848488f726a3d7cb3dc9a",
                    "admin_id": "0",
                    "admin_name": "",
                    "name": "研发1",
                    "parent_id": "d461b77bc762411e8ca7d886e796ea5c",
                    "employee_count": 1,
                    "children_ids": [
                        "7ffceb278dae4ab69d28b208f663a8ff"
                    ],
                    "children": [
                        {
                            "children": [
                                {
                                    "id": "ae627ddfa006473a93574bcc322e4dad",
                                    "admin_id": "0",
                                    "admin_name": "",
                                    "name": "那几句话关键是1",
                                    "parent_id": "7ffceb278dae4ab69d28b208f663a8ff",
                                    "employee_count": 2,
                                    "children_ids": [
                                        "0db513c2c18d4be6a4e97cbb3dc5c554",
                                        "0db513c2c18d4be6a4e97cbb3dc5c551"
                                    ],
                                    "children": [
                                        {
                                            "id": "0db513c2c18d4be6a4e97cbb3dc5c554",
                                            "admin_id": "0",
                                            "admin_name": "",
                                            "name": "二二1",
                                            "parent_id": "ae627ddfa006473a93574bcc322e4dad",
                                            "employee_count": 0,
                                            "children_ids": []
                                        },
                                        {
                                            "id": "0db513c2c18d4be6a4e97cbb3dc5c551",
                                            "admin_id": "0",
                                            "admin_name": "",
                                            "name": "一一1",
                                            "parent_id": "ae627ddfa006473a93574bcc322e4dad",
                                            "employee_count": 0,
                                            "children_ids": []
                                        }
                                    ]
                                }
                            ],
                            "id": "7ffceb278dae4ab69d28b208f663a8ff",
                            "admin_id": "0",
                            "admin_name": "",
                            "name": "研啊说发1",
                            "parent_id": "50acb522701848488f726a3d7cb3dc9a",
                            "employee_count": 0,
                            "children_ids": [
                                "ae627ddfa006473a93574bcc322e4dad"
                            ]
                        }
                    ]
                },
                {
                    "id": "7b84d91891de464e807d50bb0ad7619c",
                    "admin_id": "d461b77bc762411e8ca73545",
                    "admin_name": "大马猴",
                    "name": "测试一部2",
                    "parent_id": "d461b77bc762411e8ca7d886e796ea5c",
                    "employee_count": 1,
                    "children_ids": ['7ffceb278dae4ab69d28b208f663a8ffa'],
                    "children": [
                        {
                            "id": "7ffceb278dae4ab69d28b208f663a8ffa",
                            "admin_id": "0",
                            "admin_name": "",
                            "name": "研发2",
                            "parent_id": "7b84d91891de464e807d50bb0ad7619c",
                            "employee_count": 0,
                            "children_ids": [
                                "ae627ddfa006473a93574bcc322e4dasfds",
                                "ae627ddfa00647sdfa93574bcc322efaf",
                            ],
                            "children": [
                                {
                                    "id": "ae627ddfa00647sdfa93574bcc322efaf",
                                    "admin_id": "0",
                                    "admin_name": "",
                                    "name": "那几句话关键是3",
                                    "parent_id": "7b84d91891de464e807d50bb0ad7619c",
                                    "employee_count": 2,
                                    "children_ids": [
                                        "0db513c2c18d4basde6a4e97cbb3dc5c5342",
                                        "0db513c2c18d4asdbe6a4e97cbb3dc5c4521"
                                    ],
                                    "children": [
                                        {
                                            "id": "0db513c2c18d4basde6a4e97cbb3dc5c5342",
                                            "admin_id": "0",
                                            "admin_name": "",
                                            "name": "三3",
                                            "parent_id": "ae627ddfa00647sdfa93574bcc322efaf",
                                            "employee_count": 0,
                                            "children_ids": []
                                        },
                                        {
                                            "id": "0db513c2c18d4asdbe6a4e97cbb3dc5c4521",
                                            "admin_id": "0",
                                            "admin_name": "",
                                            "name": "四3",
                                            "parent_id": "ae627ddfa00647sdfa93574bcc322efaf",
                                            "employee_count": 0,
                                            "children_ids": []
                                        }
                                    ]
                                },
                            ],

                        }
                    ]

                }
            ]
        },
        "leftEmployeeCount": 14
    }
}



function BuildNodeTree(data,select){
    this.data = data;
    this.paDom = select;
    this.baseClassName = 'dom-tree';
    this.liWidth = 110;
    this.liMargin = 30;
    this.init();
}

BuildNodeTree.prototype = {
    //domTree初始化,需要结束后塞入html骨架
    init: function(){
        var t = this;
        var tmpHtml = '<ul  class="'+ t.baseClassName +'" >';

        iterator(this.data)

        function iterator(data){
            var id = data.id;
            var name = data.name;
            var children = data.children;
            var children_ids = data.children_ids;
            var parent_id = data.parent_id;
            var admin_id = data.admin_id;
            var admin_name = data.admin_name ? data.admin_name: '负责人空缺';
            var nodeContent = parent_id != '0' ? '<div class="department-name node-content">' + name + '</div><div class="people-num node-content">(' + children_ids.length + '人)</div><div class="admin-info node-content" data-admin_id="' + admin_id + '">(' + admin_name + ')</div>' + '<div class="closeNodeBtn"><i class="icon icon-sum toggleChildren"></i></div>' : '<div class="department-name node-content">' + name + '</div>';
            var addAdminBtn = ((admin_id == '0') && (parent_id != '0')) ? '<div class="add-admin-btn"><i class="icon icon-add3"></i></div>' : '';
            var liClassName = ''
            var tmpThis = '';//每一次的临时字段

            //处理li的className
            liClassName += children_ids.length == 0 ? 'last-children' : '';
            liClassName += parent_id == '0' ? 'original-node' : '';

            //由parent与children决定头顶竖线
            if(children_ids.length == 0){
                tmpThis = '<ul data-id="'+ id +'"><div class="node-line top-line"><p class="left-line"></p><p class="right-line"></p></div><li class="'+ liClassName +'">' + nodeContent + addAdminBtn + '</li>'
            }else if(parent_id == '0'){
                tmpThis = '<ul class="original-parent-node" data-id="'+ id +'"><li class="' + liClassName + '">' + nodeContent + addAdminBtn + '</li><div class="node-line bottom-line"><p class="left-line"></p><p class="right-line"></p></div>'
            }else{
                tmpThis = '<ul data-id="'+ id +'"><div class="node-line top-line"><p class="left-line"></p><p class="right-line"></p></div><li class="'+ liClassName +'">' + nodeContent + addAdminBtn + '</li><div class="node-line bottom-line"><p class="left-line"></p><p class="right-line"></p></div>'
            }


            tmpHtml += tmpThis

            if(children){
                for(var i= 0,len=children.length;i<len;i++){
                    var thisChildren = children[i];
                    iterator(thisChildren)
                }
                tmpHtml += '</ul>'
            }else{
                tmpHtml += '</ul>'
                return
            }
        }

        tmpHtml += '</ul>';

        //装进父盒子
        $(t.paDom).append($(tmpHtml));

        //修改宽度,修改样式
        t.dealTreeStyle();

        return tmpHtml
    },


    //调整树状图样式(目前主要是横向)(插入节点,删除节点每次都需要)
    dealTreeStyle: function(){
        var t = this;
        var treeList = $(t.paDom);

        //处理横向虚线
        treeIterator(treeList);
        function treeIterator(dom){
            var $childUl = $(dom).children('ul');
            if($childUl.length > 1){
                //处理横向连线样式
                $childUl.each(function (index) {
                    if(index == 0){
                        $(this).children('.top-line').children('.right-line').css('border-top','2px dashed #ccc')
                    }else if(index == $childUl.length - 1){
                        $(this).children('.top-line').children('.left-line').css('border-top','2px dashed #ccc')
                    }else{
                        $(this).children('.top-line').children('.right-line').css('border-top','2px dashed #ccc')
                        $(this).children('.top-line').children('.left-line').css('border-top','2px dashed #ccc')
                    }
                })
            }else{
                $childUl.each(function () {
                    $(this).children('.top-line').children('.right-line').css('border-top','none')
                    $(this).children('.top-line').children('.left-line').css('border-top','none')
                })
            }
            if($childUl.length == 0){
                return
            }else{
                $childUl.each(function () {
                    treeIterator($(this))
                })
            }

        }

        //处理宽度
        var t = this;
        var lastChildNum = $(t.paDom).find('.last-children').length;
        var childrenHideNum = $(t.paDom).find('.children-hidden').length;
        var noNeedLastChildNum = $(t.paDom).find('.children-hidden').parent('ul').find('.last-children').length;
        var theWidth = (+lastChildNum + +childrenHideNum - +noNeedLastChildNum) * ( t.liWidth + t.liMargin );
        console.log(lastChildNum,childrenHideNum,noNeedLastChildNum)
        console.log(theWidth)
        var $theTree = $(t.paDom + ' .' + t.baseClassName);
        $theTree.css('width',theWidth + 40 + 'px');
    },

    //隐藏分支
    hideNode: function(id){
        var t = this;
        var $parentNode = $(t.paDom + ' ul[data-id="'+ id +'"]');
        var $paLi = $parentNode.children('li');
        var $tBottomLine = $parentNode.find('.bottom-line');
        var $ul = $parentNode.find('ul');
        var $closeBtns = $parentNode.children('li').children('.closeNodeBtn');

        $closeBtns.children('i').removeClass('icon-sum').addClass('icon-add');
        //$tBottomLine.css("visibility","hidden");
        //$ul.css("visibility","hidden");
        $paLi.addClass('children-hidden');
        $tBottomLine.css("diplay","none");
        $ul.css("display","none");
        //修改宽度,修改样式
        t.dealTreeStyle();

    },

    //显示分支
    showNode: function(id){
        var t = this;
        var $parentNode = $(t.paDom + ' ul[data-id="'+ id +'"]');
        var $tBottomLine = $parentNode.children('.bottom-line');
        var $ul = $parentNode.find('ul');
        var $paLi = $parentNode.children('li');
        var $closeBtns = $parentNode.children('li').children('.closeNodeBtn');

        $closeBtns.children('i').addClass('icon-sum').removeClass('icon-add');
        //$tBottomLine.css("visibility","visible");
        //$ul.css("visibility","visible");
        $paLi.removeClass('children-hidden');
        $tBottomLine.css("display","block");
        $ul.css("display","block");
        //修改宽度,修改样式
        t.dealTreeStyle();

    },
    //插入分支
    insertNode: function (id,obj) {
        var t = this;
        var $targetNode = $(t.paDom + ' ul[data-id="'+ id +'"]');
        var $targetLi = $targetNode.children('li')
        var $siblings = $targetNode.children('ul');
        var department_id = obj.id;
        var name = obj.name;
        var children = obj.children;
        var children_ids = obj.children_ids;
        var parent_id = obj.parent_id;
        var admin_id = obj.admin_id ? obj.admin_id: '';
        var admin_name = obj.admin_name ? obj.admin_name: '负责人空缺';
        var addAdminBtn = ((admin_id == '0') && (parent_id != '0')) ? '<div class="add-admin-btn"><i class="icon icon-add3"></i></div>' : '';
        var $newNode = $('<ul data-id="'+ department_id +'"><div class="node-line top-line"><p class="left-line"></p><p class="right-line"></p></div><li class="last-children">' + '<div class="department-name node-content">' + name + '</div><div class="people-num node-content">(' + children_ids.length + '人)</div><div class="admin-info node-content" data-admin_id="' + admin_id + '">(' + admin_name + ')</div>' + addAdminBtn + '</li></ul>');

        //插入没有儿子的节点,需要给当前插入一个竖着的线
        if($siblings.length == 0){
            //去除类名
            $targetNode.children('li').removeClass('last-children');
            //插入竖线与closeBtn
            $targetNode.append($('<div class="node-line bottom-line"><p class="left-line"></p><p class="right-line"></p></div>'));
            $targetLi.append($('<div class="closeNodeBtn"><i class="icon icon-sum toggleChildren"></i></div>'))
        }

        $targetNode.append($newNode);
        t.dealTreeStyle();

    },

    //删除分支
    deleteNode: function(id){
        var t = this;
        var $targetNode = $(t.paDom + ' ul[data-id="' + id + '"]');
        var $paNode = $targetNode.parent('ul');
        var $paNodeLi = $paNode.children('li');
        var paId = $paNode.attr('data-id');
        var $siblings = $targetNode.siblings('ul');

        //没有兄弟节点,需要给paNode加上'last-children'的类名,并且去掉底部竖线
        if($siblings.length == 0){
            $paNodeLi.addClass('last-children');
            $paNode.children('.bottom-line').remove();
        }
        $targetNode.remove();
        t.dealTreeStyle();
    }
}




function BuildNodeList(data,select){
    this.data = data;
    this.paDom = select;
    this.baseClassName = 'dom-list';

    this.init();
    //this.init();
    //this.bindEvent();
}

BuildNodeList.prototype = {
    init: function () {
        var t = this;
        var tmpHtml = '<ul  class="' + t.baseClassName + '" >';
        var employee_count = t.data['employee_count'];


        iterator(t.data)
        function iterator(treeData){

            iterator(treeData)

            function iterator(data){
                var id = data.id;
                var name = data.name;
                var children = data.children;
                var children_ids = data.children_ids;
                var parent_id = data.parent_id;
                var tmpThis = '';//每一次的临时字段
                var addBtnTmp = parent_id == '0' ? '<div class="add-function"><i class="icon icon-add22"></i><span class="li-department-setting"><div class="setting-option departname-add">添加部门</div><div class="setting-option departname-rename">重命名</div></span></div>' : '<div class="add-function"><i class="icon icon-add22"></i><span class="li-department-setting"><div class="setting-option departname-add">添加部门</div><div class="setting-option departname-rename">重命名</div><div class="setting-option departname-delete">删除</div></span></div>';

                tmpThis = '<ul department-id="' + id + '"><li><p><i class="closeListBtn icon icon-triangle toggleList"></i>' + name + '(' + children_ids.length + '人)' + addBtnTmp + '</p></li>'

                tmpHtml += tmpThis

                if(children){
                    for(var i= 0,len=children.length;i<len;i++){
                        var thisChildren = children[i];
                        iterator(thisChildren)
                    }
                    tmpHtml += '</ul>'
                }else{
                    tmpHtml += '</ul>'
                    return
                }
            }

            tmpHtml += '</ul>';
            tmpHtml += '<ul class="dom-list employee-count"><li><p>待分配(' + employee_count + '人)</p></li></ul>';

            return tmpHtml;
        }
        $(t.paDom).append(tmpHtml);
    },

    insertNode: function (id,obj) {
        var t = this;
        var $targetNode = $(t.paDom + ' ul[department-id="'+ id +'"]');
        var $targetLi = $targetNode.children('li')
        var $siblings = $targetNode.children('ul');
        var department_id = obj.id;
        var name = obj.name;
        var children = obj.children;
        var children_ids = obj.children_ids;
        var parent_id = obj.parent_id;
        var addBtnTmp = '<div class="add-function"><i class="icon icon-add22"></i><span class="li-department-setting"><div class="setting-option department-add" >添加部门</div><div class="setting-option departname-rename">重命名</div><div class="setting-option department-delete">删除</div></span></div>';

        var tmpThis = '<ul department-id="' + id + '"><li><p><i class="closeListBtn icon icon-triangle toggleList"></i>' + name + '(' + children_ids.length + '人)' + addBtnTmp + '</p></li>'

        $targetNode.append($(tmpThis));
    },

    deleteNode: function (id) {
        var t = this;
        var $tDom = $(t.paDom + ' ul[department-id=' + id + ']');
        $tDom.remove();
    },

    hideNode: function (id) {
        var t = this;
        var $tDom = $(t.paDom + ' ul[department-id=' + id + ']');
        var $childrenNode = $tDom.children('ul');
        console.log($childrenNode);
        $childrenNode.slideUp(100);
    },

    showNode: function (id) {
        var t = this;
        var $tDom = $(t.paDom + ' ul[department-id=' + id + ']');
        var $childrenNode = $tDom.children('ul');
        console.log($childrenNode);

        $childrenNode.slideDown(100);
    },
}



function DepartmentStructureController(data){
    this.data = data;
    this.treePaDom = '#orgnization-tree';
    this.listPaDom = '#department-list';
    this.leftTree = new BuildNodeTree(this.data.data.departmentStructure,this.treePaDom);
    this.rightList = new BuildNodeList(this.data.data.departmentStructure,this.listPaDom);
    this.bindEvent();
}

DepartmentStructureController.prototype = {
    bindEvent: function () {
        var t = this;
        var tree = '.' + t.leftTree.baseClassName;
        var list = '.' + t.rightList.baseClassName;


        //控制树状图的隐藏显示按钮
        $(tree + ' li .closeNodeBtn').on('click', function () {
            var $thisBtn = $(this);
            var $pa = $(this).parent('li');
            var $grand = $pa.parent('ul');
            var id = $grand.attr('data-id');
            if(!$thisBtn.hasClass('close')){
                t.leftTree.hideNode(id);
                $thisBtn.addClass('close');
            }else{
                t.leftTree.showNode(id);
                $thisBtn.removeClass('close');
            }
        })

        //控制列表的显示隐藏
        $(list + ' li p .closeListBtn').on('click', function () {
            var $thisBtn = $(this);
            var $grand = $thisBtn.parent('p').parent('li').parent('ul');
            var id = $grand.attr('department-id');

            if(!$thisBtn.hasClass('close')){
                t.rightList.hideNode(id);
                $thisBtn.addClass('close');
            }else{
                t.rightList.showNode(id);
                $thisBtn.removeClass('close');
            }
        })

        //department部门添加删除重命名操作
        $(list + ' li .add-function').mouseenter(function () {
            var $t = $(this);
            var settingLis = $t.find('.li-department-setting');
            settingLis.show();
        }).mouseleave(function () {
            var $t = $(this);
            var settingLis = $t.find('.li-department-setting');
            settingLis.hide();
        })
    },
}

var theController = new DepartmentStructureController(TreeData);