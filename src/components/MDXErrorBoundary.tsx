"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class MDXErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">
          <h3 className="text-lg font-bold text-red-800 mb-2">
            Unable to render article content
          </h3>
          <p className="text-sm text-red-600">
            There was an error loading this article. Please try refreshing the page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
