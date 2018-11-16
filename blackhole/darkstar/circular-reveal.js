/**
 * Copyright (C) 2018 by Paul Lewis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function() {
  const element = document.querySelector(".circular-reveal");
  const inner = document.querySelector(".circular-reveal__content");

  const easing = 0.3;
  const outScale = 0.6;
  const inScale = 1;
  let targetScale = outScale;
  let elementScale = targetScale;
  let innerScale = 1 / elementScale;

  element.addEventListener("pointerover", () => {
    targetScale = inScale;
  });

  element.addEventListener("pointerout", () => {
    targetScale = outScale;
  });

  const update = () => {
    elementScale += (targetScale - elementScale) * easing;
    innerScale = 1 / elementScale;

    element.style.transform = `scale(${elementScale})`;
    inner.style.transform = `scale(${innerScale})`;

    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
})();