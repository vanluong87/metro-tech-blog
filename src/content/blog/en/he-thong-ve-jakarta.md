---
title: "Automatic Fare Collection & Gates: Lessons from Jakarta MRT"
description: "Automatic fare collection (AFC) and fare gates are the commercial layer that shapes every rider's daily experience. This article covers the main components of AFC systems and how Jakarta MRT built its gates around e-tickets and contactless bank cards."
lang: "en"
date: 2026-10-22
country: "Indonesia"
tags: ["AFC", "automatic fare collection", "fare gates", "e-ticketing", "Jakarta MRT"]
draft: false
heroImage: "/images/blog/he-thong-ve-jakarta.svg"
heroImageAlt: "Diagram of an automatic fare collection (AFC) system and fare gates at a metro station"
---

## What AFC is and why it matters

Automatic Fare Collection (AFC) is the full chain of equipment and software that lets riders buy tickets, top up balances, pass through fare gates, and pay for a trip without a staffed ticket counter. On a metro line carrying hundreds of thousands of riders a day, AFC has to process each transaction almost instantly — usually under half a second per tap — to avoid backing up gates during rush hour. AFC is not just a technical system; it is also the first and last commercial touchpoint a rider has on every journey, so its reliability and speed directly shape how the whole service is perceived.

## Core components of an AFC system

- **Ticket Vending Machines (TVMs)**: let riders buy single-journey tickets or top up stored-value cards with cash or bank cards, usually placed in station concourses with multilingual touchscreens.
- **Automatic Fare Gates (AFGs)**: read a ticket or card as a rider enters and exits, calculate the distance traveled to deduct the correct fare, and warn or lock their flaps when a ticket is invalid.
- **Contactless readers**: use near-field communication (NFC) to read dedicated transit cards, contactless bank cards, or a QR code on a phone screen within a fraction of a second.
- **Central servers and back-office systems**: aggregate transaction data from every station, calculate revenue splits when a network involves multiple operators, flag fraud, and generate operational reports.
- **Interoperable payment systems**: let a single card or app work across several modes of transport in the same city — metro, bus, and ferry.

## Common fare media models

Most modern AFC systems support several fare media side by side: dedicated stored-value transit cards topped up in advance, single-journey tickets issued as a QR code or disposable magnetic card, and, increasingly, direct payment with contactless bank cards or mobile wallets — a model known as open-loop, as opposed to closed-loop systems usable only within the transit network. Open-loop payment reduces the cost of issuing and managing a dedicated card fleet, but it requires integrating with external bank payment networks and handling transaction authorization fast enough that gates can still open quickly.

## How Jakarta MRT approached it

Jakarta MRT in Indonesia built an AFC system that accepts several payment methods at the same fare gate: its own dedicated electronic transit card, multipurpose prepaid cards issued by local banks (the same cards widely used across other transport modes in Jakarta), and mobile tickets purchased through an app and shown as a QR code at the gate reader. Accepting several banks' multipurpose prepaid cards at once means riders who already carry one of these cards don't need to buy a separate transit card, but it also requires the back-office system to reconcile transactions with multiple card issuers every day.

## Operational and integration requirements

A well-run AFC system has to satisfy several requirements at once: gate response times fast enough to avoid queues during peak hours, a fallback mechanism for temporary network outages (gates must still process transactions locally and sync later), the flexibility to add new payment methods over time, and a maintenance program for the gates' mechanical parts — flaps and motors — which see very heavy daily use. The system also needs wider gates with the same fare logic for riders using wheelchairs, large luggage, or strollers.

## Takeaways

Experience from AFC rollouts in Asian cities like Jakarta points to a broader trend: metro systems are moving away from relying solely on their own dedicated transit cards and toward accepting payment methods riders already use in daily life. This lowers the cost of issuing and managing a separate card fleet, but it demands careful upfront planning so that fare gates and back-office systems can communicate reliably with multiple external payment issuers, all while keeping transaction times fast at the point riders actually interact with.
