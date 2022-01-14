/*
 * @Author: liming
 * @Date: 2022-01-14 11:13:45
 * @LastEditTime: 2022-01-14 11:36:00
 * @FilePath: \vue2addts\src\components\data\ComponentsProps.ts
 */

//- ?:可选类型
//- type xxx表示自定义类型
export type PropMap = { key?: string;value?: string };

export interface IC3r2Model { 
    desc?: string | null | undefined;
    title?: string | null | undefined;
    icon?: any;
    stylus?:any
}

export class c3r2Model { 
    left?: IC3r2Model;
    middle?: IC3r2Model;
    right?: IC3r2Model;
}
