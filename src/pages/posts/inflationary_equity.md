---
layout: ../../layouts/BlogPostLayout.astro
title: 'Inflationary Equity'
pubDate: 2023-12-13
description: 'Mechanics of uncapped cap tables.'
author: 'Drew McArthur'
tags: []

---

# Inflationary Equity

<p class=subtitle>A Model of Corporate Share Issuance to Account for Labor Contribution</p>

<p class="subtitle byline">Drew McArthur - Dec 2023.  <a href="/papers/mcarthur_inflationary_equity.pdf">PDF</a></p>

## Abstract
Ownership of incorporated businesses is distributed through a set number of shares. While this number is generally fixed, most ventures require a constant influx of labor in order to run. This contradiction at the heart of modern corporations has resulted in a concentration of wealth and an imbalance in the valuation of contributions from capital and labor. The purpose of this paper is to propose a new model termed Inflationary Equity and explore the ramifications of such a radical shift in the distribution of ownership and stock issuance within joint ventures.

<p class="subtitle keywords">Keywords: ownership, equity, capital, labor, corporate governance</p>

## Introduction
Inflationary Equity refers to a model of corporate ownership where shares of a company are created in response to contributions to the company in a constant and predefined manner. "Contributions" include both capital and labor, as opposed to traditional ventures where an ownership stake is kept by the founders or given in exchange for capital injections. While there are various other models that allow for, or even center, worker ownership, Inflationary Equity is a novel mechanism that seeks to reinvent the relationships between capital, labor, and ownership in modern ventures.

This concept draws on sources across history for inspiration, from the theories of anthropologist David Graeber on the origins of currency over 2,500 years ago, to the more recently developed principles of Modern Monetary Theory and the monetary experiments of cryptocurrencies. The goal of Inflationary Equity is to reward active contribution thereby diluting passive ownership. The latter can be linked to societal problems such as wealth inequality, the alienation of labor, and a number of other downstream consequences of such a concentration of wealth. By structuring its ownership around Inflationary Equity, the company will be better positioned to avoid concentration of ownership and maintain autonomy for its contributors.

## Inspiration
### David Graeber's Debt
Anthropologist David Graeber spent a chapter of his book on the history of debt. He debunks the myth of barter, and provides a different story for the appearance of coinage centuries ago. Graeber depicts a feudal village, with farmers, soldiers, bakers, smiths, and a myriad of other roles to play in the functioning of this village. The effort required to ensure this village runs smoothly would outpace the capabilities of the throne the village relies on, and issuing coins circumvents this trouble. By paying soldiers to defend the village in these coins, and then levying a tax on the rest of the citizenry the following year, markets spring to life. In order to pay that tax, the rest of the village must provide a service to those soldiers in order to obtain the coinage necessary. Markets materialize to feed the soldiers, clothe them, and arm them, among other services. Implementation of simple policy can yield a vibrant ecosystem of interaction, (Graeber, 2012).
### Ethereum's Monetary Policy
The Ethereum blockchain is a decentralized computing platform that incentivizes contributions of computational power through issuance of a token, ether. These tokens are then used to pay fees to conduct transactions on the ethereum network. Through a fairly simple mechanism, and despite a linear rate of issuance relative to the work of running the network, the supply of ether is deflationary<sup><a id="footnote-1-ref" href="#footnote-1">1</a></sup>. This is because the base fee, which is taken out of circulation (burned), is variable depending on network usage. When there is extra space in the network, the base fee getting burned is lower than the rate of issuance, turning the supply inflationary and encouraging transactions. When that rate of transactions increases past a certain target, the base fee also increases, turning the supply deflationary, increasing the value of the token and incentivizing investment or saving (EIP-1559).
  
### Modern Monetary Theory
One can view tokens like ether, or securities of a company, through the lens of Modern Monetary Theory (MMT), which outlines the tools of an entity with control over its sovereign currency as issuance and taxation. While MMT has its critics when applied to government fiscal policy, it can be a valuable framework when applied to a company's policy on share distribution. By defining token issuance and burn rate algorithmically, the monetary policy of the Ethereum blockchain rewards contributors and maintains the value of its currency via variable taxation of transactions. A company could define its own monetary policy in similar ways, rewarding workers with shares and using its profits to buy back shares, taking them out of circulation to float share value.

