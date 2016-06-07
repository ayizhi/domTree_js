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
                    "admin_id": "0",
                    "admin_name": "",
                    "name": "测试一部2",
                    "parent_id": "d461b77bc762411e8ca7d886e796ea5c",
                    "employee_count": 1,
                    "children_ids": ['ae627ddfa006473a93574bcc322e4daas'],
                    "children": [
                        {
                            "children": [
                                {
                                    "id": "ae627ddfa006473a93574bcc322e4dasfds",
                                    "admin_id": "0",
                                    "admin_name": "",
                                    "name": "那几句话关键是2",
                                    "parent_id": "7b84d91891de464e807d50bb0ad7619c",
                                    "employee_count": 2,
                                    "children_ids": [
                                        "0db513c2c18d4be6a4e97cbb3dc5c5342",
                                        "0db513c2c18d4be6a4e97cbb3dc5c4521"
                                    ],
                                    "children": [
                                        {
                                            "id": "0db513c2c18d4be6a4e97cbb3dc5c5342",
                                            "admin_id": "0",
                                            "admin_name": "",
                                            "name": "三2",
                                            "parent_id": "ae627ddfa006473a93574bcc322e4dasfds",
                                            "employee_count": 0,
                                            "children_ids": []
                                        },
                                        {
                                            "id": "0db513c2c18d4be6a4e97cbb3dc5c4521",
                                            "admin_id": "0",
                                            "admin_name": "",
                                            "name": "四2",
                                            "parent_id": "ae627ddfa006473a93574bcc322e4dasfds",
                                            "employee_count": 0,
                                            "children_ids": []
                                        }
                                    ]
                                }
                            ],
                            "id": "7ffceb278dae4ab69d28b208f663a8ffa",
                            "admin_id": "0",
                            "admin_name": "",
                            "name": "研发2",
                            "parent_id": "50acb522701848488f726a3d7cb3dc9a",
                            "employee_count": 0,
                            "children_ids": [
                                "ae627ddfa006473a93574bcc322e4dad"
                            ]
                        }
                    ]

                }
            ]
        },
        "leftEmployeeCount": 14
    }
}

var treeHtml = makeTreeHtml(TreeData.data.departmentStructure)

function makeTreeHtml(data){
    var tmpHtml = '<ul>';

    iterator(data)

    function iterator(data){
        var id = data.id;
        var name = data.name;
        var children = data.children;

        tmpHtml += '<ul><li>' + name + '</li>'


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

    tmpHtml += '</ul>'
    return tmpHtml
}



console.log(treeHtml)