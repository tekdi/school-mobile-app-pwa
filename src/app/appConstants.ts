export interface HeaderConfig {
    showHeader: boolean,
    pageTitle: String,
    showbackButton: boolean,
    actionButtons: Array<string>
}

export class PlayerType {
    static PDF = "application/pdf";
    static MP4 = "video/mp4";
    static YOUTUBE = "video/x-youtube";
    static AUDIO = "audio/mp3";
    static WEBM = "video/webm";
}


export const dbinfo = {
    dbName: 'digital_jaddu_pitara.db',
    version: 3
}

export class PageId {
    static HOME = 'djp.app.home';
}

export class DbConstants {
    static DATE_TYPE = 'DATE';
    static TEXT_TYPE = 'TEXT';
    static INT_TYPE = 'INTEGER';
    static REAL_TYPE = 'REAL';
    static COMMA_SEP = ',';
    static SPACE = ' ';
    static MAX_NUM_OF_EVENTS = 1000;
    static MAX_NUM_OF_PROCESSED_EVENTS = 1;
    static ERROR = 'DB_ERROR';
    static BLOB_TYPE = 'BLOB';
    static NOT_NULL = 'NOT NULL';
    static NULL = 'NULL';
}

export interface Config {
    pageConfig: Array<PageConfig>,
    languages: Language[];
    notification: {
        android: Notification
    };
}

export interface PageConfig {
    pageId: string,
    defaultFilter: {
        id: string,
        label: string,
        query: any,
        filters: any,
    },
    additionalFilters: Array<Filter>
}

export interface Filter {
    id: string,
    label: string,
    query: any,
    filters: any,
    index: number,
}

export interface Language {
    id: string,
    label: string,
    default: boolean
}

export interface Notification {
    id: number,
    title: string,
    body: string,
    extra: string,
    largeIcon?: string,
    smallIcon?: string,
    schedule: {
        on: {
            year?: number;
            month?: number;
            day?: number;
            weekday?: Weekday;
            hour?: number;
            minute?: number;
            second?: number;
        },
        repeats: boolean,
        every: 'year' | 'month' | 'two-weeks' | 'week' | 'day' | 'hour' | 'minute' | 'second',
        allowWhileIdle: boolean
    }
}
export declare enum Weekday {
    Sunday = 1,
    Monday = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thursday = 5,
    Friday = 6,
    Saturday = 7
}

export interface Content {
    source: string;
    sourceType: string;
    metaData: ContentMetaData;
    play: boolean;
}

// export interface ContentMetaData {
//     context: Context;
//     message: Message;
// }


export interface ContentMetaData {
    identifier: string;
    name: string;
    thumbnail: string;
    description: string;
    mimetype: string;
    url: string;
    domain: string,
    curriculargoal: null,
    competencies: null,
    language: string,
    category: string,
    audience: Array<any>,
    focus: string;
    keyword: any;
    status: string,
    createdon: string,
    lastupdatedon: string,
    media?: Array<any>,
    isLiked?: boolean
}

export interface Searchrequest {
    request: {
        pageId: string,
        query: any,
        filters: any
    }
}

export interface sourceConfig {
    sourceType: string,
    sourceName: string,
    baseURL: string,
    sbVersion: string,
    searchCriteria: {
        filters: {
            keywords: Array<any>,
            primaryCategory: Array<any>,
            mimeType: Array<string>
        },
        sort_by: {
            lastPublishedOn: string
        }
    }
}

export class MimeType {
    public static readonly COLLECTION = 'application/vnd.ekstep.content-collection';
    public static readonly VIDEO = 'video/mp4';
    public static readonly VIDEOS = ['video/mp4', 'video/webm', 'video/x-m4v', 'video/quicktime'];
    public static readonly PDF = 'application/pdf';
    public static readonly AUDIOS = 'audio/mp3';
    public static readonly RECOEDED_AUDIO = 'audio/wav';
    public static readonly AUDIO = ['audio/mp3', 'audio/mp4', 'audio/mpeg', 'audio/ogg', 'audio/webm', 'audio/x-wav', 'audio/wav'];
    public static readonly INTERACTION = ['application/vnd.ekstep.ecml-archive', 'application/vnd.ekstep.html-archive',
        'application/vnd.android.package-archive', 'application/vnd.ekstep.content-archive',
        'application/vnd.ekstep.plugin-archive', 'application/vnd.ekstep.h5p-archive'];
    public static readonly DOCS = ['application/pdf', 'application/epub', 'application/msword'];
    public static readonly ALL = ['video/mp4', 'video/x-youtube', 'video/webm', 'application/pdf', 'application/epub',
        'application/pdf', 'application/epub', 'application/vnd.ekstep.ecml-archive', 'application/vnd.ekstep.h5p-archive',
        'application/vnd.ekstep.html-archive'
    ];
    public static readonly YOUTUBE = "video/x-youtube"
}

