export class Action {
  constructor (
    public eventName: string,
    public addressOfEvent: any,
    public addressLatitude: number,
    public addressLongitude: number,
    public exactDate: string,
    public startTime: string,
    public finishTime: string,
    public eventStartInterval: any,
    public eventFinishInterval: any,
    public citizenName: string,
    public citizenPhoto: any,
    public companyName: string,
    public companyLogo: string,
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
    public personToContact: string,
    public placePicture: any,
    public meetingPlace: any,
    public meetingPlaceLatitude: number,
    public meetingPlaceLongitude: number,
    public getToPlace: string,
    public whatToDo: string,
    public equipment: string,
    public  minPeople: number,
    public maxPeople: number,
    public smthElse: string,
  ) {}
}
