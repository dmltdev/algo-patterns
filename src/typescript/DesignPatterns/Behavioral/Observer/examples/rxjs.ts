import { Subject } from "rxjs";

const news = new Subject();

const tv1 = news.subscribe((v) => console.log(v + "via Den TV"));
const tv2 = news.subscribe((v) => console.log(v + "via Batcane TV"));
const tv3 = news.subscribe((v) => console.log(v + "via Airport TV"));

// check console
news.next("Breaking news: ");
news.next("The war is over ");