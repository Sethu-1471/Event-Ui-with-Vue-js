<template>
<!-- Please typing your favorite word!-->
<div id="ui">
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
    <div class="text">Event 2020</div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
#ui .text {
    position: absolute;
    font-size: 8rem;
    color: #fff;
    line-height: 8rem;
    opacity: 0;
    font-family: "Anton", sans-serif;
    transform: translate(-50%, -50%);
    mix-blend-mode: screen;
}

#ui .text:nth-child(1) {
    color: rgba(253, 50, 3, 1);
    clip-path: polygon(0% 0%, 0% 50%, 10% 50%);
    transform-origin: 9% 12%;
    animation: fly1 7000ms 0ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly1 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(450deg) rotateY(-165deg) rotateZ(146deg) translateZ(3006px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(450deg) rotateY(-165deg) rotateZ(146deg) translateZ(3006px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(2) {
    color: rgba(251, 49, 6, 1);
    clip-path: polygon(0% 0%, 10% 0%, 10% 50%);
    transform-origin: 41% 6%;
    animation: fly2 7000ms 40ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly2 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(300deg) rotateY(258deg) rotateZ(176deg) translateZ(3462px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(300deg) rotateY(258deg) rotateZ(176deg) translateZ(3462px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(3) {
    color: rgba(249, 49, 9, 1);
    clip-path: polygon(10% 0%, 10% 50%, 20% 50%);
    transform-origin: -11% 22%;
    animation: fly3 7000ms 80ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly3 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(165deg) rotateY(16deg) rotateZ(148deg) translateZ(1301px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(165deg) rotateY(16deg) rotateZ(148deg) translateZ(1301px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(4) {
    color: rgba(247, 48, 12, 1);
    clip-path: polygon(10% 0%, 20% 0%, 20% 50%);
    transform-origin: -27% -3%;
    animation: fly4 7000ms 120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly4 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(425deg) rotateY(-252deg) rotateZ(258deg) translateZ(1215px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(425deg) rotateY(-252deg) rotateZ(258deg) translateZ(1215px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(5) {
    color: rgba(245, 48, 15, 1);
    clip-path: polygon(20% 0%, 20% 50%, 30% 50%);
    transform-origin: 61% -12%;
    animation: fly5 7000ms 160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly5 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-211deg) rotateY(-185deg) rotateZ(-216deg) translateZ(2422px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-211deg) rotateY(-185deg) rotateZ(-216deg) translateZ(2422px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(6) {
    color: rgba(243, 47, 18, 1);
    clip-path: polygon(20% 0%, 30% 0%, 30% 50%);
    transform-origin: 24% 29%;
    animation: fly6 7000ms 200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly6 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-24deg) rotateY(-173deg) rotateZ(24deg) translateZ(-854px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-24deg) rotateY(-173deg) rotateZ(24deg) translateZ(-854px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(7) {
    color: rgba(241, 47, 21, 1);
    clip-path: polygon(30% 0%, 30% 50%, 40% 50%);
    transform-origin: 52% 48%;
    animation: fly7 7000ms 240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly7 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-499deg) rotateY(419deg) rotateZ(289deg) translateZ(2018px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-499deg) rotateY(419deg) rotateZ(289deg) translateZ(2018px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(8) {
    color: rgba(239, 46, 24, 1);
    clip-path: polygon(30% 0%, 40% 0%, 40% 50%);
    transform-origin: 22% 4%;
    animation: fly8 7000ms 280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly8 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-380deg) rotateY(-426deg) rotateZ(483deg) translateZ(-554px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-380deg) rotateY(-426deg) rotateZ(483deg) translateZ(-554px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(9) {
    color: rgba(237, 46, 27, 1);
    clip-path: polygon(40% 0%, 40% 50%, 50% 50%);
    transform-origin: 22% -23%;
    animation: fly9 7000ms 320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly9 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-265deg) rotateY(-57deg) rotateZ(177deg) translateZ(314px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-265deg) rotateY(-57deg) rotateZ(177deg) translateZ(314px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(10) {
    color: rgba(235, 45, 30, 1);
    clip-path: polygon(40% 0%, 50% 0%, 50% 50%);
    transform-origin: 15% 18%;
    animation: fly10 7000ms 360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly10 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(106deg) rotateY(239deg) rotateZ(-227deg) translateZ(2843px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(106deg) rotateY(239deg) rotateZ(-227deg) translateZ(2843px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(11) {
    color: rgba(233, 45, 33, 1);
    clip-path: polygon(50% 0%, 50% 50%, 60% 50%);
    transform-origin: 28% 38%;
    animation: fly11 7000ms 400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly11 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-218deg) rotateY(-380deg) rotateZ(480deg) translateZ(3413px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-218deg) rotateY(-380deg) rotateZ(480deg) translateZ(3413px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(12) {
    color: rgba(231, 44, 36, 1);
    clip-path: polygon(50% 0%, 60% 0%, 60% 50%);
    transform-origin: 75% 1%;
    animation: fly12 7000ms 440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly12 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-446deg) rotateY(36deg) rotateZ(14deg) translateZ(2692px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-446deg) rotateY(36deg) rotateZ(14deg) translateZ(2692px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(13) {
    color: rgba(229, 44, 39, 1);
    clip-path: polygon(60% 0%, 60% 50%, 70% 50%);
    transform-origin: 35% 21%;
    animation: fly13 7000ms 480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly13 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-169deg) rotateY(-57deg) rotateZ(491deg) translateZ(-490px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-169deg) rotateY(-57deg) rotateZ(491deg) translateZ(-490px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(14) {
    color: rgba(227, 43, 42, 1);
    clip-path: polygon(60% 0%, 70% 0%, 70% 50%);
    transform-origin: 52% 41%;
    animation: fly14 7000ms 520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly14 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-11deg) rotateY(-439deg) rotateZ(476deg) translateZ(-1324px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-11deg) rotateY(-439deg) rotateZ(476deg) translateZ(-1324px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(15) {
    color: rgba(225, 43, 45, 1);
    clip-path: polygon(70% 0%, 70% 50%, 80% 50%);
    transform-origin: 74% -25%;
    animation: fly15 7000ms 560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly15 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-460deg) rotateY(-75deg) rotateZ(-47deg) translateZ(2345px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-460deg) rotateY(-75deg) rotateZ(-47deg) translateZ(2345px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(16) {
    color: rgba(223, 42, 48, 1);
    clip-path: polygon(70% 0%, 80% 0%, 80% 50%);
    transform-origin: 50% -5%;
    animation: fly16 7000ms 600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly16 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(66deg) rotateY(-499deg) rotateZ(-406deg) translateZ(-2245px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(66deg) rotateY(-499deg) rotateZ(-406deg) translateZ(-2245px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(17) {
    color: rgba(221, 42, 51, 1);
    clip-path: polygon(80% 0%, 80% 50%, 90% 50%);
    transform-origin: 111% -37%;
    animation: fly17 7000ms 640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly17 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(239deg) rotateY(407deg) rotateZ(-493deg) translateZ(-416px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(239deg) rotateY(407deg) rotateZ(-493deg) translateZ(-416px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(18) {
    color: rgba(219, 41, 54, 1);
    clip-path: polygon(80% 0%, 90% 0%, 90% 50%);
    transform-origin: 39% -16%;
    animation: fly18 7000ms 680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly18 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-367deg) rotateY(220deg) rotateZ(-408deg) translateZ(870px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-367deg) rotateY(220deg) rotateZ(-408deg) translateZ(870px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(19) {
    color: rgba(217, 41, 57, 1);
    clip-path: polygon(90% 0%, 90% 50%, 100% 50%);
    transform-origin: 121% -26%;
    animation: fly19 7000ms 720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly19 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-238deg) rotateY(-295deg) rotateZ(303deg) translateZ(-830px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-238deg) rotateY(-295deg) rotateZ(303deg) translateZ(-830px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(20) {
    color: rgba(215, 40, 60, 1);
    clip-path: polygon(90% 0%, 100% 0%, 100% 50%);
    transform-origin: 78% -43%;
    animation: fly20 7000ms 760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly20 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-121deg) rotateY(118deg) rotateZ(-96deg) translateZ(-593px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-121deg) rotateY(118deg) rotateZ(-96deg) translateZ(-593px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(21) {
    color: rgba(213, 40, 63, 1);
    clip-path: polygon(0% 50%, 0% 100%, 10% 100%);
    transform-origin: 40% 9%;
    animation: fly21 7000ms 800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly21 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-346deg) rotateY(377deg) rotateZ(-439deg) translateZ(598px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-346deg) rotateY(377deg) rotateZ(-439deg) translateZ(598px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(22) {
    color: rgba(211, 39, 66, 1);
    clip-path: polygon(0% 50%, 10% 50%, 10% 100%);
    transform-origin: 24% 7%;
    animation: fly22 7000ms 840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly22 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(232deg) rotateY(436deg) rotateZ(42deg) translateZ(2000px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(232deg) rotateY(436deg) rotateZ(42deg) translateZ(2000px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(23) {
    color: rgba(209, 39, 69, 1);
    clip-path: polygon(10% 50%, 10% 100%, 20% 100%);
    transform-origin: 0% 3%;
    animation: fly23 7000ms 880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly23 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(0deg) rotateY(-16deg) rotateZ(32deg) translateZ(2289px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(0deg) rotateY(-16deg) rotateZ(32deg) translateZ(2289px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(24) {
    color: rgba(207, 38, 72, 1);
    clip-path: polygon(10% 50%, 20% 50%, 20% 100%);
    transform-origin: 44% 28%;
    animation: fly24 7000ms 920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly24 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-341deg) rotateY(-212deg) rotateZ(-368deg) translateZ(-332px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-341deg) rotateY(-212deg) rotateZ(-368deg) translateZ(-332px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(25) {
    color: rgba(205, 38, 75, 1);
    clip-path: polygon(20% 50%, 20% 100%, 30% 100%);
    transform-origin: -27% 42%;
    animation: fly25 7000ms 960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly25 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(129deg) rotateY(158deg) rotateZ(-177deg) translateZ(2361px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(129deg) rotateY(158deg) rotateZ(-177deg) translateZ(2361px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(26) {
    color: rgba(203, 37, 78, 1);
    clip-path: polygon(20% 50%, 30% 50%, 30% 100%);
    transform-origin: 40% 8%;
    animation: fly26 7000ms 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly26 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(431deg) rotateY(433deg) rotateZ(32deg) translateZ(851px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(431deg) rotateY(433deg) rotateZ(32deg) translateZ(851px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(27) {
    color: rgba(201, 37, 81, 1);
    clip-path: polygon(30% 50%, 30% 100%, 40% 100%);
    transform-origin: 72% 61%;
    animation: fly27 7000ms 1040ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly27 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-132deg) rotateY(485deg) rotateZ(-276deg) translateZ(-1657px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-132deg) rotateY(485deg) rotateZ(-276deg) translateZ(-1657px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(28) {
    color: rgba(199, 36, 84, 1);
    clip-path: polygon(30% 50%, 40% 50%, 40% 100%);
    transform-origin: -9% 40%;
    animation: fly28 7000ms 1080ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly28 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(276deg) rotateY(497deg) rotateZ(342deg) translateZ(2390px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(276deg) rotateY(497deg) rotateZ(342deg) translateZ(2390px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(29) {
    color: rgba(197, 36, 87, 1);
    clip-path: polygon(40% 50%, 40% 100%, 50% 100%);
    transform-origin: 63% 68%;
    animation: fly29 7000ms 1120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly29 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-79deg) rotateY(190deg) rotateZ(474deg) translateZ(2841px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-79deg) rotateY(190deg) rotateZ(474deg) translateZ(2841px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(30) {
    color: rgba(195, 35, 90, 1);
    clip-path: polygon(40% 50%, 50% 50%, 50% 100%);
    transform-origin: 7% 70%;
    animation: fly30 7000ms 1160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly30 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(165deg) rotateY(125deg) rotateZ(245deg) translateZ(1542px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(165deg) rotateY(125deg) rotateZ(245deg) translateZ(1542px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(31) {
    color: rgba(193, 35, 93, 1);
    clip-path: polygon(50% 50%, 50% 100%, 60% 100%);
    transform-origin: 17% 54%;
    animation: fly31 7000ms 1200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly31 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-117deg) rotateY(315deg) rotateZ(-226deg) translateZ(2225px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-117deg) rotateY(315deg) rotateZ(-226deg) translateZ(2225px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(32) {
    color: rgba(191, 34, 96, 1);
    clip-path: polygon(50% 50%, 60% 50%, 60% 100%);
    transform-origin: 29% 79%;
    animation: fly32 7000ms 1240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly32 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(279deg) rotateY(428deg) rotateZ(397deg) translateZ(2393px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(279deg) rotateY(428deg) rotateZ(397deg) translateZ(2393px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(33) {
    color: rgba(189, 34, 99, 1);
    clip-path: polygon(60% 50%, 60% 100%, 70% 100%);
    transform-origin: 46% 59%;
    animation: fly33 7000ms 1280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly33 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-357deg) rotateY(161deg) rotateZ(203deg) translateZ(2802px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-357deg) rotateY(161deg) rotateZ(203deg) translateZ(2802px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(34) {
    color: rgba(187, 33, 102, 1);
    clip-path: polygon(60% 50%, 70% 50%, 70% 100%);
    transform-origin: 54% 14%;
    animation: fly34 7000ms 1320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly34 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-358deg) rotateY(-114deg) rotateZ(-60deg) translateZ(-1772px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-358deg) rotateY(-114deg) rotateZ(-60deg) translateZ(-1772px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(35) {
    color: rgba(185, 33, 105, 1);
    clip-path: polygon(70% 50%, 70% 100%, 80% 100%);
    transform-origin: 99% 83%;
    animation: fly35 7000ms 1360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly35 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-90deg) rotateY(-20deg) rotateZ(63deg) translateZ(-1636px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-90deg) rotateY(-20deg) rotateZ(63deg) translateZ(-1636px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(36) {
    color: rgba(183, 32, 108, 1);
    clip-path: polygon(70% 50%, 80% 50%, 80% 100%);
    transform-origin: 66% 79%;
    animation: fly36 7000ms 1400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly36 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(322deg) rotateY(-32deg) rotateZ(-123deg) translateZ(236px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(322deg) rotateY(-32deg) rotateZ(-123deg) translateZ(236px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(37) {
    color: rgba(181, 32, 111, 1);
    clip-path: polygon(80% 50%, 80% 100%, 90% 100%);
    transform-origin: 67% 17%;
    animation: fly37 7000ms 1440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly37 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-478deg) rotateY(-469deg) rotateZ(-486deg) translateZ(-1331px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-478deg) rotateY(-469deg) rotateZ(-486deg) translateZ(-1331px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(38) {
    color: rgba(179, 31, 114, 1);
    clip-path: polygon(80% 50%, 90% 50%, 90% 100%);
    transform-origin: 50% 15%;
    animation: fly38 7000ms 1480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly38 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-380deg) rotateY(-276deg) rotateZ(-441deg) translateZ(2002px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-380deg) rotateY(-276deg) rotateZ(-441deg) translateZ(2002px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(39) {
    color: rgba(177, 31, 117, 1);
    clip-path: polygon(90% 50%, 90% 100%, 100% 100%);
    transform-origin: 138% 46%;
    animation: fly39 7000ms 1520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly39 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-430deg) rotateY(-294deg) rotateZ(-26deg) translateZ(2802px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-430deg) rotateY(-294deg) rotateZ(-26deg) translateZ(2802px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(40) {
    color: rgba(175, 30, 120, 1);
    clip-path: polygon(90% 50%, 100% 50%, 100% 100%);
    transform-origin: 68% 78%;
    animation: fly40 7000ms 1560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly40 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-422deg) rotateY(184deg) rotateZ(358deg) translateZ(2228px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-422deg) rotateY(184deg) rotateZ(358deg) translateZ(2228px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(41) {
    color: rgba(173, 30, 123, 1);
    clip-path: polygon(0% 100%, 0% 150%, 10% 150%);
    transform-origin: -20% 143%;
    animation: fly41 7000ms 1600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly41 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(407deg) rotateY(378deg) rotateZ(-161deg) translateZ(-208px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(407deg) rotateY(378deg) rotateZ(-161deg) translateZ(-208px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(42) {
    color: rgba(171, 29, 126, 1);
    clip-path: polygon(0% 100%, 10% 100%, 10% 150%);
    transform-origin: 12% 120%;
    animation: fly42 7000ms 1640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly42 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(259deg) rotateY(389deg) rotateZ(-203deg) translateZ(-744px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(259deg) rotateY(389deg) rotateZ(-203deg) translateZ(-744px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(43) {
    color: rgba(169, 29, 129, 1);
    clip-path: polygon(10% 100%, 10% 150%, 20% 150%);
    transform-origin: 55% 77%;
    animation: fly43 7000ms 1680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly43 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(456deg) rotateY(-277deg) rotateZ(340deg) translateZ(2166px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(456deg) rotateY(-277deg) rotateZ(340deg) translateZ(2166px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(44) {
    color: rgba(167, 28, 132, 1);
    clip-path: polygon(10% 100%, 20% 100%, 20% 150%);
    transform-origin: -8% 94%;
    animation: fly44 7000ms 1720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly44 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(493deg) rotateY(-266deg) rotateZ(-415deg) translateZ(777px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(493deg) rotateY(-266deg) rotateZ(-415deg) translateZ(777px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(45) {
    color: rgba(165, 28, 135, 1);
    clip-path: polygon(20% 100%, 20% 150%, 30% 150%);
    transform-origin: 37% 81%;
    animation: fly45 7000ms 1760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly45 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(252deg) rotateY(365deg) rotateZ(-30deg) translateZ(2921px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(252deg) rotateY(365deg) rotateZ(-30deg) translateZ(2921px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(46) {
    color: rgba(163, 27, 138, 1);
    clip-path: polygon(20% 100%, 30% 100%, 30% 150%);
    transform-origin: 40% 95%;
    animation: fly46 7000ms 1800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly46 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-49deg) rotateY(-61deg) rotateZ(57deg) translateZ(2432px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-49deg) rotateY(-61deg) rotateZ(57deg) translateZ(2432px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(47) {
    color: rgba(161, 27, 141, 1);
    clip-path: polygon(30% 100%, 30% 150%, 40% 150%);
    transform-origin: 71% 76%;
    animation: fly47 7000ms 1840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly47 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-156deg) rotateY(-130deg) rotateZ(-49deg) translateZ(-2051px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-156deg) rotateY(-130deg) rotateZ(-49deg) translateZ(-2051px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(48) {
    color: rgba(159, 26, 144, 1);
    clip-path: polygon(30% 100%, 40% 100%, 40% 150%);
    transform-origin: 59% 76%;
    animation: fly48 7000ms 1880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly48 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-360deg) rotateY(484deg) rotateZ(-341deg) translateZ(315px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-360deg) rotateY(484deg) rotateZ(-341deg) translateZ(315px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(49) {
    color: rgba(157, 26, 147, 1);
    clip-path: polygon(40% 100%, 40% 150%, 50% 150%);
    transform-origin: 14% 51%;
    animation: fly49 7000ms 1920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly49 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-477deg) rotateY(-92deg) rotateZ(-299deg) translateZ(3399px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-477deg) rotateY(-92deg) rotateZ(-299deg) translateZ(3399px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(50) {
    color: rgba(155, 25, 150, 1);
    clip-path: polygon(40% 100%, 50% 100%, 50% 150%);
    transform-origin: 1% 97%;
    animation: fly50 7000ms 1960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly50 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(163deg) rotateY(-237deg) rotateZ(-327deg) translateZ(-708px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(163deg) rotateY(-237deg) rotateZ(-327deg) translateZ(-708px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(51) {
    color: rgba(153, 25, 153, 1);
    clip-path: polygon(50% 100%, 50% 150%, 60% 150%);
    transform-origin: 6% 99%;
    animation: fly51 7000ms 2000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly51 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-48deg) rotateY(-231deg) rotateZ(-388deg) translateZ(232px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-48deg) rotateY(-231deg) rotateZ(-388deg) translateZ(232px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(52) {
    color: rgba(151, 24, 156, 1);
    clip-path: polygon(50% 100%, 60% 100%, 60% 150%);
    transform-origin: 91% 54%;
    animation: fly52 7000ms 2040ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly52 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-201deg) rotateY(368deg) rotateZ(-257deg) translateZ(1261px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-201deg) rotateY(368deg) rotateZ(-257deg) translateZ(1261px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(53) {
    color: rgba(149, 24, 159, 1);
    clip-path: polygon(60% 100%, 60% 150%, 70% 150%);
    transform-origin: 61% 92%;
    animation: fly53 7000ms 2080ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly53 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(107deg) rotateY(-373deg) rotateZ(383deg) translateZ(3318px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(107deg) rotateY(-373deg) rotateZ(383deg) translateZ(3318px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(54) {
    color: rgba(147, 23, 162, 1);
    clip-path: polygon(60% 100%, 70% 100%, 70% 150%);
    transform-origin: 75% 92%;
    animation: fly54 7000ms 2120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly54 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-312deg) rotateY(-40deg) rotateZ(-270deg) translateZ(-1402px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-312deg) rotateY(-40deg) rotateZ(-270deg) translateZ(-1402px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(55) {
    color: rgba(145, 23, 165, 1);
    clip-path: polygon(70% 100%, 70% 150%, 80% 150%);
    transform-origin: 85% 64%;
    animation: fly55 7000ms 2160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly55 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-378deg) rotateY(-164deg) rotateZ(-497deg) translateZ(-885px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-378deg) rotateY(-164deg) rotateZ(-497deg) translateZ(-885px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(56) {
    color: rgba(143, 22, 168, 1);
    clip-path: polygon(70% 100%, 80% 100%, 80% 150%);
    transform-origin: 44% 141%;
    animation: fly56 7000ms 2200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly56 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(272deg) rotateY(58deg) rotateZ(-244deg) translateZ(966px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(272deg) rotateY(58deg) rotateZ(-244deg) translateZ(966px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(57) {
    color: rgba(141, 22, 171, 1);
    clip-path: polygon(80% 100%, 80% 150%, 90% 150%);
    transform-origin: 60% 124%;
    animation: fly57 7000ms 2240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly57 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(458deg) rotateY(-479deg) rotateZ(-94deg) translateZ(1497px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(458deg) rotateY(-479deg) rotateZ(-94deg) translateZ(1497px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(58) {
    color: rgba(139, 21, 174, 1);
    clip-path: polygon(80% 100%, 90% 100%, 90% 150%);
    transform-origin: 80% 85%;
    animation: fly58 7000ms 2280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly58 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-80deg) rotateY(223deg) rotateZ(37deg) translateZ(1431px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-80deg) rotateY(223deg) rotateZ(37deg) translateZ(1431px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(59) {
    color: rgba(137, 21, 177, 1);
    clip-path: polygon(90% 100%, 90% 150%, 100% 150%);
    transform-origin: 81% 56%;
    animation: fly59 7000ms 2320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly59 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-242deg) rotateY(269deg) rotateZ(319deg) translateZ(3164px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-242deg) rotateY(269deg) rotateZ(319deg) translateZ(3164px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(60) {
    color: rgba(135, 20, 180, 1);
    clip-path: polygon(90% 100%, 100% 100%, 100% 150%);
    transform-origin: 93% 80%;
    animation: fly60 7000ms 2360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly60 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(250deg) rotateY(-207deg) rotateZ(-364deg) translateZ(2447px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(250deg) rotateY(-207deg) rotateZ(-364deg) translateZ(2447px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(61) {
    color: rgba(133, 20, 183, 1);
    clip-path: polygon(0% 150%, 0% 200%, 10% 200%);
    transform-origin: 6% 114%;
    animation: fly61 7000ms 2400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly61 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-173deg) rotateY(-460deg) rotateZ(250deg) translateZ(1487px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-173deg) rotateY(-460deg) rotateZ(250deg) translateZ(1487px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(62) {
    color: rgba(131, 19, 186, 1);
    clip-path: polygon(0% 150%, 10% 150%, 10% 200%);
    transform-origin: 33% 177%;
    animation: fly62 7000ms 2440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly62 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-342deg) rotateY(220deg) rotateZ(59deg) translateZ(2293px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-342deg) rotateY(220deg) rotateZ(59deg) translateZ(2293px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(63) {
    color: rgba(129, 19, 189, 1);
    clip-path: polygon(10% 150%, 10% 200%, 20% 200%);
    transform-origin: 29% 106%;
    animation: fly63 7000ms 2480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly63 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(143deg) rotateY(315deg) rotateZ(-337deg) translateZ(-2050px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(143deg) rotateY(315deg) rotateZ(-337deg) translateZ(-2050px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(64) {
    color: rgba(127, 18, 192, 1);
    clip-path: polygon(10% 150%, 20% 150%, 20% 200%);
    transform-origin: 20% 144%;
    animation: fly64 7000ms 2520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly64 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(64deg) rotateY(32deg) rotateZ(138deg) translateZ(3297px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(64deg) rotateY(32deg) rotateZ(138deg) translateZ(3297px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(65) {
    color: rgba(125, 18, 195, 1);
    clip-path: polygon(20% 150%, 20% 200%, 30% 200%);
    transform-origin: 65% 109%;
    animation: fly65 7000ms 2560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly65 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-43deg) rotateY(-438deg) rotateZ(453deg) translateZ(-2344px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-43deg) rotateY(-438deg) rotateZ(453deg) translateZ(-2344px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(66) {
    color: rgba(123, 17, 198, 1);
    clip-path: polygon(20% 150%, 30% 150%, 30% 200%);
    transform-origin: 19% 120%;
    animation: fly66 7000ms 2600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly66 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(490deg) rotateY(487deg) rotateZ(211deg) translateZ(-278px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(490deg) rotateY(487deg) rotateZ(211deg) translateZ(-278px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(67) {
    color: rgba(121, 17, 201, 1);
    clip-path: polygon(30% 150%, 30% 200%, 40% 200%);
    transform-origin: -10% 197%;
    animation: fly67 7000ms 2640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly67 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(139deg) rotateY(-282deg) rotateZ(-227deg) translateZ(-41px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(139deg) rotateY(-282deg) rotateZ(-227deg) translateZ(-41px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(68) {
    color: rgba(119, 16, 204, 1);
    clip-path: polygon(30% 150%, 40% 150%, 40% 200%);
    transform-origin: 62% 174%;
    animation: fly68 7000ms 2680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly68 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-318deg) rotateY(-463deg) rotateZ(-439deg) translateZ(2106px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-318deg) rotateY(-463deg) rotateZ(-439deg) translateZ(2106px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(69) {
    color: rgba(117, 16, 207, 1);
    clip-path: polygon(40% 150%, 40% 200%, 50% 200%);
    transform-origin: 69% 171%;
    animation: fly69 7000ms 2720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly69 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(150deg) rotateY(-142deg) rotateZ(199deg) translateZ(2516px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(150deg) rotateY(-142deg) rotateZ(199deg) translateZ(2516px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(70) {
    color: rgba(115, 15, 210, 1);
    clip-path: polygon(40% 150%, 50% 150%, 50% 200%);
    transform-origin: 78% 103%;
    animation: fly70 7000ms 2760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly70 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-403deg) rotateY(-56deg) rotateZ(69deg) translateZ(-46px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-403deg) rotateY(-56deg) rotateZ(69deg) translateZ(-46px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(71) {
    color: rgba(113, 15, 213, 1);
    clip-path: polygon(50% 150%, 50% 200%, 60% 200%);
    transform-origin: 19% 156%;
    animation: fly71 7000ms 2800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly71 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(485deg) rotateY(433deg) rotateZ(-10deg) translateZ(-1656px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(485deg) rotateY(433deg) rotateZ(-10deg) translateZ(-1656px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(72) {
    color: rgba(111, 14, 216, 1);
    clip-path: polygon(50% 150%, 60% 150%, 60% 200%);
    transform-origin: 76% 177%;
    animation: fly72 7000ms 2840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly72 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(463deg) rotateY(476deg) rotateZ(-161deg) translateZ(1605px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(463deg) rotateY(476deg) rotateZ(-161deg) translateZ(1605px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(73) {
    color: rgba(109, 14, 219, 1);
    clip-path: polygon(60% 150%, 60% 200%, 70% 200%);
    transform-origin: 107% 161%;
    animation: fly73 7000ms 2880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly73 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-23deg) rotateY(-122deg) rotateZ(382deg) translateZ(1929px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-23deg) rotateY(-122deg) rotateZ(382deg) translateZ(1929px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(74) {
    color: rgba(107, 13, 222, 1);
    clip-path: polygon(60% 150%, 70% 150%, 70% 200%);
    transform-origin: 28% 133%;
    animation: fly74 7000ms 2920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly74 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-117deg) rotateY(139deg) rotateZ(-90deg) translateZ(3031px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-117deg) rotateY(139deg) rotateZ(-90deg) translateZ(3031px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(75) {
    color: rgba(105, 13, 225, 1);
    clip-path: polygon(70% 150%, 70% 200%, 80% 200%);
    transform-origin: 51% 155%;
    animation: fly75 7000ms 2960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly75 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(112deg) rotateY(-273deg) rotateZ(359deg) translateZ(3170px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(112deg) rotateY(-273deg) rotateZ(359deg) translateZ(3170px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(76) {
    color: rgba(103, 12, 228, 1);
    clip-path: polygon(70% 150%, 80% 150%, 80% 200%);
    transform-origin: 79% 170%;
    animation: fly76 7000ms 3000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly76 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-85deg) rotateY(410deg) rotateZ(106deg) translateZ(-917px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-85deg) rotateY(410deg) rotateZ(106deg) translateZ(-917px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(77) {
    color: rgba(101, 12, 231, 1);
    clip-path: polygon(80% 150%, 80% 200%, 90% 200%);
    transform-origin: 81% 107%;
    animation: fly77 7000ms 3040ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly77 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-297deg) rotateY(-135deg) rotateZ(-99deg) translateZ(32px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-297deg) rotateY(-135deg) rotateZ(-99deg) translateZ(32px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(78) {
    color: rgba(99, 11, 234, 1);
    clip-path: polygon(80% 150%, 90% 150%, 90% 200%);
    transform-origin: 42% 130%;
    animation: fly78 7000ms 3080ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly78 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-149deg) rotateY(-458deg) rotateZ(-3deg) translateZ(235px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-149deg) rotateY(-458deg) rotateZ(-3deg) translateZ(235px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(79) {
    color: rgba(97, 11, 237, 1);
    clip-path: polygon(90% 150%, 90% 200%, 100% 200%);
    transform-origin: 84% 108%;
    animation: fly79 7000ms 3120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly79 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-409deg) rotateY(375deg) rotateZ(-222deg) translateZ(-1604px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-409deg) rotateY(375deg) rotateZ(-222deg) translateZ(-1604px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(80) {
    color: rgba(95, 10, 240, 1);
    clip-path: polygon(90% 150%, 100% 150%, 100% 200%);
    transform-origin: 54% 106%;
    animation: fly80 7000ms 3160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly80 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-310deg) rotateY(70deg) rotateZ(225deg) translateZ(-503px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-310deg) rotateY(70deg) rotateZ(225deg) translateZ(-503px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(81) {
    color: rgba(93, 10, 243, 1);
    clip-path: polygon(0% 200%, 0% 250%, 10% 250%);
    transform-origin: 37% 204%;
    animation: fly81 7000ms 3200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly81 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(287deg) rotateY(234deg) rotateZ(126deg) translateZ(-333px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(287deg) rotateY(234deg) rotateZ(126deg) translateZ(-333px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(82) {
    color: rgba(91, 9, 246, 1);
    clip-path: polygon(0% 200%, 10% 200%, 10% 250%);
    transform-origin: -16% 215%;
    animation: fly82 7000ms 3240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly82 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(223deg) rotateY(-145deg) rotateZ(-401deg) translateZ(-2045px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(223deg) rotateY(-145deg) rotateZ(-401deg) translateZ(-2045px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(83) {
    color: rgba(89, 9, 249, 1);
    clip-path: polygon(10% 200%, 10% 250%, 20% 250%);
    transform-origin: -33% 249%;
    animation: fly83 7000ms 3280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly83 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-205deg) rotateY(-364deg) rotateZ(-104deg) translateZ(-1321px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-205deg) rotateY(-364deg) rotateZ(-104deg) translateZ(-1321px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(84) {
    color: rgba(87, 8, 252, 1);
    clip-path: polygon(10% 200%, 20% 200%, 20% 250%);
    transform-origin: 11% 165%;
    animation: fly84 7000ms 3320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly84 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-185deg) rotateY(338deg) rotateZ(-30deg) translateZ(2273px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-185deg) rotateY(338deg) rotateZ(-30deg) translateZ(2273px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(85) {
    color: rgba(85, 8, 255, 1);
    clip-path: polygon(20% 200%, 20% 250%, 30% 250%);
    transform-origin: -24% 192%;
    animation: fly85 7000ms 3360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly85 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(296deg) rotateY(-144deg) rotateZ(-492deg) translateZ(620px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(296deg) rotateY(-144deg) rotateZ(-492deg) translateZ(620px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(86) {
    color: rgba(83, 7, 258, 1);
    clip-path: polygon(20% 200%, 30% 200%, 30% 250%);
    transform-origin: -18% 167%;
    animation: fly86 7000ms 3400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly86 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(173deg) rotateY(340deg) rotateZ(-217deg) translateZ(1204px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(173deg) rotateY(340deg) rotateZ(-217deg) translateZ(1204px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(87) {
    color: rgba(81, 7, 261, 1);
    clip-path: polygon(30% 200%, 30% 250%, 40% 250%);
    transform-origin: 22% 152%;
    animation: fly87 7000ms 3440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly87 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(268deg) rotateY(432deg) rotateZ(-133deg) translateZ(-1470px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(268deg) rotateY(432deg) rotateZ(-133deg) translateZ(-1470px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(88) {
    color: rgba(79, 6, 264, 1);
    clip-path: polygon(30% 200%, 40% 200%, 40% 250%);
    transform-origin: 43% 233%;
    animation: fly88 7000ms 3480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly88 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-35deg) rotateY(-37deg) rotateZ(-16deg) translateZ(-1574px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-35deg) rotateY(-37deg) rotateZ(-16deg) translateZ(-1574px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(89) {
    color: rgba(77, 6, 267, 1);
    clip-path: polygon(40% 200%, 40% 250%, 50% 250%);
    transform-origin: -3% 175%;
    animation: fly89 7000ms 3520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly89 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-314deg) rotateY(237deg) rotateZ(83deg) translateZ(726px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-314deg) rotateY(237deg) rotateZ(83deg) translateZ(726px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(90) {
    color: rgba(75, 5, 270, 1);
    clip-path: polygon(40% 200%, 50% 200%, 50% 250%);
    transform-origin: 78% 189%;
    animation: fly90 7000ms 3560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly90 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-88deg) rotateY(377deg) rotateZ(-336deg) translateZ(1971px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-88deg) rotateY(377deg) rotateZ(-336deg) translateZ(1971px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(91) {
    color: rgba(73, 5, 273, 1);
    clip-path: polygon(50% 200%, 50% 250%, 60% 250%);
    transform-origin: 17% 239%;
    animation: fly91 7000ms 3600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly91 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-52deg) rotateY(206deg) rotateZ(370deg) translateZ(2841px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-52deg) rotateY(206deg) rotateZ(370deg) translateZ(2841px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(92) {
    color: rgba(71, 4, 276, 1);
    clip-path: polygon(50% 200%, 60% 200%, 60% 250%);
    transform-origin: 65% 225%;
    animation: fly92 7000ms 3640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly92 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-127deg) rotateY(394deg) rotateZ(-35deg) translateZ(-170px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-127deg) rotateY(394deg) rotateZ(-35deg) translateZ(-170px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(93) {
    color: rgba(69, 4, 279, 1);
    clip-path: polygon(60% 200%, 60% 250%, 70% 250%);
    transform-origin: 101% 185%;
    animation: fly93 7000ms 3680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly93 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-198deg) rotateY(-211deg) rotateZ(460deg) translateZ(906px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-198deg) rotateY(-211deg) rotateZ(460deg) translateZ(906px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(94) {
    color: rgba(67, 3, 282, 1);
    clip-path: polygon(60% 200%, 70% 200%, 70% 250%);
    transform-origin: 27% 176%;
    animation: fly94 7000ms 3720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly94 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(177deg) rotateY(-485deg) rotateZ(-474deg) translateZ(-1867px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(177deg) rotateY(-485deg) rotateZ(-474deg) translateZ(-1867px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(95) {
    color: rgba(65, 3, 285, 1);
    clip-path: polygon(70% 200%, 70% 250%, 80% 250%);
    transform-origin: 107% 209%;
    animation: fly95 7000ms 3760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly95 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-382deg) rotateY(-41deg) rotateZ(-99deg) translateZ(3401px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-382deg) rotateY(-41deg) rotateZ(-99deg) translateZ(3401px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(96) {
    color: rgba(63, 2, 288, 1);
    clip-path: polygon(70% 200%, 80% 200%, 80% 250%);
    transform-origin: 78% 199%;
    animation: fly96 7000ms 3800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly96 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(0deg) rotateY(-143deg) rotateZ(497deg) translateZ(-1913px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(0deg) rotateY(-143deg) rotateZ(497deg) translateZ(-1913px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(97) {
    color: rgba(61, 2, 291, 1);
    clip-path: polygon(80% 200%, 80% 250%, 90% 250%);
    transform-origin: 89% 204%;
    animation: fly97 7000ms 3840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly97 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(354deg) rotateY(237deg) rotateZ(359deg) translateZ(1520px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(354deg) rotateY(237deg) rotateZ(359deg) translateZ(1520px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(98) {
    color: rgba(59, 1, 294, 1);
    clip-path: polygon(80% 200%, 90% 200%, 90% 250%);
    transform-origin: 103% 215%;
    animation: fly98 7000ms 3880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly98 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(452deg) rotateY(-42deg) rotateZ(490deg) translateZ(710px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(452deg) rotateY(-42deg) rotateZ(490deg) translateZ(710px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(99) {
    color: rgba(57, 1, 297, 1);
    clip-path: polygon(90% 200%, 90% 250%, 100% 250%);
    transform-origin: 109% 184%;
    animation: fly99 7000ms 3920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly99 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(369deg) rotateY(359deg) rotateZ(-13deg) translateZ(1032px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(369deg) rotateY(359deg) rotateZ(-13deg) translateZ(1032px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(100) {
    color: rgba(55, 0, 300, 1);
    clip-path: polygon(90% 200%, 100% 200%, 100% 250%);
    transform-origin: 120% 213%;
    animation: fly100 7000ms 3960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly100 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(214deg) rotateY(-31deg) rotateZ(373deg) translateZ(2870px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(214deg) rotateY(-31deg) rotateZ(373deg) translateZ(2870px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}

#ui .text:nth-child(101) {
    color: rgba(53, -1, 303, 1);
    clip-path: polygon(0% 250%, 0% 300%, 10% 300%);
    transform-origin: 0% 222%;
    animation: fly101 7000ms 4000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly101 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-144deg) rotateY(-29deg) rotateZ(211deg) translateZ(1615px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-144deg) rotateY(-29deg) rotateZ(211deg) translateZ(1615px);
    }

    70% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    90% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
}
</style>