export const regDiksha = [{
    "name": "content deatil",
    "code": "contentDetail",
    "pattern": "(?:/(?:resources/play/content|play/content|play/quiz)/(?<quizId>\\w+))",
    "route": "content-details"
},
{
    "name": "Textbook content detail",
    "code": "textbookContentDetail",
    "pattern": "(?:/play/(?:collection)/(?<content_id>\\w+)\\?(?=.*\\bcontentId\\b=(?<contentId>([^&]*)).*))",
    "route": "collection-detail-etb",
    "priority": 1
},
{
    "name": "Course Detail",
    "code": "courseDetail",
    "pattern": "(?:/(?:explore-course|learn)/course/(?<course_id>\\w+))",
    "route": "enrolled-course-details",
    "priority": 3
}]

export enum TrackingEnabled {
    YES = "Yes",
    NO = "No"
}

export enum ContentType {
    COURSE = "Course",
    COURSE_UNIT = "CourseUnit",
    E_TEXTBOOK = "eTextBook",
    EXPLANATION_RESOURCE = "ExplanationResource",
    EXPLANATION_VIDEO = "Explanation Video",
    TEXTBOOK = "TextBook",
    TEXTBOOK_UNIT = "TextBookUnit",
    COLLECTION = "Collection",
    TV_LESSION = "TVLesson",
    RESOURCE = "Resource"
}

export const sidebarMenuItems = [
    "All",
    "Make a Story",
    "Ask a doubt",
    "Parents",
    "Teachers",
    "Divyang",
    "Tribal",
    "Lullabies",
    "Games"
]

export interface BotMessage {
    identifier: string;
    message: string;
    messageType: string;
    displayMsg: string;
    audio?: any;
    type: string;
    time: string;
    timeStamp: any;
    readMore: boolean;
    likeMsg: boolean;
    dislikeMsg: boolean;
    requestId: string;
}

export class Sakhi {
    static TEACHER = 'teacher'
    static STORY = 'story'
    static PARENT = 'parent'
}


interface Context {
    domain: string;
    action: string;
    version: string;
    bap_id: string;
    bap_uri: string;
    location: {
        country: {
            name: string;
            code: string;
        };
        city: {
            name: string;
            code: string;
        };
    };
    transaction_id: string;
    message_id: string;
    timestamp: string;
}

interface Descriptor {
    name: string;
    short_desc?: string;
    long_desc?: string;
    code?: string;
    competency?: string;
    contentType?: string;
    domain?: string;
    goal?: string;
    language?: string;
    link?: string;
    sourceOrganisation?: string;
    themes?: string;
    title?: string;
    minAge?: number | null;
    maxAge?: number | null;
    author?: string | null;
    learningOutcomes?: string | null;
    category?: string | null;
    persona?: string | null;
    license?: string | null;
    conditions?: string | null;
    createdAt?: string;
    updatedAt?: string;
    urlType?: string | null;
    images: any[]; // Adjust type if needed
    media: any[]; // Adjust type if needed
}

interface Creator {
    descriptor: {
        name: string;
        short_desc: string;
        long_desc: string;
        images: any[]; // Adjust type if needed
    };
}

interface Quantity {
    maximum: {
        count: number;
    };
}

interface Price {
    currency: string;
    value: string;
}

interface Tag {
    descriptor: {
        name: string;
    };
    value: string;
}

interface Fulfillment {
    agent: {
        person: {
            name: string;
        };
        contact: {
            email: string;
        };
    };
}

interface Item {
    id: string;
    quantity: Quantity;
    descriptor: Descriptor;
    creator: Creator;
    price: Price;
    category_ids: string[];
    rating: string;
    rateable: boolean;
    tags: Tag[];
    fulfillments: Fulfillment[];
}

interface Provider {
    id: string;
    descriptor: {
        name: string;
        short_desc: string;
    };
    categories: any[]; // Adjust type if needed
    items: [{
        id: string;
        quantity: Quantity;
        descriptor: Descriptor;
        creator: Creator;
        price: Price;
        category_ids: string[];
        rating: string;
        rateable: boolean;
        tags: Tag[];
        fulfillments: Fulfillment[];
    }
    ];
}

interface Catalog {
    descriptor: {
        name: string;
    };
    providers: Provider[];
}

interface Message {
    catalog: Catalog;
}

export interface ContentMetaData1 {
    context: Context;
    message: {
        catalog: {
            descriptor: {
                name: string;
            };
            providers: Provider[];
        };
    };
}

