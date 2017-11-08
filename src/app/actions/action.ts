export class Action {
  constructor (
    // public name: string, public place: string, public date: Date,
    //            public startInterval: Date, public endInterval: Date, public time: string
    public eventName: string,
    public exactDate: string,
    public startTime: string,
    public finishTime: string,
    public eventStartInterval: any,
    public eventFinishInterval: any,
    public citizenName: string,
    public companyName: string,
    public telNumberPrime: number,
    public telNumberAdd1: number,
    public telNumberAdd2: number,
    public usersEmail: string,
    public sitePrime: string,
    public siteAdd1: string,
    public siteAdd2: string,
    public siteAdd3: string,
    public siteAdd4: string,
    public aboutEvent: string,
    public personToContact: string
  ) {}
}
