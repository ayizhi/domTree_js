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



    var organizationHtml = [
        '<div id="orgnization-list">',
        '<div id="department-list"></div> ',
        '<div id="employee-list"></div>',
        '<div id="show-list-btn"><i class="icon-left"></i></div>',
        '</div>',
        '<div id="orgnization-tree">',
        '</div>',

    ].join("")

    var organizationStructure = new PopWin('organizationWin', '组织结构图');
        bornOrganization(organizationStructure);




    //建立组织架构图
    function bornOrganization(organizationStructure){
        
                organizationStructure.appendDom(organizationHtml);
                buildNodeTreeAndList(TreeData,organizationStructure)
    }

    //获取数据后的回调
    function buildNodeTreeAndList(reply,organizationStructure){
        var TreeData = reply;

        //右边的树状图
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
                    var employee_count = data.employee_count;
                    var admin_name = data.admin_name ? data.admin_name: '负责人空缺';
                    var nodeContent = parent_id != '0' ? '<div class="department-name node-content" title="' + name + '">' + name + '</div><div class="people-num node-content">(' + employee_count + '人)</div><div class="admin-info node-content" data-admin_id="' + admin_id + '">(' + admin_name + ')</div>' + '<div class="closeNodeBtn"><i class="icon icon-sum toggleChildren"></i></div>' : '<div class="department-name node-content">' + name + '</div>';
                    var addAdminBtn = ((admin_id == '0') && (parent_id != '0')) ? '<div class="add-admin-btn node-admin-btn"><i class="icon icon-add3"></i></div>' : (parent_id != '0' ? '<div class="delete-admin-btn node-admin-btn"><i class="icon icon-delete3"></i></div>' : '');
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
                                $(this).children('.top-line').children('.right-line').css('border-top','2px dashed #ccc');
                                $(this).children('.top-line').children('.left-line').css('border-top','0')

                            }else if(index == $childUl.length - 1){
                                $(this).children('.top-line').children('.right-line').css('border-top','0')
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
                var $theTree = $(t.paDom + ' .' + t.baseClassName);
                $theTree.css('width',theWidth + 40 + 'px');
            },

            //隐藏分支
            hideNode: function(id){
                var t = this;
                var $parentNode = $(t.paDom + ' ul[data-id="'+ id +'"]');
                var $paLi = $parentNode.children('li');
                var $tBottomLine = $parentNode.children('.bottom-line');
                var $ul = $parentNode.children('ul');
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
                var $ul = $parentNode.children('ul');
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
                var employee_count = obj.employee_count;
                var parent_id = obj.parent_id;
                var admin_id = obj.admin_id ? obj.admin_id: '';
                var admin_name = obj.admin_name ? obj.admin_name: '负责人空缺';
                var addAdminBtn = ((admin_id == '0') && (parent_id != '0')) ? '<div class="add-admin-btn node-admin-btn"><i class="icon icon-add3"></i></div>' : '';
                var $newNode = $('<ul data-id="'+ department_id +'"><div class="node-line top-line"><p class="left-line"></p><p class="right-line"></p></div><li class="last-children">' + '<div class="department-name node-content" title="' + name + '">' + name + '</div><div class="people-num node-content">(' + employee_count + '人)</div><div class="admin-info node-content" data-admin_id="' + admin_id + '">(' + admin_name + ')</div>' + addAdminBtn + '</li></ul>');

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
            },

            //重命名
            renameNode: function (id,name) {
                var t = this;
                var $nameDom = $(t.paDom + ' ul[data-id="' + id + '"]').children('li').children('.department-name');
                $nameDom.text(name);
            }
        }

        //左边的ul
        function BuildNodeList(data,select){
            this.data = data.departmentStructure;
            this.leftEmployeeCount = data.leftEmployeeCount;
            this.paDom = select;
            this.baseClassName = 'dom-list';
            this.init();
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
                        var employee_count = data.employee_count;
                        var tmpThis = '';//每一次的临时字段
                        var addBtnTmp = parent_id == '0' ? '<div class="add-function"><i class="icon icon-add22"></i><span class="li-department-setting"><div class="setting-option department-add">添加部门</div><div class="setting-option department-rename">重命名</div></span></div>' : '<div class="add-function"><i class="icon icon-add22"></i><span class="li-department-setting"><div class="setting-option department-add">添加部门</div><div class="setting-option department-rename">重命名</div><div class="setting-option department-delete">删除</div></span></div>';
                        var theTitle = name + '(' + employee_count + '人)'
                        var ifHasChildren = data.children_ids.length == 0 ? 'has-no-children' : '';

                        tmpThis = '<ul department-id="' + id + '"><li><p><i class="closeListBtn icon icon-triangle toggleList ' + ifHasChildren + '"></i>' + '<span class="department-name" title="' + theTitle + '">' + name + '</span>' + '(' + employee_count + '人)' + addBtnTmp + '</p></li>'

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
                    tmpHtml += '<ul class="dom-list employee-count"><li><p class="left-employee-conut">待分配(' + t.leftEmployeeCount + '人)</p></li></ul>';

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
                var employee_count = obj.employee_count;
                var theTitle = name + '(' + employee_count + '人)'
                var parent_id = obj.parent_id;
                var ifHasChildren = obj.children_ids.length == 0 ? 'has-no-children' : '';

                var addBtnTmp = '<div class="add-function"><i class="icon icon-add22"></i><span class="li-department-setting"><div class="setting-option department-add" >添加部门</div><div class="setting-option department-rename">重命名</div><div class="setting-option department-delete">删除</div></span></div>';

                var tmpThis = '<ul department-id="' + department_id + '"><li ><p><i class="closeListBtn icon icon-triangle toggleList has-no-children"></i>' + '<span class="department-name" title="' + theTitle + '">' + name  + '</span>' + '(' + employee_count + '人)' + addBtnTmp + '</p></li>'

                //同时去除掉目标级的'has-no-children'属性
                $targetNode.children('li').find('.toggleList').removeClass('has-no-children');
                $targetNode.append($(tmpThis));
            },

            deleteNode: function (id) {
                var t = this;
                var $targetNode = $(t.paDom + ' ul[department-id=' + id + ']');
                var $siblings = $targetNode.siblings();
                var $parentNode = $targetNode.parent('ul');
                var $parent_i_pic = $parentNode.children('li').find('.toggleList');
                //同时判断是否为最有一个
                if($siblings.length == 0){
                    $parent_i_pic.addClass('has-no-children')
                }
                $targetNode.remove();
            },

            hideNode: function (id) {
                var t = this;
                var $targetNode = $(t.paDom + ' ul[department-id=' + id + ']');
                var $childrenNode = $targetNode.children('ul');
                $childrenNode.slideUp(200);
            },

            showNode: function (id) {
                var t = this;
                var $targetNode = $(t.paDom + ' ul[department-id=' + id + ']');
                var $childrenNode = $targetNode.children('ul');
                $childrenNode.slideDown(200);
            },

            //重命名
            renameNode: function (id,name) {
                var t = this;
                var $nameDom = $(t.paDom + ' ul[department-id="' + id + '"]').children('li').find('.department-name');
                $nameDom.text(name);
            }
        }

        //总体控制器
        function DepartmentStructureController(data){
            this.popWinId = '#organizationWin';
            this.data = data;
            this.treePaDom = '#orgnization-tree';
            this.departmentListPaDom = '#department-list';
            this.employeeListPaDom = '#employee-list';
            this.rightTree = new BuildNodeTree(this.data.data.departmentStructure,this.treePaDom);
            this.leftList = new BuildNodeList(this.data.data,this.departmentListPaDom);
            this.startDepartmentId = this.data.data.departmentStructure.id;
            this.startDepartmentName = this.data.data.departmentStructure.name;

            this.bindEvent();
            this.getEmployee(this.startDepartmentId,this.startDepartmentName);
        }

        DepartmentStructureController.prototype = {
            //初始化页面的时候获得员工列的所有员工
            getEmployee: function (id,name) {
                var t = this;
                $.ajax({
                    type: "post",
                    url: "/company/ajax-get-department-employees.html",
                    data: {
                        'department_id': id,
                    },
                    success: function (reply) {
                        if(!reply.status){
                            remind('error',reply.message);
                            return
                        }
                        var employeesData = reply.data.employees;
                        t.buildEmployeeList(employeesData, name);
                    }
                })

            },

            buildEmployeeList: function (data,paName) {
                var t = this;
                $(t.employeeListPaDom).html("");
                var tmpUl = '<ul class="show-list">' + '<li class="department-name">' + paName + '</li>';
                var children = [];
                var grandChidlren = [];

                //先对直系员工与子部门员工进行分类
                (function () {
                    for(var i= 0,len=data.length;i<len;i++){
                        var tName = data[i].name;
                        var tMobile = data[i].mobile;
                        var isSub = data[i].is_sub;
                        if(isSub){
                            grandChidlren.push(data[i]);
                        }else{
                            children.push(data[i]);
                        }
                    }
                })();



                (function () {
                    for(var i= 0,len=children.length;i<len;i++){
                        var tName = children[i].name;
                        var tMobile = children[i].mobile;
                        var isSub = children[i].is_sub
                        var tTitle = tName + '(' + tMobile + ')'
                        tmpUl += '<li class="direct-child" title="' + tTitle + '">' + tName + '('+ tMobile +')' + '</li>'
                    }
                })();

                (function () {
                    for(var i= 0,len=grandChidlren.length;i<len;i++){
                        var tName = grandChidlren[i].name;
                        var tMobile = grandChidlren[i].mobile;
                        var isSub = grandChidlren[i].is_sub

                        var tTitle = tName + '(' + tMobile + ')'
                        tmpUl += '<li class="no-direct-child" title="' + tTitle + '">' + tName + '('+ tMobile +')' + '</li>'
                    }
                })();


                tmpUl += '</ul>';

                $(t.employeeListPaDom).append($(tmpUl));

            },

            insertNode: function (id,obj) {
                var t = this;
                t.rightTree.insertNode(id,obj);
                t.leftList.insertNode(id,obj);
            },

            deleteNode: function (id) {
                var t = this;
                t.rightTree.deleteNode(id);
                t.leftList.deleteNode(id);
            },

            renameNode: function (id,newName) {
                var t = this;
                t.rightTree.renameNode(id,newName);
                t.leftList.renameNode(id,newName);
            },

            bindEvent: function () {
                var t = this;
                var tree = '.' + t.rightTree.baseClassName;
                var list = '.' + t.leftList.baseClassName;

                //需要对树的高度进行限制
                var winBodyHeight = $('#' + organizationStructure.winId + ' .winBody').height();
                var winBodyWidth = $('#' + organizationStructure.winId + ' .winBody').width();
                $('#orgnization-tree').css({'height':winBodyHeight + 'px','width':winBodyWidth - 550 + 'px'});


                //做列表旁箭头显示隐藏按钮
                $("#show-list-btn").on('click',function(){
                    var $t = $(this);
                    var $pa = $t.parent('#orgnization-list');
                    var $siblings = $t.siblings();
                    var $tree = $('#orgnization-tree');
                    if($pa.hasClass('close')){
                        $siblings.show();
                        //需要对树状图的宽进行设置
                        $tree.animate({'left':'500px','width':winBodyWidth - 550 + 'px'},200);
                        $t.find('i').removeClass('icon-right').addClass('icon-left');
                        $pa.animate({'left':0},200,function(){
                            $pa.removeClass('close');
                        })
                    }else{
                        //需要对树状图的宽进行设置
                        $tree.animate({'left':'0','width':winBodyWidth - 50 + 'px'},200);
                        $t.find('i').removeClass('icon-left').addClass('icon-right');
                        $pa.animate({'left':'-500px'},200, function() {
                            $siblings.hide();
                            $pa.addClass('close');
                        })
                    }
                })

                //控制树状图的隐藏显示按钮
                $(t.popWinId).on('click', tree + ' li .closeNodeBtn' , function () {
                    var $thisBtn = $(this);
                    var $pa = $(this).parent('li');
                    var $grand = $pa.parent('ul');
                    var id = $grand.attr('data-id');
                    if(!$thisBtn.hasClass('close')){
                        t.rightTree.hideNode(id);
                        $thisBtn.addClass('close');
                    }else{
                        t.rightTree.showNode(id);
                        $thisBtn.removeClass('close');
                    }
                })

                //控制列表的显示隐藏
                $(t.popWinId).on('click',list + ' li p .closeListBtn', function () {
                    var $thisBtn = $(this);
                    var $grand = $thisBtn.parent('p').parent('li').parent('ul');
                    var id = $grand.attr('department-id');

                    if(!$thisBtn.hasClass('close')){
                        t.leftList.hideNode(id);
                        $thisBtn.addClass('close');
                    }else{
                        t.leftList.showNode(id);
                        $thisBtn.removeClass('close');
                    }
                })

                //department部门添加删除重命名操作
                $(t.popWinId).on('mouseenter' , list + ' li .add-function' , function () {
                    var $t = $(this);
                    var $settingLis = $t.find('.li-department-setting');
                    var $tLi = $(this).parent('li');

                    //判断有没有超过5级
                    if($tLi.parent('ul').parent('ul').parent('ul').parent('ul').parent('ul').parent('ul').parent('ul').length != 0){
                        $settingLis.show();
                        $settingLis.find('.department-add').hide();
                    }else{
                        $settingLis.show();
                    }

                    return false;
                })
                $(t.popWinId).on('mouseleave' , list + ' li .add-function' , function () {
                    var $t = $(this);
                    var settingLis = $t.find('.li-department-setting');
                    settingLis.hide();
                    return false;

                })

                //===具体操作(添加部门,重命名部门,删除部门)
                    //添加部门
                $(t.popWinId).on('click',list + ' .department-add' , function () {
                    var $t = $(this);
                    var $tUl = $t.parent('span').parent('.add-function').parent('li').parent('ul');
                    var parent_id = $tUl.attr('department-id');
                    //弹出个窗口
                    var addDepartmentWin = new Dialog('add-department-win','添加部门',{'bottomBtn':{'confirm btn':'确定','cancel btn':'取消'}})
                    addDepartmentWin.appendDom('<div class="row-dialog clearfix"><div class="input-box add-department-name-content"><input id="add-department-name" class="add-department-name vf-required vf-input-length" data-min="1" data-max="50" placeholder="添加部门"></div></div>')
                    addDepartmentWin.bindEvent(function () {
                        $('#' + addDepartmentWin.alertId + ' .confirm').click(function () {
                            var self = this;
                            //错误检测
                            $('#' + addDepartmentWin.alertId + ' .add-department-name').trigger('focus').blur();
                            if($('#' + addDepartmentWin.alertId).find('.error').length != 0){
                                return
                            }


                            //获取新姓名
                            var newDepartmentName = $('#' + addDepartmentWin.alertId + ' .add-department-name').val();

                            var allAlreadyName = [];
                            $('.department-name').each(function () {
                                allAlreadyName.push($(this).html());
                            });
                            //如果与老名一致
                            if( allAlreadyName.indexOf(newDepartmentName) != -1){
                                showError($('#add-department-name'),'addname','部门名称已存在')
                                return;
                            }


                            forbiddenResubmit.begin(self);
                            //ajax发送信息
                            $.ajax({
                                type: "post",
                                url: "/company/ajax-add-department.html",
                                data: {
                                    'parent_id': parent_id,
                                    'name': newDepartmentName,
                                },
                                success: function (reply) {
                                    forbiddenResubmit.end(self);
                                    if(!reply.status){
                                        remind('error',reply.message);
                                        return;
                                    }else{
                                        remind('success',reply.message);
                                    }


                                    var department_id = reply.data.departmentId;


                                    //添加节点
                                    t.insertNode(parent_id,{
                                        "id": department_id,
                                        "admin_id": "0",
                                        "admin_name": "",
                                        "name": newDepartmentName,
                                        "parent_id": parent_id,
                                        "employee_count": 0,
                                        "children_ids": []
                                    });

                                    addDepartmentWin.rmThis();
                                }
                            })
                        })
                    })
                    return false;
                });

                    //重命名部门
                $(t.popWinId).on('click' , list + ' .department-rename' , function () {
                    var $t = $(this);
                    var $tUl = $t.parent('span').parent('.add-function').parent('li').parent('ul');
                    var oldName = $tUl.children('li').find('.department-name').html();
                    var rename_id = $tUl.attr('department-id');
                    //弹出个窗口
                    var renameDepartmentWin = new Dialog('rename-department-win','更改部门名称',{'bottomBtn':{'confirm btn':'确定','cancel btn':'取消'}})
                    renameDepartmentWin.appendDom('<div class="row-dialog clearfix"><div class="input-box add-department-name-content"><input id="rename-department-name" class="add-department-name vf-required vf-input-length" data-min="1" data-max="50" value="' + oldName + '"></div></div>')
                    renameDepartmentWin.bindEvent(function () {
                        $('#' + renameDepartmentWin.alertId + ' .confirm').click(function () {
                            var self = this;
                            //错误检测
                            if($('#' + renameDepartmentWin.alertId).find('.error').length != 0){
                                return
                            }

                            //获取新姓名
                            var newDepartmentName = $('#' + renameDepartmentWin.alertId + ' .add-department-name').val();

                            var allAlreadyName = [];
                            $('.department-name').each(function () {
                                allAlreadyName.push($(this).html());
                            });

                            //如果与老名一致
                            if( allAlreadyName.indexOf(newDepartmentName) != -1){
                                if(oldName != newDepartmentName){
                                    showError($('#rename-department-name'),'rename','部门名称已存在')
                                    return;
                                }else{
                                    renameDepartmentWin.rmThis();
                                    return;
                                }
                            }

                            forbiddenResubmit.begin(self);
                            //ajax发送信息
                            $.ajax({
                                type: "post",
                                url: "/company/ajax-rename-department.html",
                                data: {
                                    'department_id': rename_id,
                                    'name': newDepartmentName,
                                },
                                success: function (reply) {
                                    forbiddenResubmit.end(self);
                                    if(!reply.status){
                                        remind('error',reply.message);
                                        return;
                                    }else{
                                        remind('success',reply.message);
                                    }

                                    //重命名节点
                                    t.renameNode(rename_id,newDepartmentName);
                                    renameDepartmentWin.rmThis();
                                }
                            })
                        })
                    })
                    return false;
                });

                    //删除部门
                $(t.popWinId).on('click' , list + ' .department-delete' , function () {
                    var $t = $(this);
                    var $tUl = $t.parent('span').parent('.add-function').parent('li').parent('ul');
                    var delete_id = $tUl.attr('department-id');

                    //弹出确定窗口
                    var deleteDepartmentWin = new Dialog('delete-department-win','删除部门',{'bottomBtn':{'confirm btn': '确认','cancel btn': '取消'}})
                    deleteDepartmentWin.appendDom('<div class="middle-text">确定删除部门?</div>');
                    deleteDepartmentWin.bindEvent(function () {
                        $('#' + deleteDepartmentWin.alertId + ' .confirm').click(function () {
                            var self = this;
                            forbiddenResubmit.begin(self);
                            $.ajax({
                                type: "post",
                                url: "/company/ajax-delete-department.html",
                                data: {
                                    'department_id': delete_id,
                                },
                                success: function (reply) {
                                    forbiddenResubmit.end(self);

                                    if(!reply.status){
                                        remind('error',reply.message);
                                        return
                                    }else{
                                        remind('success',reply.message);
                                    }
                                    t.deleteNode(delete_id);
                                    deleteDepartmentWin.rmThis();
                                }
                            })
                        })
                    })
                    return false;
                })

                //点击部门获取员工
                $(t.popWinId).on('click','#department-list li', function () {
                    var $t = $(this);
                    //待分配屏蔽掉
                    if($t.find('.department-name').length == 0){
                        //如果也没有待分配,则彻底屏蔽;
                        if($t.find('.left-employee-conut').length == 0){
                            return
                        }
                        $.ajax({
                            type: "post",
                            url: "/company/ajax-get-no-department-employees.html",
                            data: {},
                            success: function (reply) {
                                if (reply.status == true) {
                                    t.buildEmployeeList(reply.data.employees,'待分配');
                                }
                            }
                        })


                        return;
                    }
                    var department_name = $t.find('.department-name').html();
                    var department_id = $t.parent('ul').attr('department-id');
                    t.getEmployee(department_id,department_name);
                })


                //添加admin联想输入
                lenovoInput('.add-admin-btn .admin-lenovo','/employee/ajax-search-employee.html');

                //联想输入控制
                $(t.popWinId).on('click','.add-admin-btn',function(){
                    var $t = $(this);
                    var $lenovo_box = $t.find('.admin-lenovo');
                    //先全部隐藏
                    $('.admin-lenovo').hide();
                    //再只有当前显示
                    $lenovo_box.show();
                })

                //点击li设置负责人
                $(t.popWinId).on('click','.add-admin-btn .search-list-li', function () {
                    var $t = $(this);
                    var employeeId = $t.attr('data-employee-id');
                    var employeeName = $t.find('.employeeNameCont').html();
                    var $lenovoBox = $t.parent('.search-list').parent('.search-list-out').parent('.admin-lenovo');
                    var $paLi = $t.parent('.search-list').parent('.search-list-out').parent('.admin-lenovo').parent('.add-admin-btn').parent('li');
                    var $target = $paLi.find('.admin-info');
                    var department_id = $paLi.parent('ul').attr('data-id');

                    var addAdminWin = new Dialog('add-admin-win','添加部门负责人',{'bottomBtn':{'confirm btn':'确定','cancel btn':'取消'}})
                    addAdminWin.appendDom('<div class="middle-text">确定添加' + employeeName + '为部门负责人?</div>');
                    addAdminWin.bindEvent(function () {
                        $('#'+ addAdminWin.alertId + ' .confirm').click(function(){
                            var self = this;
                            forbiddenResubmit.begin(self);
                            $.ajax({
                                url: '/company/ajax-set-department-admin.html',
                                type: 'post',
                                data: {
                                    'department_id':department_id,
                                    'admin_id':employeeId,
                                },
                                success: function (reply) {
                                    forbiddenResubmit.end(self);

                                    if(!reply.status){
                                        remind('error',reply.message);
                                        return
                                    }else{
                                        remind('success',reply.message);
                                    };

                                    $target.text(employeeName);
                                    $lenovoBox.hide();

                                    //更换按钮
                                    var tmpBtnContent = '<i class="icon icon-delete3"></i>'
                                    $paLi.find('.node-admin-btn').removeClass('add-admin-btn').addClass('delete-admin-btn').html(tmpBtnContent)
                                    addAdminWin.rmThis();
                                }
                            })
                        })
                    })
                })

                //删除负责人
                $(t.popWinId).on('click','.delete-admin-btn',function(){
                    var $t = $(this);
                    var department_id = $t.parent('li').parent('ul').attr('data-id');
                    var $target = $t.parent('li').find('.admin-info');
                    var deleteAdminWin = new Dialog('delete-admin-win','删除部门负责人',{'bottomBtn':{'confirm btn':'确定','cancel btn':'取消'}});

                    //所有联想输入先关闭
                    $('.admin-lenovo').hide();


                    deleteAdminWin.appendDom('<div class="middle-text">是否确定删除部门负责人?</div>');
                    deleteAdminWin.bindEvent(function () {
                        $('#' + deleteAdminWin.alertId + ' .confirm').click(function () {
                            var self = this;
                            forbiddenResubmit.begin(self);

                            $.ajax({
                                url: '/company/ajax-delete-department-admin.html',
                                type: 'post',
                                data: {
                                    'department_id':department_id,
                                },
                                success: function (reply) {
                                    forbiddenResubmit.end(self);
                                    if(!reply.status){
                                        remind('error',reply.message);
                                        return;
                                    }else{
                                        remind('success',reply.message);
                                    }

                                    //更换按钮
                                    var lenovoHtml = [
                                        '<div class="search-list-out">',
                                        '<i class="icon icon-search"></i>',
                                        '<input placeholder="" class="search-input" type="text">',
                                        '<ul class="search-list"></ul>',
                                        '</div>'
                                    ].join("");
                                    var tmpBtnContent = '<i class="icon icon-add3"></i>'
                                    $t.removeClass('delete-admin-btn').addClass('add-admin-btn').html(tmpBtnContent)

                                    //更换内容
                                    $target.text('(负责人空缺)')
                                    deleteAdminWin.rmThis();
                                }
                            })
                        })
                    })
                })

                //鼠标移除隐藏联想输入框
                $(t.popWinId).on('mouseleave','.node-admin-btn',function () {
                    var $t = $(this);
                    $t.find('.admin-lenovo').hide();
                })




                //滚动条
                //$(t.treePaDom).mCustomScrollbar({
                //    autoHideScrollbar:true,
                //    theme:'dark-thin',
                //    axis: "yx",
                //    alwaysShowScrollbar: 1
                //});

                //$(t.employeeListPaDom).mCustomScrollbar({
                //    autoHideScrollbar:true,
                //    theme:'dark-thin',
                //    live: "on",
                //    //alwaysShowScrollbar: 1
                //});
                //$(t.departmentListPaDom).mCustomScrollbar({
                //    autoHideScrollbar:true,
                //    theme:'dark-thin',
                //    //alwaysShowScrollbar: 1
                //});



            },
        }

        //建立树状图与右边列表
        var theController = new DepartmentStructureController(TreeData);
    }

