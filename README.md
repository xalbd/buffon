# Buffon's Needle Simulator

This is a small web app that simulates the Buffon's needle problem in order to estimate π.

## Screenshot
<img width="1508" alt="Screenshot 2024-07-19 at 5 02 11 PM" src="https://github.com/user-attachments/assets/cc66e559-7ef8-4e76-9e88-531d4a44d65d">

## Technical Details
Built using Vite/React. Start a dev server using `npm run dev`.

The Nivo library is used to display both the needle simulator and the pi estimation graph as line graphs (because it was the fastest way I could get something working). This leads to performance problems if you drop too many needles as the graph displays all previously needles, leading to lag if you have, say, 10000+ needles on the screen at once. The "truncate" feature forces the needle simulator and pi estimation graph to display only data from the last 1000 (by default) needles dropped, meaning you can drop tens of thousands of needles at once with significantly reduced lag due to the graphs redrawing.
