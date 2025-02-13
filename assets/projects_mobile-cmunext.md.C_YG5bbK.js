import{_ as a,c as s,o as e,ae as t}from"./chunks/framework.eZ5htaLo.js";const c=JSON.parse('{"title":"Mobile-CMUNeXt: Fast Semantic Segmentation for Diagnosis of Medical Images","description":"","frontmatter":{},"headers":[],"relativePath":"projects/mobile-cmunext.md","filePath":"projects/mobile-cmunext.md"}'),n={name:"projects/mobile-cmunext.md"};function l(h,i,o,r,p,d){return e(),s("div",null,i[0]||(i[0]=[t(`<h1 id="mobile-cmunext-fast-semantic-segmentation-for-diagnosis-of-medical-images" tabindex="-1">Mobile-CMUNeXt: Fast Semantic Segmentation for Diagnosis of Medical Images <a class="header-anchor" href="#mobile-cmunext-fast-semantic-segmentation-for-diagnosis-of-medical-images" aria-label="Permalink to &quot;Mobile-CMUNeXt: Fast Semantic Segmentation for Diagnosis of Medical Images&quot;">​</a></h1><p>Semantic segmentation of medical images is a critical task in modern healthcare, enabling precise identification and localization of anatomical structures and pathological regions. This technique classifies image regions at the pixel level, offering a powerful tool for rapid and accurate diagnosis. Despite many advancements in deep learning models, the deployment of these systems in real-world clinical settings is hindered by the computational demands of traditional software implementations, leading to inefficient and slower processing times. Field-Programmable Gate Arrays (FPGAs) offer a promising solution by providing programmable hardware-level acceleration suited for deep learning inference tasks. FPGAs enable parallel processing, low latency, and energy-efficient computation, making them ideal for real-time applications such as tumor detection, organ delineation, and lesion classification.</p><p>The objective of this work is to design and implement an efficient and fast semantic segmentation network tailored for deployment on an FPGA. By optimizing both the network architecture and its hardware implementation, we aim to overcome current limitations in computational efficiency and latency.</p><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>This work is still under development</p></div><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><ul><li>Python 3.11.10</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><h3 id="creating-a-virtual-environment" tabindex="-1">Creating a Virtual Environment <a class="header-anchor" href="#creating-a-virtual-environment" aria-label="Permalink to &quot;Creating a Virtual Environment&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # or python3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env/bin/activate</span></span></code></pre></div><h3 id="installing-dependencies" tabindex="-1">Installing Dependencies <a class="header-anchor" href="#installing-dependencies" aria-label="Permalink to &quot;Installing Dependencies&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements</span></span></code></pre></div><h3 id="linting" tabindex="-1">Linting <a class="header-anchor" href="#linting" aria-label="Permalink to &quot;Linting&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> check</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">black</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --line-length</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 110</span></span></code></pre></div><h2 id="training" tabindex="-1">Training <a class="header-anchor" href="#training" aria-label="Permalink to &quot;Training&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --model</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CMUNeXt-S</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --data_dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ../data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dataset_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ISIC2016</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --img_ext</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .jpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mask_ext</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .png</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --model</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mobile-CMUNeXt-Quant</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --data_dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ../data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dataset_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FIVES2022</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --act_bit_width</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --weight_bit_width</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span></span></code></pre></div>`,15)]))}const g=a(n,[["render",l]]);export{c as __pageData,g as default};