## Implementation
### Share Issuance
Two ideas sit at the core of this framework. One is that labor, effort, and contribution to a business should be rewarded with ownership, since the thing that is owned would not exist or continue to exist without that contribution. The second is that since there is no limit on the amount of effort a business needs to run, there should not be a limit on the number of shares, which are simply a unit of account for ownership. Generally, a fixed cap is defined in an organization's incorporating documents, but this cap is arbitrary, especially since shares do not denote a physical item, but an abstract concept of a portion of ownership. That fraction can be divided as many times as grains of sand in the desert, and the accounting capabilities of modern technology only multiply our capabilities to manage these numbers.

There are a number of ways that a firm could implement this. An employee could receive one share per year of full-time work, prorated for part-time work. Or a share could be rewarded for each hour of work, or any interval between. Optionally, a business could implement weighted modifiers, allowing a manager to earn 1.5 shares per hour, compared to a laborer earning 1 share per hour. This could be adjusted to however the company collectively values different workers' time, however it would be important to ensure that this doesn't introduce gulfs of inequality between employees, such as the cases of CEOs earning hundreds of times the wages of other workers in the same firm. These two variables, time and the value of that time, can be used to construct a formula for shares rewarded. There are a number of other mechanisms, from bonuses to task bounties that could be implemented as well.

The specifics of how shares are distributed will vary widely across firms and disciplines. The important factor in this distribution is to ensure that it accurately reflects the contributions to the business. These contributions can be weighted, allowing for someone working twice as many hours or providing twice as much value to retain twice, or some multiplier, the ownership, but this could easily lead to a concentration and centralization of power. The hope of a model following these principles is to allow for mechanisms to remedy this concentration, if not avoid it completely.

### Share Supply Reduction
By framing the shares as the company's "currency", and following the concepts of MMT, a company can issue as many shares as it would like. This of course introduces an inflationary nature to the number of shares in circulation. For an employee on the receiving end of these newly created shares, this is not of particular issue. However, for investors or shareholders wishing to see their shares hold value, it may be beneficial for the company to implement a complementary deflationary mechanism that pulls shares out of circulation, targeting a rate of deflation that equalizes against the inflationary pressures of issuance.

A simple example would be an automated buyback based on profits from a given time period. At the end of the period, after all expenses and re-investments were accounted for, if there was money left over, that could be used to repurchase shares at the market rate. This would yield a theoretically stable share value, following the equation below for a given time period.


<center>ShareValue = <sup>ProfitAccrued</sup>&frasl;<sub>SharesCreated</sub></center>

<br/>

If the shares held that value, then the number of shares created over that time period would equal the number of shares able to be repurchased, allowing the number of shares in circulation to remain constant over that time period. This mechanism would require further exploration to avoid price volatility, but at first glance provides interesting insights into how such a company might be valued.

![a simple graph displaying circulating supply over time, where at time t, the circulating supply plateaus at supply s.](../../images/inflationary_equity_chart.png)

Assume a "startup" period, from 0 to t in the figure above, where work is done, but no profit or revenue is yet accrued. During this period, assuming a constant rate of work, the circulating supply of shares will increase linearly during this period. Then, at time t, the business becomes profitable, and share buybacks commence. Assuming each share is priced according to the formula above, the circulating supply becomes stable with s shares in circulation. The valuation of such a company then reflects the amount of work required to get the company to the point where it became profitable, since we can measure that amount of work via the number of shares issued before time t. An investor could purchase the business depicted at the valuation determined by its share price times s, the number of shares in circulation, or spend a theoretically equivalent amount of capital starting another business from scratch.

