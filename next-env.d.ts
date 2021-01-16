/// <reference types="next" />
/// <reference types="next/types/global" />

interface DummyApiResquestedForm<T extends DummyApiForm> {
    data: T[];
    limit: number;
    offset: number;
    page: number;
    total: number;
}

interface DummyApiForm {}

interface PostApiForm extends DummyApiForm {
    id: string;
    text: string;
    image: string;
    likes: string;
    link: string;
    tags: string[];
    publishDate: string;
    owner: UserApiForm;
}

interface UserApiForm extends DummyApiForm {
    id: string;
    title: "mr" | "ms" | "mrs" | "miss" | "dr" | "";
    firstName: string;
    lastName: string;
    gender?: "male" | "female" | "other" | "";
    email: string;
    dateOfBirth?: string;
    registerDate?: string;
    phone?: string;
    picture: string;
    location?: LocationApiForm;
}

interface LocationApiForm extends DummyApiForm {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
}

interface CommentApiForm extends DummyApiForm {
    id: string;
    message: string;
    owner: UserApiForm;
    publishDate: string;
}