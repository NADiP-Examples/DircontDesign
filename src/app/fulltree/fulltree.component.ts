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
    this.loadData();
  }

  loadNewNodes() {
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
      .map((employees) => {
        //  Вот тут конвертируем данные в нужный формат
        let nodes = [];
        let node = {name: employees.node.first_name, children: []};
        // выгребаем только прямых потомков, для начала
        for (let child of employees.children){
          let child_node = {name: child.first_name};
          node.children.push(child_node);
        }
        nodes.push(node);
        return nodes
      })
      .subscribe((employees) => {
        console.log("load employees = ", employees);
        // Отображаем дерево только с прямыми потомками
        this.nodes = employees;
        // Ура! Работает!
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
