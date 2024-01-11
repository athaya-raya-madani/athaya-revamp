const S=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="250" height="177" viewBox="0 0 250 177">
  <image x="60" y="37" width="139" height="115" xlink:href="data:img/png;base64,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"/>
</svg>
`;export{S as l};