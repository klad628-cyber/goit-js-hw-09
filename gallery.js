import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as t}from"./assets/vendor-8mfdaUxg.js";const i=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2020/09/21/15/17/landscape-5591835__480.jpg",original:"https://cdn.pixabay.com/photo/2020/09/21/15/17/landscape-5591835_1280.jpg",description:"Aerial view of mountains"},{preview:"https://cdn.pixabay.com/photo/2017/07/24/22/41/forest-2535884__480.jpg",original:"https://cdn.pixabay.com/photo/2017/07/24/22/41/forest-2535884_1280.jpg",description:"Forest path at sunrise"},{preview:"https://cdn.pixabay.com/photo/2018/03/29/15/28/sky-3271334__480.jpg",original:"https://cdn.pixabay.com/photo/2018/03/29/15/28/sky-3271334_1280.jpg",description:"Bright sky over the sea"},{preview:"https://cdn.pixabay.com/photo/2016/11/14/22/18/sea-1825450__480.jpg",original:"https://cdn.pixabay.com/photo/2016/11/14/22/18/sea-1825450_1280.jpg",description:"Ocean waves at sunset"},{preview:"https://cdn.pixabay.com/photo/2017/04/24/15/51/lake-2256498__480.jpg",original:"https://cdn.pixabay.com/photo/2017/04/24/15/51/lake-2256498_1280.jpg",description:"Mountain lake reflection"}],a=document.querySelector(".gallery"),p=i.map(o=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o.original}">
          <img
            class="gallery-image"
            src="${o.preview}"
            alt="${o.description}"
          />
        </a>
      </li>
    `).join("");a.insertAdjacentHTML("beforeend",p);const e=new t(".gallery a",{captions:!0,captionPosition:"bottom",captionDelay:250,captionsData:"alt"});e.refresh();
//# sourceMappingURL=gallery.js.map
