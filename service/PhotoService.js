export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'https://primevue.org/images/galleria/galleria1.jpg',
                type:'illustration',
                alt: 'Description for Image 1',
                title: 'Title 1',
                grow:3,
            },
            {
                itemImageSrc: 'https://primevue.org/images/galleria/galleria2.jpg',
                type:'app',
                alt: 'Description for Image 2',
                title: 'Title 2',
                grow:2,
            },
            {
                itemImageSrc: 'https://primevue.org/images/galleria/galleria3.jpg',
                type:'illustration',
                alt: 'Description for Image 3',
                title: 'Title 3',
                grow: 2,
            },
            {
                itemImageSrc: 'https://primevue.org/images/galleria/galleria4.jpg',
                type:'illustration',
                alt: 'Description for Image 4',
                title: 'Title 4',
                grow: 2,
            },
            {
                itemImageSrc: 'https://primevue.org/images/galleria/galleria5.jpg',
                type:'branding',
                alt: 'Description for Image 5',
                title: 'Title 5',
                grow: 3,
            },
            {
                itemImageSrc: 'https://primevue.org/images/galleria/galleria6.jpg',
                type:'branding',
                alt: 'Description for Image 6',
                title: 'Title 6',
                grow: 4,
            },
            
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

