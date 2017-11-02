export class Action {
  constructor (public name: string, public place: string, public date: Date,
               public startInterval: Date, public endInterval: Date, public time: string) {}
}
