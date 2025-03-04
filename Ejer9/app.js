const imagen1 = 'https://picsum.photos/800/400?random=1';
const imagen2 = 'https://picsum.photos/800/400?random=2';

const bannerImage = document.getElementById('bannerImage');

bannerImage.addEventListener('mouseover', () => {
    bannerImage.src = imagen2;
});

bannerImage.addEventListener('mouseout', () => {
    bannerImage.src = imagen1;
});
