---
layout: page
title: "Tickets"
permalink: "/tickets/"
---

<div id="eventbrite-widget-container-55683281193"></div>

<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

<script type="text/javascript">
    var exampleCallback = function() {
        console.log('Order complete!');

    };

    window.EBWidgets.createWidget({
        // Required
        widgetType: 'checkout',
        eventId: '55683281193',
        iframeContainerId: 'eventbrite-widget-container-55683281193',

        // Optional
        iframeContainerHeight: 1000,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    });
</script>

You can purchase tickets on this page or at [EventBrite](https://www.eventbrite.com/e/2019-wisconsin-golden-gloves-state-tournament-tickets-55683281193).
