import { Component, OnInit } from '@angular/core';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { GetployeersService } from 'app/shared/services/geteployeers.service'
import { isNullOrUndefined, isUndefined } from "util";
const actionMapping: IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_SELECTED_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_SELECTED(tree, node, $event)
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};

@Component({
  selector: 'app-fulltree',
  templateUrl: './fulltree.component.html',
  styleUrls: ['./fulltree.component.sass']
})
export class FulltreeComponent implements OnInit {
  // nodes2: any[];
  base_nodes: Array<any> = [{ name: 'root', children: [{ name: 'root1' }] }];
  load_nodes: Array<any> = [{ name: 'root_load', children: [{ name: 'root1_load' }] }];
  nodes: Array<any> = [];

  constructor(private getEmployeer: GetployeersService) {

  }

  ngOnInit() {
    this.nodes = this.base_nodes;
    // this.loadData();
    // console.log('МАССИВ ДЛЯ ПОСТРОЕНИЯ', this.nodes);
    // setTimeout(() => {
    //   this.nodes2 = [
    //     {
    //       expanded: true,
    //       name: 'root expanded',
    //       subTitle: 'the root',
    //       children: [
    //         {
    //           name: 'child1',
    //           subTitle: 'a good child',
    //           hasChildren: false
    //         }, {
    //           name: 'child2',
    //           subTitle: 'a bad child',
    //           hasChildren: false
    //         }
    //       ]
    //     },
    //     {
    //       name: 'root2',
    //       subTitle: 'the second root',
    //       children: [
    //         {
    //           name: 'child2.1',
    //           subTitle: 'new and improved',
    //           uuid: '11',
    //           hasChildren: false
    //         }, {
    //           name: 'child2.2',
    //           subTitle: 'new and improved2',
    //           children: [
    //             {
    //               uuid: 1001,
    //               name: 'subsub',
    //               subTitle: 'subsub',
    //               hasChildren: false
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       name: 'asyncroot',
    //       hasChildren: true
    //     }];
    //
    //
    //   for (let i = 0; i < 4; i++) {
    //     this.nodes2.push({
    //       name: `rootDynamic${i}`,
    //       subTitle: `root created dynamically ${i}`,
    //       children: new Array((i + 1) * 100).fill(null).map((item, n) => ({
    //         name: `childDynamic${i}.${n}`,
    //         subTitle: `child created dynamically ${i}`,
    //         hasChildren: false
    //       }))
    //     });
    //   }
    // }, 1);
  }

  loadNewNodes(){
    this.nodes = this.load_nodes;
  }

  asyncChildren = [
    {
      name: 'child2.1',
      subTitle: 'new and improved'
    }, {
      name: 'child2.2',
      subTitle: 'new and improved2'
    }
  ];

  loadData() {
    this.getEmployeer.getSelf()
      .subscribe((EmployeesOfUser) => {
        function getMoreChildren(arr: any) {
          let brr = [];
          if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
              if (arr.length == 0) {
                continue
              }
              brr.push({ name: arr[i].first_name, children: getMoreChildren(arr[i].children) });
            }
          }
          return brr
        }

        this.nodes.push({ name: EmployeesOfUser.node.first_name, children: getMoreChildren(EmployeesOfUser.children) });
        console.log('ВЫХОД', this.nodes);
        // console.log('ДОЛЖНО БЫТЬ', this.nodes2);
      })
  }


  getChildren(node: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.asyncChildren.map((c) => {
        return Object.assign({}, c, {
          hasChildren: node.level < 5
        });
      })), 1000);
    });
  }

  addNode(tree) {
    this.nodes[0].children.push({

      name: 'a new child'
    });
    tree.treeModel.update();
  }

  childrenCount(node: TreeNode): string {
    return node && node.children ? `(${node.children.length})` : '';
  }

  filterNodes(text, tree) {
    tree.treeModel.filterNodes(text);
  }

  activateSubSub(tree) {
    // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
    tree.treeModel.getNodeById(1001)
      .setActiveAndVisible();
  }

  customTemplateStringOptions: ITreeOptions = {
    // displayField: 'subTitle',
    isExpandedField: 'expanded',
    idField: 'uuid',
    getChildren: this.getChildren.bind(this),
    actionMapping,
    nodeHeight: 23,
    allowDrag: (node) => {
      // console.log('allowDrag?');
      return true;
    },
    allowDrop: (node) => {
      // console.log('allowDrop?');
      return true;
    },
    useVirtualScroll: true,
    animateExpand: true,
    animateSpeed: 30,
    animateAcceleration: 1.2
  }

  onEvent(event) {
    console.log(event);
  }

  //
  onInitialized(tree) {
    // tree.treeModel.getNodeById('11').setActiveAndVisible();
  }

  go($event) {
    $event.stopPropagation();
    alert('this method is on the app component');
  }

  activeNodes(treeModel) {
    console.log(treeModel.activeNodes);
  }


}
