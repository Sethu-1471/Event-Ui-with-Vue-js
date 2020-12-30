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
export default {

}
</script>

<style scoped>
#ui .text {
    position: absolute;
    font-size: 6rem;
    color: #fff;
    line-height: 6rem;
    opacity: 0;
    font-family: 'Anton', sans-serif;
    transform: translate(-50%, -50%);
    mix-blend-mode: screen;
}

#ui .text:nth-child(1) {
    color: rgba(253, 50, 3, 1);
    clip-path: polygon(0% 0%, 0% 50%, 10% 50%);
    transform-origin: -22% 45%;
    animation: fly1 5000ms 0ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly1 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-429deg) rotateY(-106deg) rotateZ(143deg) translateZ(31px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-429deg) rotateY(-106deg) rotateZ(143deg) translateZ(31px);
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
    transform-origin: 14% -2%;
    animation: fly2 5000ms 40ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly2 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(169deg) rotateY(-235deg) rotateZ(158deg) translateZ(-616px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(169deg) rotateY(-235deg) rotateZ(158deg) translateZ(-616px);
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
    transform-origin: 39% 3%;
    animation: fly3 5000ms 80ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly3 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-145deg) rotateY(-476deg) rotateZ(-151deg) translateZ(-2151px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-145deg) rotateY(-476deg) rotateZ(-151deg) translateZ(-2151px);
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
    transform-origin: 12% 39%;
    animation: fly4 5000ms 120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly4 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(459deg) rotateY(-338deg) rotateZ(-137deg) translateZ(-574px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(459deg) rotateY(-338deg) rotateZ(-137deg) translateZ(-574px);
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
    transform-origin: 27% 41%;
    animation: fly5 5000ms 160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly5 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(137deg) rotateY(204deg) rotateZ(-441deg) translateZ(-1833px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(137deg) rotateY(204deg) rotateZ(-441deg) translateZ(-1833px);
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
    transform-origin: 57% -41%;
    animation: fly6 5000ms 200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly6 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-394deg) rotateZ(-367deg) translateZ(-1285px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-394deg) rotateZ(-367deg) translateZ(-1285px);
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
    transform-origin: -6% -19%;
    animation: fly7 5000ms 240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly7 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-255deg) rotateY(265deg) rotateZ(102deg) translateZ(-543px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-255deg) rotateY(265deg) rotateZ(102deg) translateZ(-543px);
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
    transform-origin: 56% 36%;
    animation: fly8 5000ms 280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly8 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(500deg) rotateY(-265deg) rotateZ(32deg) translateZ(-1423px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(500deg) rotateY(-265deg) rotateZ(32deg) translateZ(-1423px);
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
    transform-origin: -2% 28%;
    animation: fly9 5000ms 320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly9 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(256deg) rotateY(246deg) rotateZ(91deg) translateZ(-1578px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(256deg) rotateY(246deg) rotateZ(91deg) translateZ(-1578px);
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
    transform-origin: 8% 6%;
    animation: fly10 5000ms 360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly10 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-79deg) rotateY(469deg) rotateZ(492deg) translateZ(-1391px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-79deg) rotateY(469deg) rotateZ(492deg) translateZ(-1391px);
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
    transform-origin: 9% 28%;
    animation: fly11 5000ms 400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly11 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(225deg) rotateY(-178deg) rotateZ(-490deg) translateZ(461px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(225deg) rotateY(-178deg) rotateZ(-490deg) translateZ(461px);
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
    transform-origin: 90% 50%;
    animation: fly12 5000ms 440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly12 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(147deg) rotateY(-101deg) rotateZ(-302deg) translateZ(-2164px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(147deg) rotateY(-101deg) rotateZ(-302deg) translateZ(-2164px);
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
    transform-origin: 62% 3%;
    animation: fly13 5000ms 480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly13 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-108deg) rotateY(327deg) rotateZ(488deg) translateZ(-2325px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-108deg) rotateY(327deg) rotateZ(488deg) translateZ(-2325px);
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
    transform-origin: 54% 6%;
    animation: fly14 5000ms 520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly14 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(66deg) rotateY(-451deg) rotateZ(-91deg) translateZ(-237px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(66deg) rotateY(-451deg) rotateZ(-91deg) translateZ(-237px);
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
    transform-origin: 68% -44%;
    animation: fly15 5000ms 560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly15 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(272deg) rotateY(-212deg) rotateZ(-362deg) translateZ(-1996px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(272deg) rotateY(-212deg) rotateZ(-362deg) translateZ(-1996px);
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
    transform-origin: 83% -35%;
    animation: fly16 5000ms 600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly16 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(389deg) rotateY(480deg) rotateZ(-374deg) translateZ(-2276px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(389deg) rotateY(480deg) rotateZ(-374deg) translateZ(-2276px);
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
    transform-origin: 102% 17%;
    animation: fly17 5000ms 640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly17 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-117deg) rotateY(-212deg) rotateZ(-326deg) translateZ(-93px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-117deg) rotateY(-212deg) rotateZ(-326deg) translateZ(-93px);
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
    transform-origin: 80% -45%;
    animation: fly18 5000ms 680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly18 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-257deg) rotateY(-495deg) rotateZ(109deg) translateZ(-1576px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-257deg) rotateY(-495deg) rotateZ(109deg) translateZ(-1576px);
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
    transform-origin: 63% -3%;
    animation: fly19 5000ms 720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly19 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-128deg) rotateY(-214deg) rotateZ(412deg) translateZ(-2199px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-128deg) rotateY(-214deg) rotateZ(412deg) translateZ(-2199px);
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
    transform-origin: 114% -33%;
    animation: fly20 5000ms 760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly20 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-387deg) rotateY(482deg) rotateZ(-90deg) translateZ(-1158px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-387deg) rotateY(482deg) rotateZ(-90deg) translateZ(-1158px);
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
    transform-origin: 34% 57%;
    animation: fly21 5000ms 800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly21 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(150deg) rotateY(-175deg) rotateZ(224deg) translateZ(-1040px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(150deg) rotateY(-175deg) rotateZ(224deg) translateZ(-1040px);
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
    transform-origin: -25% 6%;
    animation: fly22 5000ms 840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly22 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-350deg) rotateY(-208deg) rotateZ(115deg) translateZ(298px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-350deg) rotateY(-208deg) rotateZ(115deg) translateZ(298px);
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
    transform-origin: 28% 3%;
    animation: fly23 5000ms 880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly23 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-49deg) rotateY(313deg) rotateZ(242deg) translateZ(-2473px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-49deg) rotateY(313deg) rotateZ(242deg) translateZ(-2473px);
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
    transform-origin: 19% 3%;
    animation: fly24 5000ms 920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly24 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-492deg) rotateY(354deg) rotateZ(-101deg) translateZ(-380px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-492deg) rotateY(354deg) rotateZ(-101deg) translateZ(-380px);
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
    transform-origin: 67% 17%;
    animation: fly25 5000ms 960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly25 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(230deg) rotateY(197deg) rotateZ(-336deg) translateZ(-855px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(230deg) rotateY(197deg) rotateZ(-336deg) translateZ(-855px);
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
    transform-origin: 24% 57%;
    animation: fly26 5000ms 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly26 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(178deg) rotateY(-428deg) rotateZ(-295deg) translateZ(-846px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(178deg) rotateY(-428deg) rotateZ(-295deg) translateZ(-846px);
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
    transform-origin: 20% 2%;
    animation: fly27 5000ms 1040ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly27 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(42deg) rotateY(400deg) rotateZ(-116deg) translateZ(95px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(42deg) rotateY(400deg) rotateZ(-116deg) translateZ(95px);
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
    transform-origin: 19% 65%;
    animation: fly28 5000ms 1080ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly28 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-489deg) rotateY(77deg) rotateZ(-334deg) translateZ(-949px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-489deg) rotateY(77deg) rotateZ(-334deg) translateZ(-949px);
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
    transform-origin: 62% 69%;
    animation: fly29 5000ms 1120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly29 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-99deg) rotateY(354deg) rotateZ(142deg) translateZ(-1231px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-99deg) rotateY(354deg) rotateZ(142deg) translateZ(-1231px);
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
    transform-origin: -5% 57%;
    animation: fly30 5000ms 1160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly30 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-72deg) rotateY(469deg) rotateZ(48deg) translateZ(-754px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-72deg) rotateY(469deg) rotateZ(48deg) translateZ(-754px);
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
    transform-origin: 33% 91%;
    animation: fly31 5000ms 1200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly31 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(139deg) rotateY(276deg) rotateZ(209deg) translateZ(-2244px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(139deg) rotateY(276deg) rotateZ(209deg) translateZ(-2244px);
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
    transform-origin: 37% 65%;
    animation: fly32 5000ms 1240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly32 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(59deg) rotateY(-104deg) rotateZ(226deg) translateZ(243px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(59deg) rotateY(-104deg) rotateZ(226deg) translateZ(243px);
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
    transform-origin: 58% 5%;
    animation: fly33 5000ms 1280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly33 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-147deg) rotateY(-218deg) rotateZ(327deg) translateZ(-490px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-147deg) rotateY(-218deg) rotateZ(327deg) translateZ(-490px);
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
    transform-origin: 64% 5%;
    animation: fly34 5000ms 1320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly34 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-119deg) rotateY(458deg) rotateZ(82deg) translateZ(-2205px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-119deg) rotateY(458deg) rotateZ(82deg) translateZ(-2205px);
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
    transform-origin: 32% 33%;
    animation: fly35 5000ms 1360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly35 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-94deg) rotateY(150deg) rotateZ(-495deg) translateZ(-2071px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-94deg) rotateY(150deg) rotateZ(-495deg) translateZ(-2071px);
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
    transform-origin: 60% 100%;
    animation: fly36 5000ms 1400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly36 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-431deg) rotateY(319deg) rotateZ(-183deg) translateZ(364px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-431deg) rotateY(319deg) rotateZ(-183deg) translateZ(364px);
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
    transform-origin: 87% 40%;
    animation: fly37 5000ms 1440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly37 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-424deg) rotateY(357deg) rotateZ(-439deg) translateZ(-2068px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-424deg) rotateY(357deg) rotateZ(-439deg) translateZ(-2068px);
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
    transform-origin: 103% 75%;
    animation: fly38 5000ms 1480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly38 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-175deg) rotateY(-407deg) rotateZ(-144deg) translateZ(-2487px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-175deg) rotateY(-407deg) rotateZ(-144deg) translateZ(-2487px);
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
    transform-origin: 138% 32%;
    animation: fly39 5000ms 1520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly39 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(187deg) rotateY(459deg) rotateZ(-274deg) translateZ(-1526px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(187deg) rotateY(459deg) rotateZ(-274deg) translateZ(-1526px);
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
    transform-origin: 53% 41%;
    animation: fly40 5000ms 1560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly40 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(170deg) rotateY(71deg) rotateZ(-468deg) translateZ(334px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(170deg) rotateY(71deg) rotateZ(-468deg) translateZ(334px);
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
    transform-origin: -27% 136%;
    animation: fly41 5000ms 1600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly41 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-25deg) rotateY(-2deg) rotateZ(-255deg) translateZ(-1396px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-25deg) rotateY(-2deg) rotateZ(-255deg) translateZ(-1396px);
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
    transform-origin: -9% 97%;
    animation: fly42 5000ms 1640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly42 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-135deg) rotateY(-17deg) rotateZ(-258deg) translateZ(225px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-135deg) rotateY(-17deg) rotateZ(-258deg) translateZ(225px);
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
    transform-origin: 45% 99%;
    animation: fly43 5000ms 1680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly43 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-454deg) rotateY(-213deg) rotateZ(-161deg) translateZ(-1360px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-454deg) rotateY(-213deg) rotateZ(-161deg) translateZ(-1360px);
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
    transform-origin: -1% 51%;
    animation: fly44 5000ms 1720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly44 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-264deg) rotateY(-163deg) rotateZ(245deg) translateZ(314px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-264deg) rotateY(-163deg) rotateZ(245deg) translateZ(314px);
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
    transform-origin: 1% 88%;
    animation: fly45 5000ms 1760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly45 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-245deg) rotateY(57deg) rotateZ(-196deg) translateZ(-589px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-245deg) rotateY(57deg) rotateZ(-196deg) translateZ(-589px);
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
    transform-origin: -11% 52%;
    animation: fly46 5000ms 1800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly46 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(49deg) rotateY(-92deg) rotateZ(485deg) translateZ(-1940px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(49deg) rotateY(-92deg) rotateZ(485deg) translateZ(-1940px);
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
    transform-origin: 71% 133%;
    animation: fly47 5000ms 1840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly47 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-39deg) rotateY(197deg) rotateZ(340deg) translateZ(-547px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-39deg) rotateY(197deg) rotateZ(340deg) translateZ(-547px);
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
    transform-origin: 25% 119%;
    animation: fly48 5000ms 1880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly48 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(91deg) rotateY(209deg) rotateZ(32deg) translateZ(-2062px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(91deg) rotateY(209deg) rotateZ(32deg) translateZ(-2062px);
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
    transform-origin: 17% 64%;
    animation: fly49 5000ms 1920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly49 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-353deg) rotateY(-309deg) rotateZ(-9deg) translateZ(-1971px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-353deg) rotateY(-309deg) rotateZ(-9deg) translateZ(-1971px);
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
    transform-origin: 73% 73%;
    animation: fly50 5000ms 1960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly50 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-285deg) rotateY(243deg) rotateZ(497deg) translateZ(-1786px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-285deg) rotateY(243deg) rotateZ(497deg) translateZ(-1786px);
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
    transform-origin: 16% 91%;
    animation: fly51 5000ms 2000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly51 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(420deg) rotateY(392deg) rotateZ(61deg) translateZ(-615px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(420deg) rotateY(392deg) rotateZ(61deg) translateZ(-615px);
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
    transform-origin: 52% 136%;
    animation: fly52 5000ms 2040ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly52 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-294deg) rotateY(160deg) rotateZ(250deg) translateZ(400px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-294deg) rotateY(160deg) rotateZ(250deg) translateZ(400px);
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
    transform-origin: 97% 94%;
    animation: fly53 5000ms 2080ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly53 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(334deg) rotateY(156deg) rotateZ(477deg) translateZ(473px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(334deg) rotateY(156deg) rotateZ(477deg) translateZ(473px);
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
    transform-origin: 97% 97%;
    animation: fly54 5000ms 2120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly54 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(94deg) rotateY(482deg) rotateZ(115deg) translateZ(-765px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(94deg) rotateY(482deg) rotateZ(115deg) translateZ(-765px);
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
    transform-origin: 35% 114%;
    animation: fly55 5000ms 2160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly55 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-443deg) rotateY(223deg) rotateZ(-119deg) translateZ(436px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-443deg) rotateY(223deg) rotateZ(-119deg) translateZ(436px);
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
    transform-origin: 97% 54%;
    animation: fly56 5000ms 2200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly56 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-138deg) rotateY(-374deg) rotateZ(189deg) translateZ(331px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-138deg) rotateY(-374deg) rotateZ(189deg) translateZ(331px);
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
    transform-origin: 64% 120%;
    animation: fly57 5000ms 2240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly57 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-186deg) rotateY(-412deg) rotateZ(-12deg) translateZ(-597px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-186deg) rotateY(-412deg) rotateZ(-12deg) translateZ(-597px);
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
    transform-origin: 33% 100%;
    animation: fly58 5000ms 2280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly58 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-433deg) rotateY(427deg) rotateZ(-257deg) translateZ(-649px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-433deg) rotateY(427deg) rotateZ(-257deg) translateZ(-649px);
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
    transform-origin: 137% 77%;
    animation: fly59 5000ms 2320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly59 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-436deg) rotateY(203deg) rotateZ(-117deg) translateZ(-1471px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-436deg) rotateY(203deg) rotateZ(-117deg) translateZ(-1471px);
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
    transform-origin: 65% 135%;
    animation: fly60 5000ms 2360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly60 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-264deg) rotateY(-309deg) rotateZ(202deg) translateZ(-2412px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-264deg) rotateY(-309deg) rotateZ(202deg) translateZ(-2412px);
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
    transform-origin: -25% 136%;
    animation: fly61 5000ms 2400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly61 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-140deg) rotateY(291deg) rotateZ(117deg) translateZ(-835px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-140deg) rotateY(291deg) rotateZ(117deg) translateZ(-835px);
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
    transform-origin: 5% 138%;
    animation: fly62 5000ms 2440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly62 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(358deg) rotateY(295deg) rotateZ(181deg) translateZ(-2030px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(358deg) rotateY(295deg) rotateZ(181deg) translateZ(-2030px);
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
    transform-origin: 6% 140%;
    animation: fly63 5000ms 2480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly63 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-145deg) rotateY(-27deg) rotateZ(316deg) translateZ(232px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-145deg) rotateY(-27deg) rotateZ(316deg) translateZ(232px);
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
    transform-origin: -2% 153%;
    animation: fly64 5000ms 2520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly64 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(31deg) rotateY(405deg) rotateZ(-70deg) translateZ(-2204px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(31deg) rotateY(405deg) rotateZ(-70deg) translateZ(-2204px);
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
    transform-origin: -4% 186%;
    animation: fly65 5000ms 2560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly65 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(89deg) rotateY(456deg) rotateZ(-71deg) translateZ(-1470px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(89deg) rotateY(456deg) rotateZ(-71deg) translateZ(-1470px);
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
    transform-origin: 26% 114%;
    animation: fly66 5000ms 2600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly66 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(66deg) rotateY(111deg) rotateZ(-5deg) translateZ(-1570px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(66deg) rotateY(111deg) rotateZ(-5deg) translateZ(-1570px);
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
    transform-origin: 49% 159%;
    animation: fly67 5000ms 2640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly67 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-274deg) rotateY(-147deg) rotateZ(-238deg) translateZ(-419px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-274deg) rotateY(-147deg) rotateZ(-238deg) translateZ(-419px);
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
    transform-origin: -15% 194%;
    animation: fly68 5000ms 2680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly68 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-406deg) rotateY(247deg) rotateZ(253deg) translateZ(-2238px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-406deg) rotateY(247deg) rotateZ(253deg) translateZ(-2238px);
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
    transform-origin: 15% 168%;
    animation: fly69 5000ms 2720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly69 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-464deg) rotateY(110deg) rotateZ(-59deg) translateZ(-851px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-464deg) rotateY(110deg) rotateZ(-59deg) translateZ(-851px);
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
    transform-origin: 79% 138%;
    animation: fly70 5000ms 2760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly70 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(110deg) rotateY(68deg) rotateZ(430deg) translateZ(-915px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(110deg) rotateY(68deg) rotateZ(430deg) translateZ(-915px);
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
    transform-origin: 60% 183%;
    animation: fly71 5000ms 2800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly71 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(53deg) rotateY(-427deg) rotateZ(-85deg) translateZ(-1371px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(53deg) rotateY(-427deg) rotateZ(-85deg) translateZ(-1371px);
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
    transform-origin: 37% 197%;
    animation: fly72 5000ms 2840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly72 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(477deg) rotateY(-109deg) rotateZ(-386deg) translateZ(-2056px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(477deg) rotateY(-109deg) rotateZ(-386deg) translateZ(-2056px);
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
    transform-origin: 101% 169%;
    animation: fly73 5000ms 2880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly73 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-319deg) rotateY(-452deg) rotateZ(212deg) translateZ(115px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-319deg) rotateY(-452deg) rotateZ(212deg) translateZ(115px);
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
    transform-origin: 66% 160%;
    animation: fly74 5000ms 2920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly74 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-455deg) rotateY(201deg) rotateZ(-53deg) translateZ(-2102px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-455deg) rotateY(201deg) rotateZ(-53deg) translateZ(-2102px);
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
    transform-origin: 32% 114%;
    animation: fly75 5000ms 2960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly75 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(457deg) rotateY(-33deg) rotateZ(208deg) translateZ(-1339px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(457deg) rotateY(-33deg) rotateZ(208deg) translateZ(-1339px);
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
    transform-origin: 28% 186%;
    animation: fly76 5000ms 3000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly76 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-86deg) rotateY(408deg) rotateZ(390deg) translateZ(142px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-86deg) rotateY(408deg) rotateZ(390deg) translateZ(142px);
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
    transform-origin: 96% 144%;
    animation: fly77 5000ms 3040ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly77 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(480deg) rotateY(63deg) rotateZ(173deg) translateZ(-2440px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(480deg) rotateY(63deg) rotateZ(173deg) translateZ(-2440px);
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
    transform-origin: 121% 156%;
    animation: fly78 5000ms 3080ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly78 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-48deg) rotateY(157deg) rotateZ(-406deg) translateZ(356px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-48deg) rotateY(157deg) rotateZ(-406deg) translateZ(356px);
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
    transform-origin: 59% 139%;
    animation: fly79 5000ms 3120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly79 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-459deg) rotateY(54deg) rotateZ(-174deg) translateZ(-61px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-459deg) rotateY(54deg) rotateZ(-174deg) translateZ(-61px);
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
    transform-origin: 83% 180%;
    animation: fly80 5000ms 3160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly80 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(96deg) rotateY(398deg) rotateZ(-32deg) translateZ(-806px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(96deg) rotateY(398deg) rotateZ(-32deg) translateZ(-806px);
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
    transform-origin: -21% 158%;
    animation: fly81 5000ms 3200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly81 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(419deg) rotateY(-247deg) rotateZ(-392deg) translateZ(338px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(419deg) rotateY(-247deg) rotateZ(-392deg) translateZ(338px);
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
    transform-origin: 42% 225%;
    animation: fly82 5000ms 3240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly82 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-1deg) rotateY(-295deg) rotateZ(214deg) translateZ(-1777px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-1deg) rotateY(-295deg) rotateZ(214deg) translateZ(-1777px);
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
    transform-origin: -12% 240%;
    animation: fly83 5000ms 3280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly83 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-419deg) rotateY(29deg) rotateZ(-52deg) translateZ(-1793px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-419deg) rotateY(29deg) rotateZ(-52deg) translateZ(-1793px);
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
    transform-origin: 57% 229%;
    animation: fly84 5000ms 3320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly84 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(222deg) rotateY(68deg) rotateZ(441deg) translateZ(-1188px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(222deg) rotateY(68deg) rotateZ(441deg) translateZ(-1188px);
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
    transform-origin: -25% 176%;
    animation: fly85 5000ms 3360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly85 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(466deg) rotateY(127deg) rotateZ(-277deg) translateZ(-1481px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(466deg) rotateY(127deg) rotateZ(-277deg) translateZ(-1481px);
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
    transform-origin: 19% 164%;
    animation: fly86 5000ms 3400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly86 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-252deg) rotateY(24deg) rotateZ(121deg) translateZ(-308px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-252deg) rotateY(24deg) rotateZ(121deg) translateZ(-308px);
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
    transform-origin: 75% 177%;
    animation: fly87 5000ms 3440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly87 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(131deg) rotateY(7deg) rotateZ(498deg) translateZ(-1957px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(131deg) rotateY(7deg) rotateZ(498deg) translateZ(-1957px);
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
    transform-origin: 70% 166%;
    animation: fly88 5000ms 3480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly88 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(329deg) rotateY(-151deg) rotateZ(-183deg) translateZ(-1756px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(329deg) rotateY(-151deg) rotateZ(-183deg) translateZ(-1756px);
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
    transform-origin: 72% 246%;
    animation: fly89 5000ms 3520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly89 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-159deg) rotateY(374deg) rotateZ(109deg) translateZ(-2343px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-159deg) rotateY(374deg) rotateZ(109deg) translateZ(-2343px);
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
    transform-origin: -7% 173%;
    animation: fly90 5000ms 3560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly90 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-128deg) rotateY(-98deg) rotateZ(-366deg) translateZ(-2358px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-128deg) rotateY(-98deg) rotateZ(-366deg) translateZ(-2358px);
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
    transform-origin: 22% 183%;
    animation: fly91 5000ms 3600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly91 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(251deg) rotateY(-375deg) rotateZ(-77deg) translateZ(266px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(251deg) rotateY(-375deg) rotateZ(-77deg) translateZ(266px);
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
    transform-origin: 53% 213%;
    animation: fly92 5000ms 3640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly92 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(130deg) rotateY(163deg) rotateZ(190deg) translateZ(-690px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(130deg) rotateY(163deg) rotateZ(190deg) translateZ(-690px);
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
    transform-origin: 103% 163%;
    animation: fly93 5000ms 3680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly93 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-225deg) rotateY(-6deg) rotateZ(-53deg) translateZ(-1211px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-225deg) rotateY(-6deg) rotateZ(-53deg) translateZ(-1211px);
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
    transform-origin: 48% 159%;
    animation: fly94 5000ms 3720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly94 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(148deg) rotateY(-210deg) rotateZ(311deg) translateZ(-1311px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(148deg) rotateY(-210deg) rotateZ(311deg) translateZ(-1311px);
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
    transform-origin: 108% 167%;
    animation: fly95 5000ms 3760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly95 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-273deg) rotateY(320deg) rotateZ(-6deg) translateZ(-1967px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-273deg) rotateY(320deg) rotateZ(-6deg) translateZ(-1967px);
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
    transform-origin: 74% 190%;
    animation: fly96 5000ms 3800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly96 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(453deg) rotateY(106deg) rotateZ(-137deg) translateZ(-1961px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(453deg) rotateY(106deg) rotateZ(-137deg) translateZ(-1961px);
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
    transform-origin: 57% 202%;
    animation: fly97 5000ms 3840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly97 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-328deg) rotateY(363deg) rotateZ(-95deg) translateZ(-1842px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-328deg) rotateY(363deg) rotateZ(-95deg) translateZ(-1842px);
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
    transform-origin: 54% 180%;
    animation: fly98 5000ms 3880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly98 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(161deg) rotateY(-146deg) rotateZ(-391deg) translateZ(58px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(161deg) rotateY(-146deg) rotateZ(-391deg) translateZ(58px);
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
    transform-origin: 72% 197%;
    animation: fly99 5000ms 3920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly99 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-89deg) rotateY(422deg) rotateZ(-56deg) translateZ(-838px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-89deg) rotateY(422deg) rotateZ(-56deg) translateZ(-838px);
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
    transform-origin: 76% 176%;
    animation: fly100 5000ms 3960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly100 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(213deg) rotateY(165deg) rotateZ(-288deg) translateZ(-364px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(213deg) rotateY(165deg) rotateZ(-288deg) translateZ(-364px);
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
    transform-origin: 20% 280%;
    animation: fly101 5000ms 4000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}

@keyframes fly101 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-478deg) rotateY(-433deg) rotateZ(251deg) translateZ(-941px);
    }

    10% {
        opacity: 0;
        transform: translate(-50%, -50%) rotateX(-478deg) rotateY(-433deg) rotateZ(251deg) translateZ(-941px);
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