### Investment
The primary argument for a fixed number of shares in a business is the case of the investors. Assuming a constant market capitalization, an increase in the number of shares yields a decrease in individual share value, otherwise known as dilution. This framework does introduce dilution, but in a purposeful and quantified manner. As part of an investor's due diligence, rather than calculating share value based on a fixed supply, their calculations would be based on a fixed rate of supply increase. Supplanting the passive investment commonplace today, where investors expect constant growth by the nature of our economy, the share value of a company with Inflationary Equity would only yield a return on investment if the value increase exceeded that of the shares created. This would only occur, in other words, if their investment unlocked greater potential value in the company. While a return could exist, it would not last forever. The rate of share issuance would need to be accounted for in an investment; by introducing a time horizon, an investor can expect a certain return within a certain timeframe - beyond that, their ownership will be diluted by the shares awarded to the company's workers for the labor they've continuously put forth.

This could mean that the term sheet for a young startup looks significantly different from the current norm. Rather than awarding 10% or 20% equity to an early stage investor, the company might accept investment that is four or five times the quantity that the founders currently hold, giving the investors a significant, if temporary majority stake in the business. Due to the inflationary nature of the startup's equity, in time investors' stake would decrease as workers' increased. The goal, of course, would be that the company's rate of growth eventually outpaced the rate of share issuance. This is a marginally more complex equation to configure these early stage investments, but certainly not an inhibitory amount of effort for the size of investment these investors make.

Investors might also accrue shares through time spent advising, allowing them to counteract dilution via further contribution to the business. The goal of this framework is to offer a dynamic ownership structure that is able to facilitate the growth enabled by capital investment, while ensuring that, over time, ownership and power over the business flows back towards the individuals that spend their time and effort to keep the business running.
### Transitions
This is likely a framework most easily implemented at the time a company is founded, without the friction of an existing status quo. However, just as companies' ownership changes hands in a sale, or an employee buyout, a transition from an existing company with a traditional ownership structure is possible. In order to accomplish this, the company could start by purchasing shares at market rates with the profit it makes at the end of each "epoch" (whether that be a day, a week, or a quarter). Once a significant stockpile of shares has been accrued, the company can then distribute those shares at a constant rate for each unit of contribution during that epoch.

Assuming the profit, share price, and distribution rate line up, a company could execute this without any significant adjustment to their operating agreement or articles of incorporation. At such a point where equilibrium has been achieved, those initiating documents could be adjusted to allow for share creation and destruction, allowing the company to create shares for distribution, rather than requiring use of reserves. Implementing this has the same benefit as the US dropping the gold standard; it offers "new tools", allowing for greater spending (share creation) in times of lower economic activity (business profits), which can encourage the workers' effort in turning the business around (Goldstein & Kestenbaum, 2011).

## Considerations 
### Relation of Traditional Corporate Issuance
This paper is not to suggest that stock issuance post facto is a novel concept. Shareholder dilution is particularly common in Regulated Investment Companies (RICs); Real Estate Investment Companies (REITs) are a common example. These companies are required to distribute over 90% of their taxable income; "The result is that most RICs do not have significant retained earnings that can be reinvested into future growth. Expansion is done through a combination of raising equity and issuing debt," (Beyond Saving, 2019). In cases like REITs, investors are familiar and comfortable with the extra steps required to consider the value proposition of these companies as their shares are diluted. It is important to note however, that individual instances of shareholder dilution are fundamentally different from a constant or functional rate of issuance, and the market would likely react differently to an algorithmic rate of issuance in comparison to standalone dilution events.

### Workplace Democracy
An equitable distribution of ownership, while a welcome improvement, would not be the end of workers' empowerment in the workplace. Current employers see the value of bottom up insights, and have made efforts to more tightly integrate feedback loops into their decision making (see the work of CultureAmp and similar companies). While again, a welcome improvement, this does not fundamentally change the power structure of these corporations. Implementing this framework to restructure how ownership is distributed, coupled with radical transparency, collective decision making, and self-direction could have transformative effects on our economies, at the macro and micro levels (Wolff, 2012).

### Localized Ownership
When value is distributed to the workers that create it, the value necessarily stays local. With the rise of big tech nestled in Silicon Valley, significant amounts of value have been siphoned from middle America to the coasts, (MacGillis, 2021). This was distributed in the form of tech salaries and stock grants, but what would the impact be if each delivery driver received a share of their company for each shift of driving? Whether they sold their shares off or let dividends accumulate, it could be the difference between continuing to rent and purchasing a home after a few years of work. When looking at the picture of wealth inequality within America, as well as between the Global North and South, it is a story of shareholders accruing value generated by workers elsewhere. Had that value been kept by those workers, who then purchased goods and services in their communities, local economies would look different across the globe.
### Complexity
This framework, while potentially beneficial, does add complexity to an already complex topic, shrouded in mystery to many. Only 58% of American households own any investment in the stock market, and only 21% of Americans own stock in individual companies, (Phillips, 2023). This attempt to bring more working-class people into the fold would require efforts in education and accessibility, to ensure that workers understood the value, responsibility, and risks that they would be exposed to as part owners in their workplace.
### Volatility
Introducing new market mechanisms into company stock is a risky endeavor. Even in its current state, the stock market is volatile, and recent experiments in cryptocurrency show that the cutting edge is even more so (Gupta & Chaudhary, 2022). Removing the hard cap on circulating shares and stock issuance could have unpredictable results. On one hand, it could be argued that this effectively pegs share value to a function of the work required and profit made in a time period, thereby reducing speculation. On the other hand, introducing a second variable to that valuation formula and a variable circulating supply could lead to vastly higher volatility. Experiments like company towns and retirement plans exclusively consisting of the employer's stock have ruined employees financially; these are experiments that should not be repeated.

## Conclusion
Inflationary Equity as a framework is a thought experiment exploring a fundamental shift inspired by monetary policies modern and medieval, bringing ownership and equity back to the drawing board of currency ideation. By lifting the requirement that companies initially define a set number of shares, we allow for experimentation that can realign company ownership with the workers of those companies. Enshrining this mechanism of share distribution at the core of a company and bestowing the right of ownership to the workers that run it can set the foundation for a fundamentally more equitable venture, economy, and society.

## Notes
<div class="footnotes">

<a id='footnote-1' href='#footnote-1-ref'>1.</a> Currently deflating at a rate of 0.439% per year, averaged over the last 30 days at the time of writing (ultrasound.money).

</div>

## References
<div class="references">

Beyond Saving. (2019, June 9). The Pros And Cons Of Shareholder Dilution | Seeking Alpha. https://seekingalpha.com/article/4269245-pros-and-cons-of-shareholder-dilution

EIP-1559: Fee market change for ETH 1.0 chain. (n.d.). Ethereum Improvement Proposals. Retrieved December 13, 2023, from https://eips.ethereum.org/EIPS/eip-1559

Goldstein, J., & Kestenbaum, D. (2011, April 21). Why We Left The Gold Standard. NPR. https://www.npr.org/sections/money/2011/04/27/135604828

Graeber, D. (2012). Debt: The first 5,000 years (First Melville House pbk). Melville House.

Gupta, H., & Chaudhary, R. (2022). An Empirical Study of Volatility in Cryptocurrency Market. Journal of Risk and Financial Management, 15(11), Article 11. https://doi.org/10.3390/jrfm15110513

MacGillis, A. (2021). Fullfillment: America in the shadow of Amazon. MacMillan Publishers.

Phillips, M. (2023, October 18). A record share of U.S. households now own stocks. Axios. https://www.axios.com/2023/10/18/percentage-americans-own-stock-market-investing

Pukthuanthong, K., & Walker, T. (2006). On the pros and cons of employee stock options: What are the alternatives? Corporate Ownership and Control, 4(1), 266–283. https://doi.org/10.22495/cocv4i1c2p3

Ultra Sound Money. (n.d.). Retrieved December 13, 2023, from https://ultrasound.money Wolff, R. D. (2012). Democracy at work: A cure for capitalism. Haymarket Books.
</div>